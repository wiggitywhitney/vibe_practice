# Journal Reminder System

A simple reminder system to prompt you to create journal entries using Cursor's AI.

## How It Works

1. A reminder script runs at 3pm daily with a system notification
2. If you've made git commits today, clicking the notification shows the prompt to copy into Cursor
3. You paste the prompt into Cursor, which follows the guidelines in preferences.md to:
   - Create a properly formatted journal entry 
   - Save it to engineering-journal.md (creating the file if needed)
   - Update only today's entry if it already exists
   - Stage the commit and prompt you to finalize it

## Journal Entry Guidelines

All journal entry requirements are documented in the **Journal Entries** section of `preferences.md`. This ensures:

1. Consistent formatting across all entries
2. Proper content structure
3. Correct file management
4. Git integration

## Using the Journal Reminder Command

The journal reminder can be triggered manually at any time using npm:

```bash
# Run the journal reminder script
npm run journal:remind
```

This is particularly useful when:
- You want to create an entry before the 3pm automatic reminder
- You accidentally dismissed the notification
- You're working from a different machine and need to set up the reminder manually

## Setting Up the Cron Job with Notifications

To enable the daily reminder at 3pm with macOS notifications, add this to your crontab:

```bash
# Display journal reminder at 3pm daily with notification
0 15 * * * cd /path/to/vibe_practice && ./scripts/journal-reminder.sh | osascript -e 'display notification "Time to create your journal entry!" with title "Vibe Practice Journal"'
```

To edit your crontab:
```bash
crontab -e
```

## Post-Commit Reminders

A git hook is installed that will remind you to update your journal each time you make a commit after 3pm. This ensures you don't forget to document your work.

If you need to reinstall this hook (for example, if it's not working or got deleted):

```bash
cp hooks/post-commit .git/hooks/
chmod +x .git/hooks/post-commit
```

## Testing the System

You can test the reminder at any time:

```bash
# Test the notification
./scripts/journal-reminder.sh | osascript -e 'display notification "Time to create your journal entry!" with title "Vibe Practice Journal"'

# See the full prompt
./scripts/journal-reminder.sh
```

## For Linux Systems

If you're using Linux, use this notification command instead:

```bash
0 15 * * * cd /path/to/vibe_practice && ./scripts/journal-reminder.sh | notify-send "Vibe Practice Journal" "Time to create your journal entry!"
``` 