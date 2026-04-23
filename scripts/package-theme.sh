#!/bin/zsh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
THEME_DIR="$ROOT_DIR/wordpress-theme"
ARCHIVE_PATH="$ROOT_DIR/decolovely-product-center.zip"

rm -f "$ARCHIVE_PATH"
(
  cd "$THEME_DIR"
  zip -r "$ARCHIVE_PATH" decolovely-product-center
)

echo "Created WordPress theme package: $ARCHIVE_PATH"
