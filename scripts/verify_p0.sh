#!/usr/bin/env bash
###############################################################################
#  Decoropic P0 修复 · 部署后验证脚本
###############################################################################
#
# 注: 第 7 节 zh-CN 检查为反向逻辑
# 项目 i18n 用 cookie (NEXT_LOCALE) 切语言,不存在 /zh/* 路由
# 若硬写 hreflang="zh-CN" href="/zh/" → Google 抓到 404 → 丢弃整组 hreflang
# 因此 lib/seo/metadata.ts 故意只输出 en-GH + x-default
# 待 i18n routing (app/[locale]/...) 建立后再恢复正向检查
#
###############################################################################

set +e

SITE="https://www.decoropic.com"
PAGES=("/" "/solutions" "/products" "/projects" "/local-services" "/about" "/contact")

PASS=0
FAIL=0

green() { printf "\033[0;32m%s\033[0m" "$1"; }
red()   { printf "\033[0;31m%s\033[0m" "$1"; }
yellow() { printf "\033[0;33m%s\033[0m" "$1"; }
cyan()  { printf "\033[0;36m%s\033[0m" "$1"; }

check() {
  local label="$1"
  local condition="$2"
  if [[ "$condition" == "true" ]]; then
    echo "  $(green "✅") $label"
    PASS=$((PASS+1))
  else
    echo "  $(red "❌") $label"
    FAIL=$((FAIL+1))
  fi
}

section() {
  echo ""
  cyan "═══════════════════════════════════════════"
  echo ""
  cyan "  $1"
  echo ""
  cyan "═══════════════════════════════════════════"
  echo ""
}

# 1. 基础可访问性
section "1. 基础可访问性"
for path in "${PAGES[@]}"; do
  url="${SITE}${path}"
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  if [[ "$status" == "200" ]]; then
    check "$url 返回 200" "true"
  else
    check "$url 返回 $status (期望 200)" "false"
  fi
done

# 2. Canonical
section "2. Canonical 标签(P0 关键)"
for path in "${PAGES[@]}"; do
  url="${SITE}${path}"
  canonical_line=$(curl -s "$url" | grep -i 'rel="canonical"' | head -1)
  if echo "$canonical_line" | grep -qi "localhost"; then
    check "$path · canonical 仍含 localhost (P0 未修复!)" "false"
    echo "    实际: $canonical_line"
  elif echo "$canonical_line" | grep -qi "decoropic.com"; then
    check "$path · canonical 指向 decoropic.com 域" "true"
  else
    check "$path · canonical 未找到或异常" "false"
    echo "    实际: $canonical_line"
  fi
done

# 3. og:url
section "3. og:url 验证"
for path in "${PAGES[@]}"; do
  url="${SITE}${path}"
  og_url_line=$(curl -s "$url" | grep -i 'property="og:url"' | head -1)
  if echo "$og_url_line" | grep -qi "localhost"; then
    check "$path · og:url 仍含 localhost" "false"
  elif echo "$og_url_line" | grep -qi "decoropic.com"; then
    check "$path · og:url 正确" "true"
  else
    check "$path · og:url 未找到" "false"
  fi
done

# 4. og:locale
section "4. og:locale 验证"
for path in "${PAGES[@]}"; do
  url="${SITE}${path}"
  locale_line=$(curl -s "$url" | grep -i 'property="og:locale"' | head -1)
  if echo "$locale_line" | grep -q "en_GH"; then
    check "$path · og:locale = en_GH ✓" "true"
  elif echo "$locale_line" | grep -q "en_US"; then
    check "$path · og:locale 仍是 en_US (应为 en_GH)" "false"
  else
    check "$path · og:locale 未找到或异常" "false"
    echo "    实际: $locale_line"
  fi
done

