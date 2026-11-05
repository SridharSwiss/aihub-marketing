#!/usr/bin/env bash
# Keeps this copy in sync with GitHub (the source of truth).
# Pulls remote changes first, commits any local edits, then pushes. Run before and after you edit.
set -e
cd "$(dirname "$0")"
git pull --rebase --autostash
if [ -n "$(git status --porcelain)" ]; then
  git add -A && git commit -m "Sync: ${1:-local edits} ($(date -u +%F\ %H:%M) UTC)"
fi
git push
git status -sb | head -1
