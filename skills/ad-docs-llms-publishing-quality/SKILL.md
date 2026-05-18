---
name: ad-docs-llms-publishing-quality
description: Use when validating Ad Docs Context public llms artifacts, root indexes, platform manifests, public Markdown paths, or multi-platform publishing output
---

# Ad Docs Llms Publishing Quality

## Overview

Use this after `pnpm build:llms all` or any `pnpm build:llms <platform>` run. The goal is to verify `public/` is a publishable multi-platform docs pack and that one platform did not overwrite the root indexes for another.

## When to Use

- After generating `public/llms.txt` or `public/llms-full.txt`.
- After adding a new platform.
- After changing `src/lib/llms/builder.ts`.
- When checking whether `public/{platform}/manifest.json` is safe to publish.
- Before deploying static `public/` output.

Do not use this for crawl quality. Use `ad-docs-source-quality` before this.

## Checks

### 1. Build All Platforms

```bash
pnpm build:llms all
```

Expected: the output lists every platform under `data/sources/*` and a combined document count.

### 2. Root Index Aggregation

```bash
node - <<'NODE'
const fs=require('fs');
const llms=fs.readFileSync('public/llms.txt','utf8');
const full=fs.readFileSync('public/llms-full.txt','utf8');
const platforms=fs.readdirSync('public',{withFileTypes:true})
  .filter((entry)=>entry.isDirectory() && fs.existsSync(`public/${entry.name}/manifest.json`))
  .map((entry)=>entry.name)
  .sort();
const missing=platforms.filter((platform)=>!llms.includes(`## ${platform}`) || !full.includes(`## ${platform}`));
console.log(JSON.stringify({platforms, missing}, null, 2));
NODE
```

Expected: `missing` is empty.

### 3. Manifest Safety

```bash
node - <<'NODE'
const fs=require('fs');
const path=require('path');
const platforms=fs.readdirSync('public',{withFileTypes:true})
  .filter((entry)=>entry.isDirectory() && fs.existsSync(path.join('public',entry.name,'manifest.json')))
  .map((entry)=>entry.name);
const issues=[];
for (const platform of platforms) {
  const manifest=require(`./public/${platform}/manifest.json`);
  for (const doc of manifest.documents) {
    if ('source_dir' in doc) issues.push({platform,id:doc.id,issue:'source_dir leaked'});
    if (!doc.public_path.startsWith(`/${platform}/docs/`)) issues.push({platform,id:doc.id,issue:'bad public_path'});
    if (!fs.existsSync(path.join('public', doc.public_path))) issues.push({platform,id:doc.id,issue:'missing markdown'});
  }
}
console.log(JSON.stringify({issueCount:issues.length, issues:issues.slice(0,20)}, null, 2));
NODE
```

Expected: `issueCount` is `0`.

### 4. Path Id Sanity

```bash
export PLATFORM=tencent_ads
node - <<'NODE'
const platform=process.env.PLATFORM || 'tencent_ads';
const manifest=require(`./public/${platform}/manifest.json`);
const shortNumeric=manifest.documents.filter((doc)=>new RegExp(`^/${platform}/docs/\\d+\\.md$`).test(doc.public_path));
console.log(JSON.stringify({shortNumericCount:shortNumeric.length, samples:shortNumeric.slice(0,10)}, null, 2));
NODE
```

Expected: path-based platforms should not collapse to short numeric paths such as `/tencent_ads/docs/1.md`.

## Acceptance

Publishing is ready when:

- `pnpm build:llms all` succeeds.
- Root `llms.txt` contains every platform section.
- Root `llms-full.txt` contains every platform section.
- Each platform manifest points only to existing public Markdown.
- No manifest leaks local-only fields such as `source_dir`.
- `pnpm test`, `pnpm typecheck`, and `pnpm lint` pass after builder changes.

## Common Mistakes

- Running only `pnpm build:llms <platform>` after deleting `public/`, then publishing a root index with one platform.
- Letting each platform build overwrite root `llms.txt` instead of aggregating manifests.
- Treating `llms-full.txt` as a single-platform file.
- Letting path-based source ids collapse to short numeric suffixes.
