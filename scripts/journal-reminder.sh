#!/bin/bash
# Terminal-only journal reminder at 5pm

DATE=$(date +"%Y-%m-%d")
INSTRUCTIONS_FILE="docs/journal/JOURNAL_INSTRUCTIONS.md"

# Check for git activity - exit silently if none
GIT_ACTIVITY=$(git log --since="12am" --pretty=format:"%h")
if [ -z "$GIT_ACTIVITY" ]; then
  exit 0
fi

# Simple reminder
echo "📝 Journal Reminder for $DATE"
echo "You've made git commits today. Please create a journal entry."
echo ""
echo "Instructions: file://$PWD/$INSTRUCTIONS_FILE" 