---
description: Automatically checkout, commit, and push changes using professional Git standards
---

This workflow automates the entire Git lifecycle. Triggers: `/push` or "follow the push workflow".

1. **Switch to Primary Branch**
// turbo
`git checkout main`

2. **Ensure Synchronization**
// turbo
`git pull origin main`

3. **Isolate Changes in a Feature Branch**
- Rule: Branch name MUST follow `[type]/[kebab-case-description]`
- Types: `feat`, `fix`, `refactor`, `perf`, `chore`, `docs`, `style`
- Example: `perf/image-optimization`
// turbo
`git checkout -b [new-branch-name]`

4. **Stage Optimized Changes**
// turbo
`git add .`

5. **Commit with Professional Standards**
- Rule: Follow Conventional Commits: `type(scope): description`
- Example: `perf(assets): optimize profile image from 14MB to 34KB`
// turbo
`git commit -m "[conventional-commit-message]"`

6. **Push to Remote**
// turbo
`git push -u origin [new-branch-name]`

7. **Success Confirmation**
- Report the **Commit Hash**, **Branch Name**, and **Summary of Optimization**.
