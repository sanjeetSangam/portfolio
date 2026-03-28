---
description: Automatically switch to main and pull the latest changes from origin
---

This workflow synchronizes your project with the latest state of the primary branch. Triggers: `/start` or "follow the start workflow".

1. **Switch to Primary Branch**
// turbo
`git checkout main`

2. **Ensure Synchronization**
- Ensures local main is up-to-date with remote origin
// turbo
`git pull origin main`

3. **Success Confirmation**
- Report the **Latest Commit Hash** on main and **Summary of Pulled Changes** if any.
- Ask: "Would you like to start a new feature branch now?"
