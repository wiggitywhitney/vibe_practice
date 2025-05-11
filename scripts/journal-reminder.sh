#!/bin/bash
# scripts/journal-reminder.sh

# ANSI color codes for better visibility
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
RESET='\033[0m'

DATE=$(date +"%Y-%m-%d")
JOURNAL_FILE="engineering-journal.md"

# Check for git activity
GIT_ACTIVITY=$(git log --since="12am" --pretty=format:"%h")
if [ -z "$GIT_ACTIVITY" ]; then
  echo -e "${YELLOW}No git activity today - no journal entry needed${RESET}"
  exit 0
fi

# Display a reminder with the prompt to paste into Cursor
echo -e "\n${YELLOW}┌─────────────────────────────────────────────────┐${RESET}"
echo -e "${YELLOW}│               JOURNAL REMINDER                   │${RESET}"
echo -e "${YELLOW}└─────────────────────────────────────────────────┘${RESET}\n"

echo -e "${GREEN}Today is $DATE and you've made git commits.${RESET}"
echo -e "${GREEN}Please ask Cursor to create a journal entry by copying and pasting the following prompt:${RESET}\n"

# Check if journal file exists
if [ ! -f "$JOURNAL_FILE" ]; then
  echo -e "${YELLOW}Note: $JOURNAL_FILE does not exist yet. It will be created when you save the journal entry.${RESET}\n"
fi

# Check if there's already an entry for today
ENTRY_EXISTS=false
if [ -f "$JOURNAL_FILE" ] && grep -q "## $DATE" "$JOURNAL_FILE"; then
  ENTRY_EXISTS=true
  echo -e "${YELLOW}Note: An entry for today already exists. It will be updated.${RESET}\n"
fi

echo -e "${CYAN}Please read the entire preferences.md file to understand all project guidelines, with special attention to the Journal Entries section.${RESET}"
echo -e "${CYAN}${RESET}"
echo -e "${CYAN}Create an engineering journal entry for today ($DATE) following the guidelines in preferences.md.${RESET}"
echo -e "${CYAN}${RESET}"
echo -e "${CYAN}IMPORTANT: Include ALL activities from the entire day, not just recent work. Consider:${RESET}"
echo -e "${CYAN}- All git commits made today (git log --since=\"12am\")${RESET}"
echo -e "${CYAN}- Any setup, configuration, or documentation work${RESET}"
echo -e "${CYAN}- All features and components created or modified${RESET}"
echo -e "${CYAN}- ALL development activities, even if they weren't committed${RESET}"
echo -e "${CYAN}${RESET}"
echo -e "${CYAN}Remember to:${RESET}"
echo -e "${CYAN}1. Place the entry at the top of $JOURNAL_FILE (creating the file if it doesn't exist)${RESET}"
echo -e "${CYAN}2. If an entry for today ($DATE) already exists, replace only that specific entry${RESET}"
echo -e "${CYAN}3. Stage the commit with message \"Add journal entry for $DATE\"${RESET}"
echo -e "${CYAN}4. Print the entry to our chat for review${RESET}"
echo -e "${CYAN}5. Prompt me to run 'git commit' to finalize${RESET}\n"

echo -e "${GREEN}Cursor will help you create your journal entry for today.${RESET}\n"
echo -e "${GREEN}NOTE: Today is determined by checking git commits made since midnight (12am), but your journal should include ALL work performed today.${RESET}\n" 