#!/bin/zsh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$ROOT_DIR/decoropic-html-preview"
TMP_DIR="$OUT_DIR/.tmp"
BASE_URL="${1:-http://127.0.0.1:3001}"

rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR" "$TMP_DIR"

routes=(
  "/"
  "/about"
  "/solutions"
  "/projects"
  "/ghana-services"
  "/contact"
)

copy_route() {
  local route="$1"
  local route_key="${route#/}"
  local dest_dir="$OUT_DIR"

  if [[ -n "$route_key" ]]; then
    dest_dir="$OUT_DIR/$route_key"
  fi

  mkdir -p "$dest_dir"

  curl -sS "$BASE_URL$route" \
    | perl -0pe "s|$BASE_URL||g" \
    > "$dest_dir/index.html"
}

for route in "${routes[@]}"; do
  copy_route "$route"
done

mkdir -p "$OUT_DIR/_next"
cp -R "$ROOT_DIR/.next/static" "$OUT_DIR/_next/static"

cat > "$OUT_DIR/README.html-preview.md" <<'EOF'
# Decoropic HTML Preview

This folder contains a static HTML preview snapshot of the public Decoropic site.

## Included pages

- `/`
- `/about`
- `/solutions`
- `/projects`
- `/ghana-services`
- `/contact`

## Preview locally

Because the generated pages reference `/_next/static/...` assets, preview them through a local static server instead of opening the files directly with `file://`.

### Option 1

Run from this folder:

```bash
python3 -m http.server 4321
```

Then open:

`http://127.0.0.1:4321`

### Option 2

If you already use another static server, serve this folder as the web root.

## Notes

- This is a visual preview package, not the live Next.js app.
- Forms and API submissions are not expected to work in this static snapshot.
EOF
