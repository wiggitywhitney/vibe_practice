# User Preferences

## Project Setup
- Initialize Git repository for every new project
- Connect to GitHub using GitHub CLI (gh)
- Set up hot reloading for development
- Make no assumptions about programming languages or technologies

## DevOps & Deployment
- Use port 8080 for all web applications to align with DevOps standards
- Implement graceful shutdown handling in all applications
- Properly handle exit status codes (0 for success, non-zero for errors)
- Design applications to be container-friendly

## Git & GitHub Workflow
- Suggest commits after major changes
- Commits approximately every 30 minutes
- Use GitHub CLI for all GitHub interactions

## Development Process

- **General Rule: No changes will be applied without explicit approval.**
- Information gathering steps (reading files, searching code, running read-only commands) do not require approval.

- **Application Code Changes (e.g., React components, CSS, server logic):**
  - Ask for confirmation before implementing each logical step or small group of related changes.
  - Generally, propose changes affecting only one file at a time, though multiple related changes within that file are acceptable per proposal.
  - **When proposing multiple changes within a single file, present them as a numbered list** to allow for specific feedback or approval/rejection of individual items.
  - Explain the changes being made clearly.

- **Other Tasks (e.g., Journaling, Taskmaster, Config Files, Documentation):**
  - Changes can be proposed in logical groups, potentially affecting multiple files at once.
  - **When proposing multiple changes in a single step, present them as a numbered list** to allow for specific feedback or approval/rejection of individual items.
  - Wait for approval on the proposed group before implementing any changes.

- **Task Breakdown:**
  - Break down larger tasks but wait for approval on each subtask implementation step (following the rules above based on task type).

## Terminal Commands
- Provide copy buttons for all terminal commands
- Automatic execution of terminal commands via tools is acceptable.
- Always format commands as bash code blocks for clickable "run" functionality

## UI/UX Preferences
- Always preserve image aspect ratios - never stretch images (includes favicons, icons, and all UI elements)
- Use appropriate sizing methods (contain/cover) based on context
- Pay special attention to favicons and small UI elements that browsers might automatically resize

## File Management
- Add images directly to appropriate directories (public, assets, etc.) rather than through chat
- Prefer manual file uploads to ensure proper formatting and avoid corruption

## Communication Style
- Provide detailed explanations for each step
- Evaluate requests against best practices
- Suggest better alternatives when appropriate
- Break complex tasks into manageable subtasks

## Context & Experience
- Coming back to application development after 5 years in DevOps
- Need progressive complexity with clear explanations
- Want guidance on modern patterns and practices
- Will indicate if explanations become overwhelming

## Journal Entries
- Create daily journal entries for days with development activity
- For detailed journal entry requirements and formats, see [docs/journal/JOURNAL_INSTRUCTIONS.md](./journal/JOURNAL_INSTRUCTIONS.md)
- All journal entries should follow the guidelines in JOURNAL_INSTRUCTIONS.md exactly

## Journal Statistics
- Generate weekly statistics for the engineering journal
- Run statistics generation on Monday mornings
- Structure statistics entries with these specific sections:
  1. Popular Technologies (most mentioned technologies, growing trends, new tech)
  2. Terminology Frequency (technical terms, concepts, and tools used)
  3. Development Patterns (recurring workflows, time allocation, collaboration)
  4. Development Activity (features completed, productive periods, not just commit counts)
  5. Code Changes (files modified, lines added/removed, most changed files)
  6. Focus Areas (categories of work based on commit messages and journal entries)
  7. Time-based Patterns (most productive days/times, consistency metrics)
  8. Knowledge Gaps & Learning (topics researched, documentation needed, learning curve)
- Follow these data integrity guidelines:
  - Use ONLY verifiable git data for commit counts, files changed, etc.
  - Analyze actual commit messages for focus areas
  - Clearly mark any estimates with [ESTIMATE] and only include if 80%+ confident
  - Include estimates only when derived from multiple consistent data points
  - Use "Data not available" rather than making up statistics
  - For keyword analysis, only include terms actually found in code/commits
- Format as markdown with special date range header (## Statistics: YYYY-MM-DD to YYYY-MM-DD)
- Place statistics entries after the current day's entry but before previous days' entries
- Never overwrite statistics entries when creating daily journal entries
- Print statistics to chat for review
- Stage commits with consistent message format "Add weekly journal statistics for YYYY-MM-DD"

## Documentation
- Keep this preferences.md file updated as new preferences are discovered
- This file is public and committed to the repository as a reference

## Quality Assurance
- Double-check that all implementations follow the preferences in this file
- Verify image aspect ratios are preserved in all contexts
- Explicitly mention when a trade-off is necessary that might conflict with preferences

*Last updated: May 12, 2025* 