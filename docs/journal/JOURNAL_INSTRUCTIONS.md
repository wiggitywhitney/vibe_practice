--- COPY FROM HERE ---

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

THIS JOURNAL ENTRY MUST:
- Document EVERY development activity for TODAY'S ACTUAL DATE ($TODAY, not tomorrow or any future date)
- If an entry for today already exists, UPDATE that entry instead of creating a new one
- Follow EXACTLY the same structure as previous entries, with one exception: always include the Technical Decisions section even if previous entries don't have it
- Be placed at the TOP of docs/journal/engineering-journal.md (create file if it doesn't exist)
- Replace any existing entry for today while preserving all other entries
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
- [ ] Grouped accomplishments thematically with clear headings
- [ ] Used natural, human-like language where possible
- [ ] Organized Current State section thematically with clear status updates
- [ ] Included work done on components (even if incomplete)
- [ ] Included visual verification steps performed
- [ ] Included changes to development process
- [ ] Added Technical Decisions section with rationales for key choices
- [ ] Verified all Technical Decisions are based ONLY on evidence, with NO speculation about alternatives not discussed
- [ ] Used two separate Next Steps sections correctly
- [ ] Added appropriate date tags to Previous Next Steps items
- [ ] Sorted Previous Next Steps from newest to oldest
- [ ] Flagged old items appropriately
- [ ] Removed any next step over 10 entries old
- [ ] Reviewed terminal history to ensure ALL commands are documented

CRITICAL: Compare your proposed journal entry with yesterday's entry to ensure consistent formatting and completeness. IMPORTANT EXCEPTION: Always include the Technical Decisions section even if it doesn't exist in previous entries.

AFTER COMPLETING THE ENTRY:
1. Print the COMPLETE entry to our chat for review
2. Guide the user through the git process with these commands (DO NOT run them):
   a. First show: git status
   b. Then suggest: git add docs/journal/engineering-journal.md
   c. Then suggest: git commit -m "Add journal entry for 2025-05-11" (substitute today's actual date)
   d. Then suggest: git push

Please be EXTREMELY thorough and follow EVERY instruction carefully.

--- TO HERE --- 