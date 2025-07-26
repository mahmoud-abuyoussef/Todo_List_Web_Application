# ✍️ Contributing Guidelines

Thank you for your interest in contributing to this project!  
Follow the steps below to get started and collaborate effectively using Git and GitHub.

---

## 📦 Project Setup

```bash
# 1. Fork the repository

# 2. Clone your fork
git clone git@github.com:mahmoud-abuyoussef/Todo_List_Web_Application.git

# 3. Navigate to the project directory
cd Todo_List_Web_Application

# 4. Install dependencies
pnpm install

# 5. Start the development server
pnpm run dev
```

---

## 🌿 Git Workflow

```bash

# 6. Create a new branch for your feature
git checkout -b feature/your-feature-name

# 7. After development, stage and commit your changes
git add .
git commit -m "type(scope): your message"

# 8. Push your branch
git push origin feature/your-feature-name

# 9. Create a Pull Request (PR) to the main branch on GitHub

# 10. Build for production
pnpm run build

```

---

## ✅ Commit Message Convention

We follow the Conventional Commits standard:

type(scope): message

| Type       | Description                             |
| ---------- | --------------------------------------- |
| `feat`     | A new feature                           |
| `fix`      | A bug fix                               |
| `docs`     | Documentation only changes              |
| `style`    | Code formatting, white-space (no logic) |
| `refactor` | Code changes that don’t affect behavior |
| `perf`     | Performance improvements                |
| `test`     | Adding or updating tests                |
| `chore`    | Tooling, CI/CD, or dependency changes   |

### Examples:

```bash
git commit -m "feat(auth): add login page UI"
git commit -m "fix(auth): fix register form validation"
git commit -m "docs(readme): update contribution guidelines"
git commit -m "style(button): format button component with Prettier"
git commit -m "refactor(task): simplify task filtering logic"
git commit -m "perf(task): optimize task rendering performance"
git commit -m "test(task): add unit tests for task reducer"
git commit -m "chore(lint): update ESLint config rules"
git commit -m "chore(deps): upgrade react to v18.2.0"
```

---

## 📢 Need Help?

If you have questions about how to contribute, feel free to open a [Discussion](https://github.com/mahmoud-abuyoussef/Todo_List_Web_Application/discussions) or contact the project maintainer.

## 🙌 Thank You

Your contributions make this project better! ❤️
