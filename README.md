# Vibe Practice

<div align="center">
  <img src="public/Rainbow.png" alt="Rainbow" width="400" style="max-width: 100%; height: auto;"/>
</div>

A modern React application implementing DevOps best practices. This project showcases the integration of modern front-end development with solid DevOps principles.

**Primary Purpose**: This application was created specifically to experiment with and explore the capabilities of Cursor, the AI-powered code editor.

## Table of Contents
- [Features](#features)
- [Development Environment](#development-environment)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [DevOps Features](#devops-features)
- [Testing](#testing)
- [Journal System](#journal-system)
- [Project Structure](#project-structure)

## Features

- React 19 with Vite build system
- Hot reloading for development
- Health monitoring server
- Graceful shutdown handling
- Test-Driven Development (TDD) approach
- DevOps-friendly configuration
- Proper image aspect ratio preservation
- Developer journal system with automated reminders

## Development Environment

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/wiggitywhitney/vibe_practice.git
cd vibe_practice

# Install dependencies
npm install
```

### Available Scripts

```bash
# Start the development server (port 8080)
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Start the health monitoring server
npm run health

# Trigger journal reminder manually
npm run journal:remind
```

## DevOps Features

- **Standard Port**: Uses port 8080 instead of Vite's default 5173
- **Health Monitoring**: Dedicated Express server for health checks
- **Signal Handling**: Proper handling of SIGTERM and SIGINT signals
- **Exit Codes**: Appropriate exit codes for success and failure states
- **Container-Friendly**: Application designed with containerization in mind

## Testing

This project uses Jest and React Testing Library for testing. We follow a Test-Driven Development (TDD) approach:

1. Write tests first
2. Implement the minimum code required to pass the tests
3. Refactor while keeping tests passing

## Journal System

The project includes an automated developer journal system that:

- Reminds you to create daily journal entries at 3pm
- Uses git commit history to suggest journal content
- Integrates with Cursor AI to generate properly formatted entries
- Includes post-commit hooks for additional reminders
- Supports both macOS and Linux notification systems
- Generates weekly development statistics on Monday mornings

For detailed setup and usage instructions, see [JOURNAL_SYSTEM.md](./docs/journal/JOURNAL_SYSTEM.md).

## Project Structure

- `/src`: React application source code
  - `/src/components`: React components
  - `/src/__tests__`: Test files
- `/public`: Static assets including images
- `server.js`: Health monitoring server (root level file)
- `preferences.md`: Development preferences and guidelines
