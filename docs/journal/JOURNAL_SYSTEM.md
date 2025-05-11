# Vibe Practice Journal System

A comprehensive developer journal system with automated reminders, AI-powered entries, and analytics.

## System Components

The journal system consists of two main components:

1. **[Journal Reminder System](./JOURNAL_REMINDER.md)** - Daily reminders at 5pm in terminal
   - Checks for git activity since midnight
   - Generates properly formatted journal entries
   - Documents your daily development activities

2. **[Journal Statistics System](./JOURNAL_STATISTICS.md)** - Weekly statistics on Mondays at 7am
   - Analyzes git history and journal entries
   - Generates development metrics and patterns
   - Tracks technology usage and focus areas
   - Identifies trends and learning opportunities

## System Benefits

This unified journal system provides:

- **Consistent Documentation**: Standardized formats for all journal content
- **Automated Reminders**: Timely prompts for creating entries and statistics
- **Development Insights**: Analytics to understand your work patterns
- **Historical Record**: Comprehensive project history and evolution
- **AI Integration**: Leveraging Cursor AI for intelligent content generation

## Getting Started

1. Set up the [Journal Reminder System](./JOURNAL_REMINDER.md)
2. Configure the [Journal Statistics System](./JOURNAL_STATISTICS.md)
3. Follow the guidelines in [preferences.md](../preferences.md)

## Running the System

- Daily journal entries: `npm run journal:remind`
- Weekly statistics: `npm run journal:stats`

Both components store their content in `engineering-journal.md` using different formatting to distinguish between daily entries and statistics reports. 