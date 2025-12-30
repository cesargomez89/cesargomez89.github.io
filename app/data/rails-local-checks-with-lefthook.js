export const railsLocalChecksWithLefthook = {
  slug: 'rails-local-checks-with-lefthook',
  title: 'Enforcing Local Quality Checks in Rails with Lefthook',
  date: '2025-12-30',
  image: '/blog/rails_lefthook.png',
  excerpt:
    'Learn how to use Lefthook in Rails projects to enforce Rubocop, RSpec, Undercover, and migration checks locally — and why local hooks plus CI lead to healthier teams and more reliable codebases.',
  content: `
Modern Rails teams rarely fail because they lack CI.  
They fail because **feedback arrives too late**.

If developers only discover issues after opening a pull request, the process is already inefficient. That’s why I strongly believe in enforcing **local quality checks before pushing code**, and why Lefthook has become my go-to tool for Rails projects.

This post covers:
- Why local checks matter
- How to use Lefthook in Rails
- The exact checks I run
- When and how to bypass hooks safely
- How this setup educates developers instead of policing them

---

## Why Local Checks Matter

CI is a safety net — not a teaching tool.

Local checks:
- Shorten feedback loops
- Reduce noisy CI failures
- Keep pull requests focused on design and intent
- Make expectations explicit before review

The goal is not to block developers, but to **guide them early**.

---

## Why Lefthook?

Lefthook is a Git hooks manager that is:
- Fast
- Simple
- Language-agnostic
- Easy to configure
- Easy to run in parallel

For Rails teams, the biggest win is that **Lefthook can be installed via the Gemfile**, keeping tooling versioned and consistent.

---

## Installing Lefthook via the Gemfile

Instead of relying on global binaries, I install Lefthook as a development dependency.

### Gemfile

\`\`\`ruby
group :development do
  gem "lefthook", require: false
end
\`\`\`

Then install and initialize it:

\`\`\`bash
bundle install
bundle exec lefthook install
\`\`\`

### Why This Matters

- Tooling is versioned with the project
- No global installs required
- New developers get hooks after \`bundle install\`
- CI runs the same commands
- Fits naturally into Rails workflows

---

## How Lefthook Works

Lefthook manages Git hooks using a single configuration file: \`lefthook.yml\`.

Hooks like \`pre-commit\` or \`pre-push\` are declarative and version-controlled, instead of living as ad-hoc shell scripts inside \`.git/hooks\`.

---

## The Checks I Run Before Pushing

On \`pre-push\`, I run:

1. **Rubocop** — enforce consistent style
2. **RSpec** — ensure tests pass
3. **Undercover** — ensure new or modified code is tested
4. **Migration check** — keep schema and migrations in sync

These checks run locally and **again in CI**.

Local hooks guide behavior.  
CI enforces correctness.

---

## Rubocop: Remove Style From Code Review

Style discussions during code review are wasted time.

\`\`\`bash
bundle exec rubocop
\`\`\`

If Rubocop fails locally, the push is blocked.  
This guarantees consistent formatting and cleaner reviews.

---

## RSpec: Don’t Push Broken Behavior

Before pushing code, tests must pass:

\`\`\`bash
bundle exec rspec
\`\`\`

This prevents:
- Obvious regressions
- Broken builds
- Distracting CI failures

Even partial or scoped runs are better than nothing — the key is fast feedback.

---

## Undercover: Are You Testing What You Changed?

Passing tests doesn’t mean your changes are tested.

Undercover focuses on **new and modified lines**, not total coverage, and answers a much better question:

> “Is the code I’m pushing covered by tests?”

\`\`\`bash
bundle exec undercover
\`\`\`

---

## My \`.undercover\` Configuration

\`\`\`
-l coverage/lcov.info
-c origin/main
-x "spec/**/*,db/**/*,db/*,lib/tasks/*,config/**/*,config/*"
\`\`\`

### Why This Works Well

- Uses SimpleCov’s LCOV output
- Compares against \`origin/main\`
- Excludes infrastructure and generated code
- Keeps business logic visible and accountable

Coverage is used as **feedback**, not a score.

---

## Rule of Thumb: Coverage Is a Tool, Not a Religion

Not all code deserves tests.

Valid cases for exclusions:
- Framework configuration
- Generated files
- Glue code with no business logic
- One-off scripts

If you avoid tests:
- Exclude files intentionally
- Prefer narrow exclusions
- Document the reason

Undercover and SimpleCov work best when they help developers understand *what matters*, not when they enforce arbitrary numbers.

---

## Preventing Dirty Schemas and Broken Migrations

One of the most common long-term problems in Rails projects is **migration rot**.

Symptoms include:
- Migrations failing on fresh databases
- Schema drifting from migrations
- Teams cloning databases instead of running migrations
- Broken or contradictory migration histories

To prevent this, I enforce a simple rule:

> If migrations change the schema, the schema must be committed.

---

## Migration Check Script

This is the script I use:

\`\`\`sh
#!/bin/sh
set -e

echo "\\e[32mTriggering pre-push hook! set LEFTHOOK=0 to avoid this check\\e[0m"
echo "\\e[32mRunning db:migrate...\\e[0m"

bundle exec rails db:migrate --quiet

if [ -n "$(git status --porcelain db/schema.rb)" ]; then
  echo "\\e[31mChanges detected in the db schema after running db:migrate.\\e[0m"
  echo "\\e[31mPlease commit your schema changes or cleanup your db before pushing.\\e[0m"
  echo "\\e[31mEx: bundle exec rails db:drop db:create db:migrate\\e[0m"
  exit 1
else
  echo "\\e[32mNo changes detected to the db schema.\\e[0m"
fi
\`\`\`

This keeps migrations runnable, schemas reliable, and fresh setups working.

---

## Lefthook Configuration Example

\`\`\`yaml
pre-push:
  parallel: true
  commands:
    rubocop:
      run: bundle exec rubocop
    rspec:
      run: bundle exec rspec
    undercover:
      run: bundle exec undercover
    migrations:
      run: ./scripts/check_schema.sh
\`\`\`

Each command fails fast and provides immediate feedback.

---

## How (and When) to Bypass Hooks

Hooks should guide developers — not trap them.

Legitimate reasons to bypass:
- Draft or WIP branches
- Spikes and experiments
- Emergency hotfixes
- Debugging flaky checks
- Very long-running test suites

---

## Recommended Bypass: \`LEFTHOOK=0\`

Lefthook respects an environment variable:

\`\`\`bash
LEFTHOOK=0 git push
\`\`\`

This:
- Skips all Lefthook hooks
- Is explicit and intentional
- Is easy to document and teach
- Leaves a clear shell history

You can also disable it temporarily:

\`\`\`bash
export LEFTHOOK=0
git push
unset LEFTHOOK
\`\`\`

### Why Not Just \`--no-verify\`?

\`\`\`bash
git push --no-verify
\`\`\`

This works, but:
- Skips *all* Git hooks
- Is less explicit about intent
- Is easier to misuse

**Rule of thumb**:  
Prefer \`LEFTHOOK=0\`. Let CI and code review enforce the rest.

---

## Hooks Guide, CI Enforces

Bypassing hooks is not a failure.

What matters is:
- CI runs the same checks
- Issues surface during review
- Expectations are consistent across the team

Local hooks educate.  
CI enforces.

---

## Final Thoughts

Lefthook isn’t about control.  
It’s about **fast feedback and shared standards**.

This setup has helped my teams:
- Improve code quality earlier
- Reduce CI noise
- Encourage meaningful tests
- Keep migrations healthy
- Teach developers what “done” looks like

Local checks won’t replace good engineers — but they make good engineers faster.
    `
}
