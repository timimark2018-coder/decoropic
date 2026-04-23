#!/bin/zsh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PACKAGE_DIR="$ROOT_DIR/.deploy/decoropic-app"
ARCHIVE_PATH="$ROOT_DIR/decoropic-app-deploy.zip"

rm -rf "$PACKAGE_DIR"
mkdir -p "$PACKAGE_DIR/.next"

cp -R "$ROOT_DIR/.next/standalone/." "$PACKAGE_DIR/"
cp -R "$ROOT_DIR/.next/static" "$PACKAGE_DIR/.next/static"
cp -R "$ROOT_DIR/deploy" "$PACKAGE_DIR/deploy"
cp -R "$ROOT_DIR/public" "$PACKAGE_DIR/public"
cp -R "$ROOT_DIR/node_modules" "$PACKAGE_DIR/node_modules"
cp "$ROOT_DIR/package.json" "$PACKAGE_DIR/package.json"
cp "$ROOT_DIR/package-lock.json" "$PACKAGE_DIR/package-lock.json"
cp "$ROOT_DIR/.env.example" "$PACKAGE_DIR/.env.example"
cp "$ROOT_DIR/DEPLOYMENT.md" "$PACKAGE_DIR/DEPLOYMENT.md"
cp "$ROOT_DIR/RELEASE_MANIFEST.md" "$PACKAGE_DIR/RELEASE_MANIFEST.md"

rm -f "$ARCHIVE_PATH"
(
  cd "$ROOT_DIR/.deploy"
  zip -r "$ARCHIVE_PATH" decoropic-app
)

echo "Created deploy package: $ARCHIVE_PATH"
