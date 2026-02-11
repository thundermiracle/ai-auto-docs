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
  noop:
    max: 1
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
4. Do NOT commit directly. If documentation updates are made, use the safe output tool `create-pull-request` to propose changes.
5. If no documentation updates are needed, use the safe output tool `noop` to explicitly report no action.
6. When creating a pull request, write the PR title and body in Japanese. Include a short summary and test status.
7. Keep updates minimal, precise, and aligned with existing formatting.

## Repo Notes
- If shipping fee rules or API behavior change, update `/docs/shipping-fee-spec.md`.
