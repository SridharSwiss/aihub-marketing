@echo off
REM Sync this copy with GitHub: pull, commit local edits, push.
cd /d "%~dp0"
git pull --rebase --autostash || exit /b 1
git add -A
git diff --cached --quiet || git commit -m "Sync: local edits"
git push
git status -sb
