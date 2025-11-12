# Playwright + TypeScript Test Automation — Portfolio Repo

This repository demonstrates a production-oriented Playwright + TypeScript test automation setup suitable for including in a portfolio or technical interview.

## Highlights / What to show in your portfolio
- TypeScript + Playwright test framework with Page Object Model (POM).
- Cross-browser testing (Chromium, Firefox, WebKit).
- Playwright reporter + HTML trace on failure.
- GitHub Actions CI workflow to run tests on push / PR.
- ESLint + Prettier and TypeScript config for code quality.
- Example page object, test data, and end-to-end tests.

## Quick start

1. Clone
```bash
git clone git@github.com:<your-org>/playwright-typescript-portfolio.git
cd playwright-typescript-portfolio
npm ci
npx playwright install --with-deps
npm test
npm run test:headed
npm run test:report
