---
name: ad-docs-recipe-authoring
description: Use when creating, adding, or reviewing adcli recipes for source URLs, collection entry pages, discovery rules, or crawl seed definitions
---

# Ad Docs Recipe Authoring

## Overview

Recipes are the stable input contract for the Builder Agent. Write the smallest recipe that describes the source boundary, then validate it through the parser and a small crawl before running full ingestion.

## When to Use

- Creating a new recipe from a documentation URL.
- Adding a new file under `recipes/`.
- Turning a documentation entry page into a crawlable collection.
- Reviewing whether a recipe might crawl unrelated pages.
- Deciding between single-source ingestion and collection discovery.
- Changing `discover.link_patterns`, `discover.max_items`, or capture mode.

Do not use this for llms publishing rules or MCP runtime behavior.

## Create a New Recipe

Start from the URL boundary, not from the crawler implementation.

1. Identify the platform id, for example `oceanengine`.
2. Decide whether the URL is a single document or a collection entry.
3. Choose a stable recipe filename under `recipes/`, for example `oceanengine-open-platform-docs.json`.
4. Choose a stable recipe `id`; for collections, use the source family, not a page title.
5. Pick `fetch` only when the page source already contains the document text. Use `playwright` for JS-rendered docs.
6. Add the narrowest `link_patterns` that still includes the intended docs.
7. Keep `max_items` present. Use a small number such as `20` for first debug, then change to `"all"` for full seed collection.
8. Check whether links use numeric ids, path slugs, or mixed paths such as `/pages/` and `/docs/`.

Use this decision table:

| Source shape | Recipe type | Required fields |
| --- | --- | --- |
| One known HTML document | `official_html` | `id`, `platform`, `type`, `url`, `capture` |
| One entry page with many child docs | `official_html_collection` | `id`, `platform`, `type`, `entry_url`, `discover` |
| One entry page backed by a public menu/detail JSON API | `official_html_collection` | Keep the collection recipe small; add builder support that turns API menu rows into source recipes |
| PDF, Lark doc, sheet, or manual note | typed source recipe | Keep the same source boundary rules; add parser support before relying on it |

If unsure whether a URL is an entry page, create a collection recipe with a small `max_items`, run discovery, and inspect the manifest before ingesting content.

## New Platform Probe

Before finalizing `link_patterns`, inspect the rendered page links:

```bash
node - "https://developers.e.qq.com/v3.0/pages/regist_developer" <<'NODE'
const { chromium } = require('playwright');
const url = process.argv[2];
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(8000);
  const links = await page.evaluate(() => Array.from(document.querySelectorAll('a')).map((a) => ({
    text: (a.textContent || '').trim().replace(/\s+/g, ' '),
    href: a.href || a.getAttribute('href') || '',
  })).filter((link) => link.href || link.text));
  console.log(JSON.stringify({ title: document.title, count: links.length, links: links.slice(0, 80) }, null, 2));
  await browser.close();
})();
NODE
```

Look for:

- Multiple documentation path families, for example `/v3.0/pages/` and `/v3.0/docs/`.
- Generic navigation titles appearing before real document titles.
- `javascript:` links that must not be collected.
- Whether stable ids come from numeric doc ids or URL path slugs.
- Whether the visible menu is loaded by JSON APIs instead of `<a>` links. For example, Kuaishou DSP docs load `document/menu/list` and `document/detail`; in that case the recipe still describes the entry URL, but discovery must consume the menu API and source ids must come from `documentId`, not the shared `/docs` path.

## API-backed Collection Notes

Some documentation sites expose all documents through the same route and identify pages only through query parameters or API payloads.

Kuaishou DSP example:

```json
{
  "id": "kuaishou_dsp_developer_docs",
  "platform": "kuaishou",
  "type": "official_html_collection",
  "entry_url": "https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2539&menuId=3765",
  "discover": {
    "mode": "fetch",
    "link_patterns": ["docType=DSP"],
    "wait_for": "body",
    "max_items": "all"
  }
}
```

For this shape:

- Probe network requests before assuming link discovery is enough.
- Use the menu API as the deterministic source inventory.
- Deduplicate by the real document id when multiple menu entries point to the same document.
- Generate source URLs that keep all required query parameters, such as `docType`, `documentId`, and `menuId`.
- Capture source content from the detail API when the rendered page is only a shell.

