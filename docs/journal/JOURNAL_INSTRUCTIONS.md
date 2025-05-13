Please create an engineering journal entry for today.

BEFORE YOU START:
- Set today's date as an environment variable by running: `export TODAY=$(date +%Y-%m-%d)`
- Verify the stored date by running: `echo $TODAY`
- Check if an entry for today ($TODAY) already exists in engineering-journal.md 
- If an entry for today exists, UPDATE that entry instead of creating a new one
- Run 'git log --since="12am"' to see ALL commits made today
- Run 'git status' to see ALL pending changes
- Review the most recent entry in engineering-journal.md for formatting and style
- Copy the formatting style and detail level from the most recent entry
- Review your terminal history to ensure ALL commands are documented
- **If updating an existing entry for today, review the *entire* day's history (git log, terminal, chat) to ensure ALL relevant new information is captured.**

THIS JOURNAL ENTRY MUST:
- Document EVERY development activity for TODAY'S ACTUAL DATE ($TODAY, not tomorrow or any future date)
- **Capture the essence** of ALL development activities for TODAY'S ACTUAL DATE ($TODAY, not tomorrow or any future date), applying the specified reporting granularity (see **Reporting Granularity Guidelines**).
- If an entry for today already exists, UPDATE that entry instead of creating a new one
- Follow EXACTLY the same structure as previous entries, with one exception: always include the Technical Decisions section even if previous entries don't have it
- Be placed at the TOP of docs/journal/engineering-journal.md (create file if it doesn't exist)
- Replace any existing entry for today while preserving all other entries
- If an entry for today ($TODAY) already exists, **update and augment** that entry by adding any new information not already present. **Do not remove** existing content from today's entry. Preserve all entries from other dates.
- Use natural, human-like language instead of technical jargon throughout the entire entry

IMPORTANT: Never create entries for future dates. Always use the current date ($TODAY) and update the existing entry if one exists for today.

REQUIRED SECTION HEADERS (use these EXACT headers):
## [Replace this with the actual date from $TODAY, e.g., ## 2025-05-11]
### Accomplishments
### Current State
### Technical Decisions
### Today's Next Steps
### Previous Next Steps
### Preparation for Next Session

**REPORTING GRANULARITY GUIDELINES:**

- **Summarize Thematically:** Group related activities under thematic headings (e.g., "Component Development", "Tooling Setup", "Documentation Updates").
- **Vary Detail Levels:**
    - **High Granularity (Application Changes):** Document changes directly related to the application's features, UI, core logic, tests, and components in detail. Include specific files, functions, or UI elements involved.
        - *Example:* "Added state management to `UserProfile.jsx` to handle avatar uploads."
        - *Example:* "Fixed bug in `calculateTotal` function within `CartService.js`."
    - **Medium Granularity (Journal System Changes):** Describe modifications to the journal system itself (instructions, scripts, statistics) with moderate detail. Mention the specific changes made but avoid excessive technical specifics unless crucial.
        - *Example:* "Updated journal instructions to clarify granularity requirements."
        - *Example:* "Refactored the journal reminder script for better date handling."
    - **Low Granularity (Structure, Git, Tools, Config, Setup, Troubleshooting):** Summarize changes related to project structure, organization, Git history (commits, branching), adding/configuring new tools, environment setup, configuration files, and general troubleshooting concisely. Focus on the outcome or purpose rather than step-by-step details. Avoid listing every minor configuration tweak or troubleshooting step.
        - *Example:* "Reorganized `src/utils` directory for better clarity."
        - *Example:* "Committed several configuration files after project audit."
        - *Example:* "Initialized and configured the Taskmaster MCP server."
        - *Example:* "Resolved Taskmaster setup issues by manually creating `tasks.json`."
        - *Example:* "Cleaned up unused files from the `scripts/` directory."

ACCOMPLISHMENTS SECTION GUIDELINES:
- Group accomplishments by theme or area of work (e.g., "Component Development", "Documentation", "Testing")
- Use bold headings for each thematic group followed by bulleted details
- Eliminate redundancy - don't repeat the same information in multiple places
- For example, write "Built a button that shows up in the corner" instead of "Implemented button rendering with correct positioning"
- Consolidate related items rather than listing each small change separately
- Focus on what was accomplished, not just what was changed

CURRENT STATE SECTION GUIDELINES:
- Organize this section thematically just like the Accomplishments section
- Use bold headings for major categories (e.g., "Component Status", "Development Infrastructure", "System Status")
- Provide a concise snapshot of where each aspect of the project stands
- Focus on the current state, not how it got there (that belongs in Accomplishments)
- **Repository Status:** Only include details about Git status (uncommitted changes, branch status relative to remote) if the working tree is *not* clean or *not* up-to-date with the remote origin. If clean and up-to-date, this subsection can be omitted.
- Highlight what's working and what's pending
- Keep descriptions brief and clear
- Ensure consistency between themes in Accomplishments and Current State when possible

ANTI-HALLUCINATION GUIDELINES (extremely important):
- ONLY include activities that are clearly evidenced in git history, git status, terminal history, or chat conversations
- If uncertain about any detail, use phrases like "worked on" rather than specifying details
- NEVER fabricate specific implementation details that aren't visible in the evidence
- If you can't find clear evidence for something, DO NOT mention it at all - omit completely rather than speculating
- For Technical Decisions section, only include reasoning with definitive evidence from commits, code comments, chat discussions, or obvious code changes - if uncertain, omit that decision entirely
- NEVER include speculative alternatives that were not explicitly discussed in the conversation
- DO NOT use phrases like "considered alternatives" unless specific alternatives were actually mentioned
- When documenting Technical Decisions, focus ONLY on what was explicitly stated or clearly implied in the conversation
- DO NOT include uncertain technical decisions with phrases like "appears to have" - if you can't be certain, say nothing about it
- DO NOT make up specific alternatives that were considered unless explicitly mentioned in commits/code/chats
- For Next Steps, only include items explicitly mentioned in communication
- When in doubt about ANY information, omit it entirely rather than being vague or speculative
- If a decision was made but alternatives weren't discussed, simply state the decision without speculating about alternatives

CONTENT REQUIREMENTS (repeat these checks multiple times):
✓ Use natural, human-like language throughout the entire journal entry
✓ Avoid technical jargon where simpler explanations would work better
✓ Include ALL development activities from today (do NOT include verbatim commit messages or phrases like "Commit:" or "Earlier commit:")
✓ Describe ALL activities in natural language without referencing specific commits
✓ Describe the **essence** of ALL development activities from today, applying the appropriate **Reporting Granularity Guidelines**.
✓ Group and organize activities thematically according to the Accomplishments Section Guidelines
✓ Structure the Current State section thematically according to the Current State Section Guidelines
✓ Include ALL journal system changes (if any were made)
✓ Document ALL component work (even if incomplete)
✓ Document ALL visual verification steps performed
✓ Document ALL changes to development processes
✓ Include ALL setup, configuration, and documentation work
✓ Include ALL activities even if they weren't committed
✓ Review terminal history to capture ALL commands used

TECHNICAL DECISIONS SECTION REQUIREMENTS:
- Document the reasoning behind important technical choices made today
- Focus on WHY specific approaches were chosen (not just WHAT was done)
- For each significant decision, include:
  - What alternatives were considered
  - Why the chosen approach was selected
  - Trade-offs and benefits of the decision
  - How the decision impacts the project's architecture or direction
- Highlight decisions related to:
  - Implementation approaches
  - Technology selection
  - Architecture changes
  - Performance considerations
  - Development workflow modifications
- DO NOT repeat implementation details already covered in the Accomplishments section

NEXT STEPS SECTION REQUIREMENTS:
1. "Today's Next Steps" section must:
   - Include ONLY tasks EXPLICITLY discussed/agreed to today
   - **Use Taskmaster tools (e.g., `next_task`, `get_tasks` --status=pending) to identify pending tasks that could be suitable for "Today's Next Steps". Confirm with the user if these tasks should be included.**
   - NOT include date tags
   - Focus ONLY on immediate, agreed-upon actions
   - NEVER include speculative or possible future tasks
   - **Starting a New Day:** When starting a new journal entry for a new date ($TODAY), review the most recent previous entry. Copy all items from that *previous* entry's "Today's Next Steps" section into the *new* entry's "Previous Next Steps" section. Add a date tag `(from MM-DD)` to each copied item, using the date of the *previous* entry. Only copy items that were not completed.

2. "Previous Next Steps" section must:
   - Include ALL uncompleted items from previous entries' "Today's Next Steps" sections.
   - If in doubt about whether an item is completed, include it (err on the side of inclusion).
   - Add date tags to EACH item (`(from MM-DD)` format, using the date of the entry where the item was originally listed as a "Today's Next Step").
   - **CRITICAL: Preserve Existing Date Tags:** If an item already has a date tag when moved from a previous day's "Today's Next Steps", **DO NOT** remove, change, or rewrite that date tag. It must remain exactly as it was.
   - For items without existing date tags (e.g., copied from older entries before date tags were used), use the date of the entry where they appeared.
   - Sort from newest to oldest by date tag (most recent dates first).
   - If you find duplicate/similar items from different dates, consolidate them and use the most recent date tag.
   - Count each calendar date as one journal entry (even if updated multiple times that day).
   - Add `[Old]` flag BEFORE items that are 8+ journal entries old (example: `[Old] Create user authentication (from 04-15)`).
   - Start counting age from when the item first appeared in any Next Steps section.
   - REMOVE any item over 10 journal entries old.
   - Check the Accomplishments section of recent entries to determine if items have been implemented.

REQUIRED CHECKLIST (verify EACH item):
- [ ] Included ALL journal system changes (if any)
- [ ] Included all git commits with their messages
- [ ] Ensured all activities reflected in git commits are described in natural language **according to the Reporting Granularity Guidelines**.
- [ ] Grouped accomplishments thematically with clear headings
- [ ] Used natural, human-like language where possible
- [ ] Organized Current State section thematically with clear status updates
- [ ] Included work done on components (even if incomplete)
- [ ] Included visual verification steps performed
- [ ] Included changes to development process
- [ ] Added Technical Decisions section with rationales for key choices
- [ ] Verified all Technical Decisions are based ONLY on evidence, with NO speculation about alternatives not discussed
- [ ] Applied the correct level of detail according to the **Reporting Granularity Guidelines**.
- [ ] Used two separate Next Steps sections correctly
- [ ] Added appropriate date tags to Previous Next Steps items
- [ ] Sorted Previous Next Steps from newest to oldest
- [ ] Flagged old items appropriately
- [ ] Removed any next step over 10 entries old
- [ ] Reviewed terminal history to ensure ALL commands are documented

CRITICAL: Compare your proposed journal entry with yesterday's entry to ensure consistent formatting and completeness. IMPORTANT EXCEPTION: Always include the Technical Decisions section even if it doesn't exist in previous entries.

AFTER COMPLETING THE ENTRY:
Guide the user through the git process with these commands (DO NOT run them):
   a. First show: git status
   b. Then suggest: git add docs/journal/engineering-journal.md
   c. Then suggest: git commit -m "Add journal entry for 2025-05-11" (substitute today's actual date)
   d. Then suggest: git push

Please be EXTREMELY thorough and follow EVERY instruction carefully.