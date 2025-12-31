# Setup Guide

## Prerequisites
- Node.js LTS (v18 or higher)
- npm or yarn package manager
- Git

## Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/qa-automation-portfolio.git
cd qa-automation-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Playwright & Browsers
```bash
npm init playwright@latest
```

This will prompt you to:
- Select your preferred language (TypeScript/JavaScript)
- Choose browsers (Chromium, Firefox, WebKit)
- Set up GitHub Actions

Or manually install:
```bash
npx playwright install
npx playwright install --with-deps
```

### 4. Verify Installation
```bash
npx playwright --version
```

## Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test Suite
```bash
npx playwright test tests/smoke
npx playwright test tests/regression
npx playwright test tests/ai_generated
```

### Run Tests in UI Mode
```bash
npx playwright test --ui
```

### Run Tests with Debugging
```bash
npx playwright test --debug
```

### Generate Test Report
```bash
npx playwright show-report
```

## Configuration
The `playwright.config.ts` file contains:
- Browser launch options
- Base URL for testing
- Timeout settings
- Report configurations
- Retries for flaky tests

Edit this file to customize test execution behavior.

## Troubleshooting

### Browsers Not Found
```bash
npx playwright install
```

### Permission Denied (macOS/Linux)
```bash
sudo npx playwright install --with-deps
```

### Port Already in Use
Update the port in `playwright.config.ts` or specify a different one when running tests.

## Environment Variables
Create a `.env` file in the root directory for sensitive data:
```
BASE_URL=https://example.com
TEST_USER=testuser@example.com
TEST_PASSWORD=securepassword
```

Then load them in your tests using:
```typescript
import dotenv from 'dotenv';
dotenv.config();
```
