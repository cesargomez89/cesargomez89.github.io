export const avoidingNPlusOneQueriesInRails = {
  slug: 'avoiding-n-plus-one-queries-in-rails',
  title: 'Avoiding N+1 Queries in Rails: Bullet, Prosopite, and Strict Loading',
  date: '2026-01-08',
  image: '/blog/rails_n_plus_one.png',
  excerpt:
    'N+1 queries are one of the most common performance problems in Rails. In this post, I explain how to deal with them using Bullet, Prosopite, and the Rails strict loading feature.',
  content: `
N+1 queries are one of those problems that *everyone* hits in Rails sooner or later.  
They are easy to introduce, hard to notice at first, and very painful when your app starts to grow.

I’ve seen this many times in real projects: everything works fine in development, then production gets slow, and suddenly you see hundreds of extra queries per request.

The good news is: today we have better tools than ever to avoid this.

In this post, I’ll talk about three ways to deal with N+1 queries:

- The classic **Bullet** gem  
- The newer **Prosopite** gem  
- And **strict loading**, a feature that comes directly with Rails  

---

## What is an N+1 Query?

An N+1 query happens when you load a list of records and then Rails fires one extra query *per record* when you access an association.

Example:

\`\`\`ruby
users = User.all

users.each do |user|
  puts user.posts.count
end
\`\`\`

What Rails does here:

1. One query to load users  
2. One query per user to load posts  

If you have 100 users, congrats 🎉 you just ran **101 queries**.

Yes, you could fix this with \`includes\`, but the real problem is **forgetting to do it**.

---

## Bullet: the Classic One

Bullet has been around for years and many Rails devs know it.

It watches your queries and tells you when you’re doing N+1, usually with browser alerts or logs.

### Basic setup

\`\`\`ruby
# Gemfile
group :development do
  gem "bullet"
end
\`\`\`

\`\`\`ruby
# config/environments/development.rb
config.after_initialize do
  Bullet.enable = true
  Bullet.alert = true
  Bullet.rails_logger = true
end
\`\`\`

### What I like about Bullet

- Easy to use  
- Very popular and well tested  
- Great for old or legacy apps  

### What I don’t like so much

- Development only  
- Can be very noisy  
- You usually fix things *after* Bullet complains  

Bullet is reactive. It helps, but it doesn’t prevent mistakes.

---

## Prosopite: Simple and Production-Friendly

Prosopite is a newer gem and much simpler.

Instead of looking at associations, it looks at **repeated SQL queries** and detects patterns that look like N+1.

### Setup

\`\`\`ruby
# Gemfile
gem "prosopite"
\`\`\`

\`\`\`ruby
# config/application.rb
config.after_initialize do
  Prosopite.scan
end
\`\`\`

If you want it to raise errors:

\`\`\`ruby
Prosopite.raise = true
\`\`\`

### Why Prosopite is nice

- Very small and focused  
- Can run in production  
- Works well in CI  
- No extra UI or alerts  

### Downsides

- It doesn’t know about ActiveRecord associations  
- Sometimes it tells you *there is a problem* but not exactly *where*  

Prosopite works great as a **safety net**, especially in production.

---

## Strict Loading: Rails Doing It the Right Way

Now comes my favorite part: **strict loading**.

Strict loading doesn’t just detect N+1 queries.  
It **prevents lazy loading completely**.

If Rails tries to load an association that wasn’t eager loaded, it blows up.

And honestly, that’s a good thing.

---

## Strict Loading on a Relation

\`\`\`ruby
user = User.strict_loading.first
user.address.city
# raises ActiveRecord::StrictLoadingViolationError
\`\`\`

Rails forces you to be explicit about what data you need.

---

## Strict Loading on a Record

You can also enable it per record:

\`\`\`ruby
user = User.first
user.strict_loading!

user.comments.to_a
# raises ActiveRecord::StrictLoadingViolationError
\`\`\`

This is very useful in service objects or background jobs.

---

## Only Fail on Real N+1 Queries

Sometimes strict loading can feel too aggressive.  
Rails gives us a nicer mode:

\`\`\`ruby
user.strict_loading!(mode: :n_plus_one_only)
\`\`\`

Example:

\`\`\`ruby
user.address.city
# OK (single query, no N+1)

user.comments.first.likes.to_a
# raises ActiveRecord::StrictLoadingViolationError
\`\`\`

This mode gives you **strong protection without too much noise**.

---

## Strict Loading on an Association

You can also enforce it at the model level:

\`\`\`ruby
class Author < ApplicationRecord
  has_many :books, strict_loading: true
end
\`\`\`

Now anyone using \`author.books\` must preload it.

No excuses 😄

---

## Global Rails Configuration

Rails also gives us global options.

### Raise or Log Violations

\`\`\`ruby
config.active_record.action_on_strict_loading_violation = :raise
# or
config.active_record.action_on_strict_loading_violation = :log
\`\`\`

### Enable Strict Loading by Default

\`\`\`ruby
config.active_record.strict_loading_by_default = true
\`\`\`

This is powerful, but I recommend enabling it slowly.

### Strict Loading Mode

\`\`\`ruby
config.active_record.strict_loading_mode = :all
# or
config.active_record.strict_loading_mode = :n_plus_one_only
\`\`\`

---

## Which One Should You Use?

Short answer: **it depends**, but here’s my personal take.

- **Bullet** → Good for old projects  
- **Prosopite** → Great as a production safety net  
- **Strict loading** → Best option for new code  

If you’re starting a new Rails app today, strict loading should be part of your default mindset.

---

## Final Thoughts

N+1 queries are not a Rails problem anymore.  
They’re a **discipline problem**.

Rails strict loading helps us write code that is explicit, predictable, and fast by default.

Once you get used to it, you’ll wonder how you ever lived without it.

Happy coding 🚀
`
}
