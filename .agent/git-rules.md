# Repository Git Standards & Rules

To maintain high-fidelity engineering standards, all agents MUST follow these rules for Git operations.

## Branch Naming Conventions
- Pattern: `[type]/[kebab-case-description]`
- Types Allowed:
  - `feat`: A new feature
  - `fix`: A bug fix
  - `refactor`: A code change that neither fixes a bug nor adds a feature
  - `perf`: A code change that improves performance
  - `chore`: Updating build tasks, package manager configs, etc.
  - `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
  - `docs`: Documentation only changes
- Example: `perf/asset-optimization-surgical`

## Commit Message Conventions
- Follow **Conventional Commits**: `type(scope): [professional-description]`
- Example (Feat): `feat(modal): implement interactive project inquiry modal`
- Example (Perf): `perf(assets): optimize 14MB profile image to 34KB WebP`

## Pushing Workflow
- Always aim to use the specialized `/push` workflow in `.agents/workflows/push.md` for high-fidelity automation.
- Never push directly to `main` for complex features; always isolate changes in a feature branch.
