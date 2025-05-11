--- COPY FROM HERE ---

Please create an engineering journal entry for today.

BEFORE YOU START:
- Run 'git log --since="12am"' to see ALL commits made today
- Run 'git status' to see ALL pending changes
- Review the most recent entry in engineering-journal.md for formatting and style
- Copy the formatting style and detail level from the most recent entry
- Review your terminal history to ensure ALL commands are documented

THIS JOURNAL ENTRY MUST:
- Document EVERY development activity from today
- Follow EXACTLY the same structure as previous entries
- Be placed at the TOP of docs/journal/engineering-journal.md (create file if it doesn't exist)
- Replace any existing entry for today while preserving all other entries

REQUIRED SECTION HEADERS (use these EXACT headers):
## [Use today's date in YYYY-MM-DD format]
### Accomplishments
### Current State
### Today's Next Steps
### Previous Next Steps
### Preparation for Next Session

CONTENT REQUIREMENTS (repeat these checks multiple times):
✓ Include EVERY git commit made today with descriptions
✓ Include ALL journal system changes (if any were made)
✓ Document ALL component work (even if incomplete)
✓ Document ALL visual verification steps performed
✓ Document ALL changes to development processes
✓ Include ALL setup, configuration, and documentation work
✓ Include ALL activities even if they weren't committed
✓ Review terminal history to capture ALL commands used

NEXT STEPS SECTION REQUIREMENTS:
1. "Today's Next Steps" section must:
   - Include ONLY tasks EXPLICITLY discussed/agreed to today
   - NOT include date tags
   - Focus ONLY on immediate, agreed-upon actions
   - NEVER include speculative or possible future tasks

2. "Previous Next Steps" section must:
   - Include ALL uncompleted items from previous entries
   - If in doubt about whether an item is completed, include it (err on the side of inclusion)
   - Add date tags to EACH item (format: "(from MM-DD)" where MM-DD is the actual date with leading zeros, e.g., "05-01")
   - For items without existing date tags, use the date of the entry where they appeared
   - Sort from newest to oldest by date tag (most recent dates first)
   - If you find duplicate/similar items from different dates, consolidate them and use the most recent date
   - Count each calendar date as one journal entry (even if updated multiple times that day)
   - Add [Old] flag BEFORE items that are 8+ journal entries old (example: "[Old] Create user authentication (from 04-15)")
   - Start counting age from when the item first appeared in any Next Steps section
   - REMOVE any item over 10 journal entries old
   - Check the Accomplishments section of recent entries to determine if items have been implemented

REQUIRED CHECKLIST (verify EACH item):
- [ ] Included ALL journal system changes (if any)
- [ ] Included all git commits with their messages
- [ ] Included work done on components (even if incomplete)
- [ ] Included visual verification steps performed
- [ ] Included changes to development process
- [ ] Used two separate Next Steps sections correctly
- [ ] Added appropriate date tags to Previous Next Steps items
- [ ] Sorted Previous Next Steps from newest to oldest
- [ ] Flagged old items appropriately
- [ ] Removed any next step over 10 entries old
- [ ] Reviewed terminal history to ensure ALL commands are documented

CRITICAL: Compare your proposed journal entry with yesterday's entry to ensure consistent formatting and completeness.

AFTER COMPLETING THE ENTRY:
1. Print the COMPLETE entry to our chat for review
2. Guide the user through the git process with these commands (DO NOT run them):
   a. First show: git status
   b. Then suggest: git add docs/journal/engineering-journal.md
   c. Then suggest: git commit -m "Add journal entry for 2025-05-11" (substitute today's actual date)
   d. Then suggest: git push

Please be EXTREMELY thorough and follow EVERY instruction carefully.

--- TO HERE --- 