# Journal Statistics System Refactoring Plan

## Goal
To create a weekly statistics and summary system that complements the daily journal system by:
- Generating comprehensive development statistics from multiple sources:
  - Git history (commits, files changed, etc.)
  - Daily journal entries (accomplishments, decisions, next steps)
  - Terminal history (commands used, tools accessed)
  - Project documentation changes
  - Code review comments and discussions
- Creating weekly summaries of key highlights from daily entries
- Maintaining separation from daily entries to preserve the daily journal system's functionality
- Following the same AI-assisted pattern as the daily journal system

## Current Status
1. The journal system uses a pattern where:
   - Scripts are simple alert/reminder mechanisms
   - Detailed instructions are in separate files for Cursor/Claude
   - The AI generates the content based on these instructions
   - User manually copies instructions and handles git workflow

2. Issues identified:
   - Statistics instructions are split between `preferences.md` and the script
   - Statistics entries are mixed with daily entries in one file - this breaks the daily journal entry system that relies on referencing the most recent entry
   - No weekly summary of highlights from daily entries
   - Script is doing too much when it should be simple like `journal-reminder.sh`

## Detailed Execution Plan

### Phase 1: Create New Instructions File (similar in mant ways to docs/journal/JOURNAL_INSTRUCTIONS.md)
1. Create `JOURNAL_STATISTICS_INSTRUCTIONS.md` with:
   - Copy-paste instructions for Cursor/Claude in text format
   - Statistics-specific requirements and categories
   - Weekly summary requirements
   - Clear formatting guidelines
   - References to shared instructions in `preferences.md`:
     - Date management
     - Git workflow
     - Anti-hallucination guidelines

### Phase 2: Simplify Script
1. Refactor `journal-statistics.sh` to:
   - Be a simple reminder script like `journal-reminder.sh`
   - Display the instructions file contents
   - Show git status and commit instructions
   - Remove all complex logic

### Phase 3: File Structure Updates
1. Create new `engineering-statistics.md` for statistics entries
2. Update `JOURNAL_SYSTEM.md` to reflect new structure
3. Remove unneeded statistics instructions from `preferences.md`

### Phase 4: Documentation Updates
1. Update `JOURNAL_STATISTICS.md` to:
   - Reference new instructions file
   - Document the new file structure
   - Update the manual run instructions
   - Keep the cron job setup instructions
2. Update project's README.md to reflect new journal system structure 