# 5. sitemap.xml 与 robots.txt
section "5. sitemap.xml 与 robots.txt"
sitemap_status=$(curl -s -o /dev/null -w "%{http_code}" "${SITE}/sitemap.xml")
if [[ "$sitemap_status" == "200" ]]; then
  check "sitemap.xml 可访问 (HTTP 200)" "true"
  if curl -s "${SITE}/sitemap.xml" | grep -q "<urlset"; then
    check "sitemap.xml 格式有效 (含 <urlset>)" "true"
  else
    check "sitemap.xml 格式异常" "false"
  fi
else
  check "sitemap.xml HTTP $sitemap_status (期望 200)" "false"
fi

robots_status=$(curl -s -o /dev/null -w "%{http_code}" "${SITE}/robots.txt")
if [[ "$robots_status" == "200" ]]; then
  check "robots.txt 可访问 (HTTP 200)" "true"
  if curl -s "${SITE}/robots.txt" | grep -qi "sitemap:"; then
    check "robots.txt 指向 sitemap" "true"
  else
    check "robots.txt 未声明 Sitemap" "false"
  fi
else
  check "robots.txt HTTP $robots_status (期望 200)" "false"
fi

# 6. Schema JSON-LD
section "6. Schema.org JSON-LD 验证"
home_html=$(curl -s "${SITE}/")
if echo "$home_html" | grep -q 'application/ld+json'; then
  check "首页含 JSON-LD <script>" "true"
else
  check "首页未注入 JSON-LD" "false"
fi
if echo "$home_html" | grep -q '"@type": *"Organization"\|"@type":"Organization"'; then
  check "首页含 Organization Schema" "true"
else
  check "首页未含 Organization Schema" "false"
fi
if echo "$home_html" | grep -q "Foshan Home Style"; then
  check "Schema 含真实公司全称" "true"
else
  check "Schema 未含 Foshan Home Style" "false"
fi
if echo "$home_html" | grep -q "91440604572379052M"; then
  check "Schema 含统一社会信用代码" "true"
else
  yellow "  ⚠ Schema 未含 taxID (可选,但推荐)"
fi

# 7. hreflang
section "7. hreflang 验证"
if echo "$home_html" | grep -qi 'hreflang="en-GH"'; then
  check "首页含 hreflang en-GH" "true"
else
  check "首页未含 hreflang en-GH" "false"
fi
if echo "$home_html" | grep -qi 'hreflang="zh-CN"'; then
  check "首页含 hreflang zh-CN (⚠ 不应输出,/zh/* 路由不存在,会返回 404 让 Google 丢弃整组 hreflang 信号)" "false"
else
  check "首页正确未含 hreflang zh-CN (i18n 用 cookie 切语言,无 /zh/* 路由)" "true"
fi
if echo "$home_html" | grep -qi 'hreflang="x-default"'; then
  check "首页含 hreflang x-default" "true"
else
  check "首页未含 hreflang x-default" "false"
fi

# 8. 安全与性能
section "8. 安全与基础性能"
final_url=$(curl -s -o /dev/null -w "%{url_effective}" -L "http://www.decoropic.com/")
if echo "$final_url" | grep -q "https://"; then
  check "HTTP 自动跳转到 HTTPS" "true"
else
  check "HTTP 未跳转 HTTPS" "false"
fi

hsts=$(curl -sI "${SITE}/" | grep -i "strict-transport-security")
if [[ -n "$hsts" ]]; then
  check "HSTS 头存在" "true"
else
  check "HSTS 头缺失 (建议添加)" "false"
fi

ct=$(curl -sI "${SITE}/" | grep -i "content-type" | head -1)
if echo "$ct" | grep -qi "text/html"; then
  check "Content-Type 正确" "true"
else
  check "Content-Type 异常: $ct" "false"
fi

# 总结
echo ""
cyan "═══════════════════════════════════════════"
echo ""
echo "  $(green "✅ 通过: $PASS")"
echo "  $(red "❌ 失败: $FAIL")"
echo ""
cyan "═══════════════════════════════════════════"
echo ""
[[ "$FAIL" -eq 0 ]] && exit 0 || exit 1
