# Journal Statistics System

Part of the Vibe Practice [Journal System](./JOURNAL_SYSTEM.md).

A system to automatically generate weekly development statistics based on your git history and journal entries.

## How It Works

1. A statistics script runs Monday morning at 7am with a system notification
2. Clicking the notification shows the prompt to copy into Cursor
3. You paste the prompt into Cursor, which:
   - Analyzes your git history and journal entries
   - Creates a comprehensive statistics report
   - Adds it to engineering-journal.md without overwriting existing entries
   - Stages the changes and prompts you to commit

## Statistics Categories

The system generates statistics in these categories as defined in the Journal Statistics section of [preferences.md](../preferences.md):

1. **Popular Technologies** - Most mentioned technologies, trending topics
2. **Terminology Frequency** - Technical terms, concepts and tools used
3. **Development Patterns** - Recurring workflows and collaboration points
4. **Development Activity** - Feature completion and productive periods
5. **Code Changes** - Files modified, lines added/removed
6. **Focus Areas** - Categories of work based on commit messages
7. **Time-based Patterns** - Most productive days and times
8. **Knowledge Gaps & Learning** - Topics researched and documentation needs

## Running Statistics Manually

You can generate statistics at any time using npm:

```bash
# Run the journal statistics script
npm run journal:stats
```

## Setting Up the Cron Job (Monday 7am)

To enable the weekly statistics on Monday mornings at 7am with macOS notifications, add this to your crontab:

```bash
# Generate weekly journal statistics Monday 7am with notification
0 7 * * 1 cd /path/to/vibe_practice && ./scripts/journal-statistics.sh | osascript -e 'display notification "Time to generate your weekly stats!" with title "Vibe Practice Statistics"'
```

To edit your crontab:
```bash
crontab -e
```

## For Linux Systems

If you're using Linux, use this notification command instead:

```bash
0 7 * * 1 cd /path/to/vibe_practice && ./scripts/journal-statistics.sh | notify-send "Vibe Practice Statistics" "Time to generate your weekly stats!"
```

## Testing the System

You can test the statistics generation at any time:

```bash
# See the statistics prompt
./scripts/journal-statistics.sh

# Test with notification
./scripts/journal-statistics.sh | osascript -e 'display notification "Time to generate your weekly stats!" with title "Vibe Practice Statistics"'
```

## How Statistics Entries Work

Unlike regular journal entries, statistics entries:
- Use a special header format: `## Statistics: YYYY-MM-DD to YYYY-MM-DD`
- Are placed after the current day's journal entry (if any exists)
- Are never overwritten by daily journal entries
- Provide a comprehensive view of your development patterns

## Data Integrity Guidelines

All statistics follow strict data integrity rules:
- Only use verifiable git data for commit counts, files changed, etc.
- Analyze actual commit messages for categorizing work
- Clearly mark estimates with [ESTIMATE] and only include if reasonably confident
- Include estimates only when derived from multiple consistent data points
- Use "Data not available" rather than inventing statistics
- For keyword analysis, only include terms actually found in code/commits

This ensures your statistics accurately reflect your development work rather than containing speculative information

## Related Components

- [Journal Reminder System](./JOURNAL_REMINDER.md) - Daily journal entry reminders at 3pm 