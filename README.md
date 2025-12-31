# QA Automation Portfolio

## Overview
This repository showcases my journey in upskilling QA automation with a focus on:
- Playwright test automation
- AI-assisted test generation (Copilot, ChatGPT, Gemini)
- CI/CD integration
- Compliance & performance testing (Europe-focused)

## Structure
- `tests/` → Organized test suites (smoke, regression, AI-generated, performance)
- `utils/` → Helper functions and test data
- `reports/` → Test execution reports
- `.github/workflows/` → CI/CD pipeline configs
- `docs/` → Documentation of setup, AI usage, compliance notes

## Getting Started
1. Install Node.js (LTS)
2. Install Playwright: `npm init playwright@latest`
3. Run tests: `npx playwright test`

## Test Suites

### Smoke Tests
Basic sanity tests for login, signup, and navigation. Located in `tests/smoke/`

### Regression Tests
Full regression suite covering all critical functionality. Located in `tests/regression/`

### AI-Generated Tests
Test cases assisted by AI tools (Copilot, ChatGPT, Gemini). Located in `tests/ai_generated/`

### Performance Tests
Stress and load testing (scheduled for later months). Located in `tests/performance/`

## CI/CD Pipeline
GitHub Actions workflow automatically runs all test suites on:
- Push to main/develop branches
- Pull requests
- Scheduled daily runs

View the workflow configuration in `.github/workflows/playwright.yml`

## Future Roadmap
- Add compliance-driven test cases (GDPR, AI Act)
- Integrate observability-driven QA
- Performance & resilience testing
- Advanced reporting and dashboards
