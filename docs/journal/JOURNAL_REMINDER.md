# Journal Reminder System

Part of the Vibe Practice Journal System.

A simple reminder system to prompt you to create journal entries using Cursor's AI.

## How It Works

1. A reminder script runs at 5pm daily in your terminal (no system notification)
2. If you've made git commits today, the terminal displays a minimal reminder with a link to instructions
3. You open [JOURNAL_INSTRUCTIONS.md](./JOURNAL_INSTRUCTIONS.md) and copy its contents
4. You paste the instructions into Cursor, which then:
   - Creates a properly formatted journal entry 
   - Saves it to engineering-journal.md (creating the file if needed)
   - Updates only today's entry if it already exists
   - Suggests git commands to stage and commit the changes

## Journal Entry Guidelines

All journal entry requirements are now documented in [`JOURNAL_INSTRUCTIONS.md`](./JOURNAL_INSTRUCTIONS.md), which contains:

1. Detailed formatting requirements
2. Content structure with specific sections
3. Next Steps management rules
4. Git workflow instructions

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
# Run the journal reminder
./scripts/journal-reminder.sh
```

## Related Components

- [Journal Instructions](./JOURNAL_INSTRUCTIONS.md) - Comprehensive instructions for creating journal entries
- [Journal Statistics System](./JOURNAL_STATISTICS.md) - Weekly development statistics on Monday mornings 