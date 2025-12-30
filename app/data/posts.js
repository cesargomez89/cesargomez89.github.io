export const posts = [
  {
    slug: 'repository-pattern-in-rails',
    title: 'Mastering the Repository Pattern in Ruby on Rails',
    date: '2025-12-29',
    image: '/blog/rails_repo_pattern.png',
    excerpt:
      'Learn how to decouple your business logic from ActiveRecord and build more maintainable Rails applications using the Repository pattern.',
    content: `
The Repository Pattern is a design pattern that mediates between the domain and data mapping layers, acting like an in-memory collection of domain objects. In Ruby on Rails, it helps reduce coupling with ActiveRecord and creates a clear boundary for all persistence-related business logic.

I don’t use repositories to fight Rails — I use them to **control where persistence logic lives** and to keep the rest of the system focused on intent instead of implementation details.

Repositories aren’t just about reducing logic in models, controllers, or services.  
They’re about **removing persistence decisions from anywhere they appear** and isolating them in one explicit place.

If code knows *how* data is queried, stored, or mutated, that logic belongs behind a repository boundary.

---

## Why I Use Repositories in Rails

### Reduce Persistence Logic Everywhere

As Rails applications grow, persistence logic tends to leak into every layer of the system:

- Controllers start building queries
- Services start mutating records
- Background jobs persist state
- Mailers and rake tasks load data with hidden assumptions
- Models become overloaded with scopes and callbacks

Controllers, services, and models are just common examples — they’re not special.

Repositories allow me to **remove database logic from any place it appears** and encapsulate it in a single, explicit boundary.

If something touches the database, I want to know exactly where it lives.  
That rule applies no matter *where* the code exists in the application.

---

### A Single Place for Database Business Logic

Repositories act as a boundary:

- Controllers orchestrate
- Services coordinate
- Jobs execute workflows
- **Repositories own persistence decisions**

This makes the system easier to reason about and significantly lowers cognitive load.

---

### Better Naming and Clear Intent

Repositories let me write **intent-driven methods** instead of generic queries.

Instead of sharing open-ended scopes or ad-hoc queries, I define methods that explain:
- why the query exists
- what business context it belongs to
- what rules it enforces

This improves readability and reduces accidental reuse.

---

### Split Repositories by Business Unit (DDD-Friendly)

I don’t enforce one repository per model.

I create:
- multiple repositories if needed
- separated by business capability
- aligned with DDD modules or bounded contexts

A repository represents **ownership of persistence rules**, not a thin wrapper around a table.

---

## Before Repositories: Logic in Controllers

### Controller Example (Before)

\`\`\`ruby
class UsersController < ApplicationController
  def index
    @users =
      User
        .where(active: true)
        .where("last_login_at > ?", 30.days.ago)
        .order(created_at: :desc)
  end
end
\`\`\`

Problems:
- Query logic lives in the controller
- Business intent is unclear
- Hard to reuse safely
- Hard to test without hitting the database

---

## Before Repositories: Logic in Services

### Service Example (Before)

\`\`\`ruby
class SyncExternalUser
  def call(payload)
    user =
      User.find_or_initialize_by(external_id: payload[:external_id])

    user.assign_attributes(
      email: payload[:email],
      name: payload[:name],
      active: payload[:active]
    )

    user.save!
    user
  end
end
\`\`\`

Better than controllers, but:
- The service knows too much about persistence
- It’s tightly coupled to ActiveRecord
- Hard to mock without touching the database

The problem wasn’t *where* the logic lived — it was that persistence rules weren’t isolated.

---

## Introducing the Repository Layer

Repositories move **all persistence-related logic** into one place — regardless of who needs it.

Controllers, services, jobs, and background workers all depend on repositories instead of ActiveRecord directly.

---

## Repository Architecture Diagram

\`\`\`mermaid
graph TD
    A[Controller / Job / Resolver] --> B[Service]
    B --> C[Repository]
    C --> D[ActiveRecord Model]
    D --> E[(Database)]
\`\`\`

Key ideas:
- Only repositories talk directly to ActiveRecord
- Everything above works with intent, not queries
- Persistence decisions have a single owner

---

## Base Application Repository

\`\`\`ruby
# frozen_string_literal: true

class ApplicationRepository
  class << self
    delegate :all, :create, :create!, :update, :transaction,
             :find_each, :pluck, :order, to: :model

    def by_id!(id)
      by_attributes!(id:)
    end

    def by_id(id)
      by_attributes(id:)
    end

    def by_ids(ids)
      model.where(id: ids)
    end

    def build(*)
      model.new(*)
    end

    def save(record)
      record.save
    end

    def save!(record)
      record.save!
    end

    def update_all(collection, attributes)
      collection.update_all(attributes)
    end

    def destroy(record)
      record.destroy
    end

    def by_attributes!(attributes)
      model.find_by!(attributes)
    end

    def by_attributes(attributes)
      model.find_by(attributes)
    end

    def model
      name.gsub("Repository", "").constantize
    end

    def scope
      model
    end
  end
end
\`\`\`

---

## User Repository Example

\`\`\`ruby
# frozen_string_literal: true

class UserRepository < ApplicationRepository
  class << self
    def by_email(email)
      model.find_by(email: email.downcase)
    end

    def active
      scope.where(active: true)
    end

    def recently_active
      scope.where("last_login_at > ?", 30.days.ago)
    end

    def find_or_create_by_external_id(external_id, attributes)
      user = model.find_or_initialize_by(external_id:)
      user.assign_attributes(attributes)
      user.save!
      user
    end
  end
end
\`\`\`

---

## Controllers After Repositories

\`\`\`ruby
class UsersController < ApplicationController
  def index
    @users =
      UserRepository
        .active
        .merge(UserRepository.recently_active)
  end
end
\`\`\`

Controllers orchestrate — repositories decide *how*.

---

## Services After Repositories

\`\`\`ruby
class SyncExternalUser
  def call(payload)
    UserRepository.find_or_create_by_external_id(
      payload[:external_id],
      payload.slice(:email, :name, :active)
    )
  end
end
\`\`\`

---

## Testing With Repositories

### Service Spec (Mocked)

\`\`\`ruby
RSpec.describe SyncExternalUser do
  let(:payload) do
    {
      external_id: "123",
      email: "test@example.com",
      name: "Test",
      active: true
    }
  end

  it "delegates persistence to the repository" do
    expect(UserRepository)
      .to receive(:find_or_create_by_external_id)

    described_class.new.call(payload)
  end
end
\`\`\`

### Repository Spec (Integration)

\`\`\`ruby
RSpec.describe UserRepository do
  describe ".by_email" do
    let!(:user) { create(:user, email: "test@example.com") }

    it "finds user by downcased email" do
      expect(
        described_class.by_email("TEST@EXAMPLE.COM")
      ).to eq(user)
    end
  end
end
\`\`\`

---

## A Note on “Classic” Repositories

This is **not** a pure Domain-Driven Design (DDD) repository implementation.

In classic DDD:
- repositories hide the ORM entirely
- repositories return domain entities, not ActiveRecord models
- persistence and domain models are strictly separated

In Rails, ActiveRecord *is* often the domain model.  
This approach embraces that reality instead of fighting it.

The goal here is **ownership and clarity**, not abstraction for its own sake.

If you’re interested in the classic interpretation of the Repository Pattern, these are great resources:

- *Domain-Driven Design* — Eric Evans  
- *Patterns of Enterprise Application Architecture* — Martin Fowler  
- *Implementing Domain-Driven Design* — Vaughn Vernon  
- Martin Fowler’s article on Repositories and Data Mappers

Each approach has trade-offs.  
Use the one that best fits your domain, team, and constraints.

---

## When NOT to Use Repositories

You probably **don’t need repositories** if:
- Your app is a small CRUD application
- Business rules are minimal
- Queries are trivial and unlikely to evolve
- You’re still validating product-market fit

Repositories are a **scaling tool**, not a default.

---

## Final Thoughts

Repositories aren’t about fixing Rails.  
They’re about **owning persistence decisions globally**.

Where the logic comes from doesn’t matter.  
If it touches the database, the repository owns it.

Rails stays Rails — but repositories keep it maintainable long after the MVP phase.
    `
  }
];
