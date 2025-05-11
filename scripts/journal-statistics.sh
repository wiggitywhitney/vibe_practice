#!/bin/bash
# scripts/journal-statistics.sh

# ANSI color codes for better visibility
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
RESET='\033[0m'

DATE=$(date +"%Y-%m-%d")
JOURNAL_FILE="docs/journal/engineering-journal.md"

# Check OS for date command compatibility
OS=$(uname)

# Calculate days for last week (Monday to Sunday)
# Get current day of week (1-7, where 1 is Monday)
TODAY=$(date +%u)

# Calculate how many days to go back to previous Monday
DAYS_TO_MONDAY=$(( TODAY - 1 + 7 ))

# Use OS-specific date commands
if [[ "$OS" == "Darwin" ]]; then
  # macOS
  LAST_MONDAY=$(date -v-${DAYS_TO_MONDAY}d +"%Y-%m-%d")
  LAST_SUNDAY=$(date -v-${DAYS_TO_MONDAY}d -v+6d +"%Y-%m-%d")
else
  # Linux
  LAST_MONDAY=$(date -d "-${DAYS_TO_MONDAY} days" +"%Y-%m-%d")
  LAST_SUNDAY=$(date -d "-${DAYS_TO_MONDAY} days +6 days" +"%Y-%m-%d")
fi

# Display a reminder with the prompt to paste into Cursor
echo -e "\n${YELLOW}┌─────────────────────────────────────────────────┐${RESET}"
echo -e "${YELLOW}│               JOURNAL STATISTICS                 │${RESET}"
echo -e "${YELLOW}└─────────────────────────────────────────────────┘${RESET}\n"

echo -e "${GREEN}Today is $DATE and it's time for your weekly journal statistics.${RESET}"
echo -e "${GREEN}Please ask Cursor to create journal statistics by copying and pasting the following prompt:${RESET}\n"

# Check if journal file exists
if [ ! -f "$JOURNAL_FILE" ]; then
  echo -e "${YELLOW}Note: $JOURNAL_FILE does not exist yet. It will be created when you save the journal entry.${RESET}\n"
else
  # Check if the file has the expected format (date headers)
  if ! grep -q "^## [0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]" "$JOURNAL_FILE"; then
    echo -e "${YELLOW}Note: $JOURNAL_FILE exists but may not have the expected format.${RESET}"
    echo -e "${YELLOW}Make sure to maintain proper formatting when adding statistics.${RESET}\n"
  fi
fi

echo -e "${CYAN}Please read the entire docs/preferences.md file to understand all project guidelines, with special attention to the Journal Statistics section.${RESET}"
echo -e "${CYAN}${RESET}"
echo -e "${CYAN}Create journal statistics for the week of ${LAST_MONDAY} to ${LAST_SUNDAY} following the guidelines in docs/preferences.md.${RESET}"
echo -e "${CYAN}${RESET}"
echo -e "${CYAN}IMPORTANT: Use the statistics-specific header format '## Statistics: ${LAST_MONDAY} to ${LAST_SUNDAY}' to distinguish from regular journal entries.${RESET}"
echo -e "${CYAN}${RESET}"
echo -e "${CYAN}Remember to:${RESET}"
echo -e "${CYAN}1. Add this as a NEW entry in $JOURNAL_FILE (do not overwrite any existing entries)${RESET}"
echo -e "${CYAN}2. Place it AFTER any entries from today, but BEFORE previous days' entries${RESET}"
echo -e "${CYAN}3. For data integrity:${RESET}"
echo -e "${CYAN}   - Use ONLY verifiable git data for commit counts, files changed, etc.${RESET}"
echo -e "${CYAN}   - Analyze actual commit messages for focus areas${RESET}"
echo -e "${CYAN}   - Clearly mark any estimates with [ESTIMATE] and only include if 80%+ confident${RESET}"
echo -e "${CYAN}   - Include estimates only when derived from multiple consistent data points${RESET}"
echo -e "${CYAN}   - Use \"Data not available\" rather than making up statistics${RESET}"
echo -e "${CYAN}   - For keyword analysis, only include terms actually found in code/commits${RESET}"
echo -e "${CYAN}4. Stage the commit with message \"Add weekly journal statistics for $DATE\"${RESET}"
echo -e "${CYAN}5. Print the statistics to our chat for review${RESET}"
echo -e "${CYAN}6. Set up the git commit command for me to run (don't run it automatically)${RESET}\n"

echo -e "${GREEN}Cursor will help you generate journal statistics based on your project data.${RESET}\n" 