## Recipe Types

Use `official_html_collection` when the URL is an entry point with many child documents:

```json
{
  "id": "oceanengine_open_platform_docs",
  "platform": "oceanengine",
  "type": "official_html_collection",
  "entry_url": "https://open.oceanengine.com/labels/7/docs/1839621283557572",
  "discover": {
    "mode": "playwright",
    "link_patterns": ["/labels/7/docs/"],
    "wait_for": "body",
    "max_items": "all"
  }
}
```

Use a single-source recipe only for one known document:

```json
{
  "id": "oceanengine_1839621283557572",
  "platform": "oceanengine",
  "type": "official_html",
  "url": "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
  "title_hint": "API接口",
  "tasks_hint": ["auth", "read_ad_report"],
  "capture": {
    "mode": "playwright",
    "wait_for": "article"
  }
}
```

## Field Rules

| Field | Rule |
| --- | --- |
| `id` | Lowercase letters, numbers, `_`, `-`; stable and meaningful. |
| `platform` | Same safe format as `id`, for example `oceanengine`. |
| `type` | Collection: `official_html_collection`; source: `official_html`, `official_pdf`, `lark_sheet`, `lark_doc`, or `manual_note`. |
| `entry_url` / `url` | Must be `http` or `https`. Keep collection entry URLs canonical. |
| `discover.mode` / `capture.mode` | Use `playwright` for JS-rendered docs; `fetch` only for static pages. |
| `discover.link_patterns` | Must restrict discovery to the intended doc path. Avoid broad host-level patterns. |
| `discover.max_items` | Use a small number for debug; use `"all"` for full seed crawls. Keep the field present for readability. |
| `wait_for` | Prefer a stable container selector; `body` is acceptable for discovery. |

## Workflow

1. Draft the recipe under `recipes/` with a descriptive filename.
2. Validate the parser contract by running the relevant command once.
3. For collections, keep `max_items` small for the first discovery pass.
4. Inspect the manifest count, titles, URLs, and generated `source_id` values.
5. Ingest a small sample before a full crawl.
6. Change `max_items` to `"all"` only after the sample passes.
7. Run `ad-docs-source-quality` after ingestion.

## Validation Commands

For a collection recipe:

```bash
bun run discover:sources recipes/oceanengine-open-platform-docs.json
node - <<'NODE'
const manifest=require('./data/sources/oceanengine/_collections/oceanengine_open_platform_docs/manifest.json');
console.log({count: manifest.items.length});
console.log(manifest.items.slice(0, 10).map((item) => `${item.source_id}\t${item.title}\t${item.url}`).join('\n'));
NODE
```

Then sample ingest:

```bash
bun run ingest:collection data/sources/oceanengine/_collections/oceanengine_open_platform_docs/manifest.json --limit 10 --concurrency 2
```

After the sample passes, set `"max_items": "all"`, rerun discovery, then run full ingestion:

```bash
bun run discover:sources recipes/oceanengine-open-platform-docs.json
bun run ingest:collection data/sources/oceanengine/_collections/oceanengine_open_platform_docs/manifest.json --concurrency 4
```

For a single-source recipe:

```bash
bun run ingest:source recipes/some-single-source.json
```

## Review Checklist

- A new recipe has a clear reason to be collection or single-source.
- The recipe boundary matches the real source boundary.
- `link_patterns` cannot match unrelated products, help centers, marketing pages, or login pages.
- `link_patterns` include every intended documentation path family, not only the first one seen.
- Manifest titles are document titles, not navigation labels or repeated generic text.
- Generic titles such as `接口文档`, `业务专题`, `开发者工具`, `首页`, or `配置示例` are absent or intentionally explained.
- Generated `source_id` values are stable across repeated discovery.
- Path-based source ids remain readable and do not collapse to short numeric suffixes.
- `max_items` is `"all"` only after a sample crawl has passed.
- The resulting `cleaned.md` and `blocks.json` pass the source quality skill.

## Common Mistakes

- Using a collection recipe for a single page.
- Removing `max_items` for full crawl instead of setting it to `"all"`.
- Setting `link_patterns` too broad and silently collecting other documentation.
- Setting `link_patterns` too narrow and missing valid doc families on the same site.
- Trusting the entry page DOM only when the site exposes a richer tree API.
- Running full ingestion before inspecting the manifest.
