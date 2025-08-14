#!/bin/bash
# Usage: ./redeploy-old.sh <commit-hash>

OLD_COMMIT=$1

if [ -z "$OLD_COMMIT" ]; then
  echo "Error: Please provide a commit hash."
  exit 1
fi

echo "✅ Deploying commit $OLD_COMMIT to gh-pages..."

# Save current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Reset main to old commit
git checkout main
git fetch origin
git reset --hard $OLD_COMMIT

# Build & deploy frontend
cd frontend
npm install
npm run build
npm run deploy
cd ..

# Restore main to latest remote state
git checkout $CURRENT_BRANCH
git reset --hard origin/$CURRENT_BRANCH

echo "✅ Deployment complete. $CURRENT_BRANCH restored."
