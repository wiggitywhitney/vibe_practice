# Vibe Practice 🕸️🌈

<div align="center">
  <img src="public/Rainbow.png" alt="Rainbow Background" width="500" style="max-width: 100%; height: auto;"/>
</div>

Welcome to Vibe Practice! This repository is primarily a **personal sandbox** for exploring and refining **modern AI-assisted development workflows**, particularly using **Cursor** and various **MCP server integrations**.

**Primary Goals:**

1.  **Explore AI Development Tools:** Deeply investigate the capabilities of **Cursor**, **Taskmaster-AI**, **Context7**, and **MCP Memory** within a practical development context.
2.  **Refine AI Workflows:** Experiment with different approaches to planning, coding, testing, and documentation when heavily leveraging AI assistance.
3.  **(Context):** Build a simple React 19/Vite application (the 'spider button' app) *as the testbed* for these explorations.

---

## 🤔 What is This *Project* Really About?

This repository serves as a living laboratory focused on:

*   **Cursor Integration:** Pushing the boundaries of using Cursor for code generation, refactoring, rule adherence ([.cursor/rules](mdc:.cursor/rules/)), and overall development assistance.
*   **MCP Server Experimentation:** Actively using and testing MCP server tools, specifically:
    *   **Taskmaster-AI:** For AI-driven project planning, task breakdown, and status tracking ([tasks/tasks.json](mdc:tasks/tasks.json) - _Note: This file might be in `.gitignore`_). See [.cursor/rules/taskmaster.mdc](mdc:.cursor/rules/taskmaster.mdc).
    *   **Context7:** For leveraging real-time documentation lookups during development.
    *   **MCP Memory:** For storing and retrieving project context and preferences within the AI's knowledge graph.
*   **Workflow Optimization:** Finding efficient and effective ways to combine these AI tools into a cohesive development process.
*   **TDD with AI:** Exploring how Test-Driven Development interacts with AI-assisted coding.

The simple React app (spider button, rainbow) exists mainly to provide concrete tasks and codebases for these AI tooling experiments.

---

## ✨ Key Aspects (Focus: AI Tooling)

*   **AI-Driven Development:** Heavy reliance on Cursor, Taskmaster, Context7, and MCP Memory.
*   **Custom AI Configuration:** Project-specific Cursor rules ([.cursor/rules/](mdc:.cursor/rules/)) and preferences ([docs/preferences.md](mdc:docs/preferences.md)) guide the AI.
*   **Taskmaster Project Management:** Utilizing AI for task generation, expansion, and updates.
*   **Contextual Documentation:** Using Context7 for library/framework information.
*   **Test-Driven Development (TDD):** Core practice using Jest & React Testing Library, explored *alongside* AI tools.
*   **DevOps Principles:** Basic health checks (`/server`), signal handling applied as relevant context.

_(The project also includes an engineering journal system, primarily for logging experiments and observations during this process. See [docs/journal/JOURNAL_SYSTEM.md](mdc:docs/journal/JOURNAL_SYSTEM.md) for details.)_

---

## 🚀 Getting Started (If you *really* want to run it)

This is mainly a personal exploration project, but if you want to run the React app testbed:

### Prerequisites

*   Node.js (LTS version recommended)
*   npm (comes with Node.js)
*   Git

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/wiggitywhitney/vibe_practice.git

# 2. Navigate into the project directory
cd vibe_practice

# 3. Install dependencies
npm install
```

### Running the App

```bash
# Start the development server (usually on http://localhost:8080)
npm run dev
```

---

## 🛠️ Available Scripts

_(These are standard Node/React scripts, plus some related to the experimental journal system)_

```bash
# Start the development server with hot reloading
npm run dev

# Run the test suite once
npm test

# Run tests in interactive watch mode
npm run test:watch

# Start the separate health monitoring server
npm run health

# (For Journal System) Trigger a journal reminder manually
npm run journal:remind

# (For Journal System) Generate weekly journal statistics
npm run journal:stats
```

---

##  workflow Development Workflow Under Test

The core idea is to test an AI-centric workflow:

1.  **Planning (Taskmaster):** Define goals and let Taskmaster generate/manage tasks.
2.  **TDD:** Write tests first (Jest/RTL).
3.  **Implementation (Cursor):** Use Cursor heavily for coding, refactoring, following rules, potentially using Context7 for info.
4.  **Verification:** Run tests, visual checks.
5.  **Logging (Journal):** Document findings, especially regarding the AI tools and workflow.
6.  **Iteration (Taskmaster/Cursor):** Update tasks based on discoveries, refine code.

See [Development Workflow](mdc:.cursor/rules/dev_workflow.mdc) and [Taskmaster Rules](mdc:.cursor/rules/taskmaster.mdc) for the specific process being tested.

---

## 📚 Key Files for Understanding the *Experiment*

*   **Cursor Rules & Preferences:** [.cursor/rules/](mdc:.cursor/rules/), [docs/preferences.md](mdc:docs/preferences.md)
*   **Taskmaster Integration:** [.cursor/rules/taskmaster.mdc](mdc:.cursor/rules/taskmaster.mdc)
*   **Workflow Documentation:** [.cursor/rules/dev_workflow.mdc](mdc:.cursor/rules/dev_workflow.mdc)
*   **Experiment Logbook:** [docs/journal/engineering-journal.md](mdc:docs/journal/engineering-journal.md)

Happy experimenting! 🕷️
