# Journal Reminder System

Part of the Vibe Practice Journal System.

A simple reminder system to prompt you to create journal entries using Cursor's AI.

## How It Works

1. A reminder script runs at 5pm daily in your terminal (no system notification)
2. If you've made git commits today, the terminal will display the prompt to copy into Cursor
3. You paste the prompt into Cursor, which follows the guidelines in [preferences.md](../preferences.md) to:
   - Create a properly formatted journal entry 
   - Save it to engineering-journal.md (creating the file if needed)
   - Update only today's entry if it already exists
   - Stage the commit and prompt you to finalize it

## Journal Entry Guidelines

All journal entry requirements are documented in the **Journal Entries** section of [`preferences.md`](../preferences.md). This ensures:

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

## Setting Up the Cron Job (Terminal Only, No Notifications)

To enable the daily reminder at 5pm that prints only to the terminal (no system notifications), add this to your crontab:

```bash
# Display journal reminder at 5pm daily in terminal only
0 17 * * * cd /path/to/vibe_practice && ./scripts/journal-reminder.sh >> ~/journal-reminders.log 2>&1
```

To edit your crontab:
```bash
crontab -e
```

Note: This approach outputs the reminder to a log file. To have it appear in your terminal, you need to have a terminal open at 5pm. For a more reliable approach that doesn't require an open terminal, you could use `tmux` or similar terminal multiplexer.

## Testing the System

You can test the reminder at any time:

```bash
# See the full prompt
./scripts/journal-reminder.sh
```

## Related Components

- [Journal Statistics System](./JOURNAL_STATISTICS.md) - Weekly development statistics on Monday mornings 