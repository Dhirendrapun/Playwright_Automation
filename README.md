
# 🎭 Playwright UI Automation Project

Automated end-to-end web UI tests built with [Playwright](https://playwright.dev/) in JavaScript, following the **Page Object Model (POM)** design pattern.

This project tests a sample web app and demonstrates writing clean, maintainable, and scalable test scripts.

---

## 📦 Project Structure

```
.
├── tests/                 # Test files (e.g., login.spec.js)
│   └── login.spec.js
├── pages/                 # Page Object classes
│   └── LoginPage.js
├── playwright.config.js   # Playwright configuration
└── package.json
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npx playwright install
```

---

## ✅ Running Tests

```bash
npx playwright test                # run all tests (headless)
npx playwright test --headed      # run all tests with browser UI
npx playwright test tests/login.spec.js   # run a specific test file
npx playwright test --workers=1   # run tests sequentially with 1 worker
```

---

## 🧪 Generate Tests with Codegen

```bash
npx playwright codegen https://example.com
```

---

## 📊 View HTML Test Report

```bash
npx playwright show-report
```

---

## ✍ Author

- **Dhirendra Pratap Pun**

---

