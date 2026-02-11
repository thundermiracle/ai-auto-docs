---
on:
  push:
    branches:
      - main
    paths:
      - "src/**"
      - "test/**"
      - "package.json"
      - "tsconfig*.json"
      - "nest-cli.json"
permissions:
  contents: read
  issues: read
  pull-requests: read
safe-outputs:
  create-pull-request:
tools:
  edit:
---
# Docs Auto-Fix

## Goal
Keep documentation in `/docs` and `README.md` consistent with recent source code changes.

## Instructions
1. Identify what changed in this push (check the git diff or review the modified files under `src/`, `test/`, and config files).
2. Determine which docs are impacted and update them for accuracy.
3. Only modify documentation files under `/docs` and `README.md`. Do not change source code.
4. Keep updates minimal, precise, and aligned with existing formatting.
5. If no documentation updates are needed, exit without changes.

## Repo Notes
- If shipping fee rules or API behavior change, update `/docs/shipping-fee-spec.md`.
