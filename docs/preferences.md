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
- Regular commits after major changes
- Commits approximately every 30 minutes
- Use GitHub CLI for all GitHub interactions

## Development Process
- Ask for confirmation before implementing each individual step
- Propose one change at a time and wait for my acceptance
- Never implement multiple features at once without explicit approval
- Break down larger tasks but wait for approval on each subtask

## Terminal Commands
- Provide copy buttons for all terminal commands
- Do NOT run commands automatically - allow manual copy/paste into terminal
- Never assume command execution is desired
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
- Structure entries with these specific sections:
  1. A detailed summary of the day's accomplishments
  2. A clear snapshot of the project's current state
  3. Explicitly discussed next steps (not speculative)
  4. Recommendations for next session preparation
- **Include ALL development activities from the entire day, not just recent work:**
  - All git commits made during the day
  - Setup, configuration, and documentation work
  - All features and components created or modified
  - Development activities even if they weren't committed
- Format as markdown with date header (## YYYY-MM-DD)
- Store entries chronologically in engineering-journal.md with newest at top
- When updating, replace only the specific entry for the current date
- Preserve all entries from other dates
- Print entries to chat for quick review
- Stage commits with consistent message format "Add journal entry for YYYY-MM-DD"

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

*Last updated: May 10, 2025* 