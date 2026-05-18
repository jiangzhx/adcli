---
name: ad-docs-source-quality
description: Use when validating AdLLMs seed data, source crawl output, collection manifests, cleaned Markdown, or blocks before publishing llms docs
---

# Ad Docs Source Quality

## Overview

Use this after `discover:sources` or `ingest:collection` to decide whether `data/sources/*` is good enough to publish as an llms docs pack.

Core rule: validate the source inventory first, then validate each source has usable extracted content. Do not judge quality from Crawlee success counts alone.

## When to Use

- After full or partial `pnpm ingest:collection`.
- Before running `pnpm build:llms`.
- When `cleaned.md` quality is questioned.
- When checking whether discovery collected too few, duplicate, empty, or title-only documents.

Do not use this for MCP runtime testing or UI behavior.

## Checks

Run from the repository root. Set these values first:

```bash
export PLATFORM=oceanengine
export COLLECTION=oceanengine_open_platform_docs
```

For another platform, change both values, for example:

```bash
export PLATFORM=tencent_ads
export COLLECTION=tencent_ads_developer_docs
```

For a sample ingest, `sourceDirs` and `completeSources` may be lower than `manifestItems`. For a full ingest, all three counts must match.

### 1. Inventory Consistency

```bash
node - <<'NODE'
const fs=require('fs');
const path=require('path');
const platform=process.env.PLATFORM || 'oceanengine';
const collection=process.env.COLLECTION || 'oceanengine_open_platform_docs';
const manifest=require(`./data/sources/${platform}/_collections/${collection}/manifest.json`);
const base=`data/sources/${platform}`;
const dirs=fs.readdirSync(base,{withFileTypes:true})
  .filter(d=>d.isDirectory() && !d.name.startsWith('_'))
  .map(d=>d.name);
const complete=dirs.filter(d=>['source.json','raw.html','cleaned.md','blocks.json']
  .every(f=>fs.existsSync(path.join(base,d,f))));
console.log(JSON.stringify({manifestItems: manifest.items.length, sourceDirs: dirs.length, completeSources: complete.length}, null, 2));
NODE
```

Expected: `manifestItems`, `sourceDirs`, and `completeSources` should match for a full ingest.

### 2. Empty Extraction

```bash
node - <<'NODE'
const fs=require('fs');
const path=require('path');
const platform=process.env.PLATFORM || 'oceanengine';
const base=`data/sources/${platform}`;
const dirs=fs.readdirSync(base,{withFileTypes:true})
  .filter(d=>d.isDirectory()&&!d.name.startsWith('_'))
  .map(d=>d.name);
const bad=[];
let minBlocks={id:null,count:Infinity};
let maxBlocks={id:null,count:-Infinity};
for (const dir of dirs) {
  const clean=fs.readFileSync(path.join(base,dir,'cleaned.md'),'utf8').trim();
  const blocks=JSON.parse(fs.readFileSync(path.join(base,dir,'blocks.json'),'utf8'));
  if (!clean || blocks.length===0) bad.push({dir, cleanLength: clean.length, blocks: blocks.length});
  if (blocks.length < minBlocks.count) minBlocks={id:dir,count:blocks.length};
  if (blocks.length > maxBlocks.count) maxBlocks={id:dir,count:blocks.length};
}
console.log(JSON.stringify({badCount:bad.length, bad:bad.slice(0,10), minBlocks, maxBlocks}, null, 2));
NODE
```

Expected: `badCount` should be `0`. Review `minBlocks`; one-block outputs are usually title-only pages or extractor misses.

### 3. Title-Only Pages

```bash
node - <<'NODE'
const fs=require('fs');
const path=require('path');
const platform=process.env.PLATFORM || 'oceanengine';
const base=`data/sources/${platform}`;
const dirs=fs.readdirSync(base,{withFileTypes:true})
  .filter(d=>d.isDirectory()&&!d.name.startsWith('_'))
  .map(d=>d.name);
const titleOnly=[];
for (const dir of dirs) {
  const blocks=JSON.parse(fs.readFileSync(path.join(base,dir,'blocks.json'),'utf8'));
  if (blocks.length===1 && blocks[0]?.locator==='title_hint') {
    const s=JSON.parse(fs.readFileSync(path.join(base,dir,'source.json'),'utf8'));
    titleOnly.push({id:dir,title:s.title,url:s.url});
  }
}
console.log(JSON.stringify({titleOnlyCount:titleOnly.length, samples:titleOnly.slice(0,10)}, null, 2));
NODE
```

Expected: small non-zero counts are acceptable for seed data, but these pages must be listed as extractor follow-up work before treating the llms docs pack as high quality.

### 4. Size and Samples

```bash
du -sh data/sources/${PLATFORM:-oceanengine}
node - <<'NODE'
const platform=process.env.PLATFORM || 'oceanengine';
const collection=process.env.COLLECTION || 'oceanengine_open_platform_docs';
const manifest=require(`./data/sources/${platform}/_collections/${collection}/manifest.json`);
for (const item of manifest.items.slice(0,10)) console.log(`${item.source_id}\t${item.title}`);
NODE
```

Use this to spot unexpectedly huge raw data or bad manifest titles.

### 4b. Generic Manifest Titles

```bash
node - <<'NODE'
const platform=process.env.PLATFORM || 'oceanengine';
const collection=process.env.COLLECTION || 'oceanengine_open_platform_docs';
const manifest=require(`./data/sources/${platform}/_collections/${collection}/manifest.json`);
const generic=new Set(['接口文档','业务专题','开发者工具','首页','管理工具','最新动态','配置示例']);
const items=manifest.items.filter((item)=>generic.has(item.title));
console.log(JSON.stringify({genericTitleCount:items.length, samples:items.slice(0,10)}, null, 2));
NODE
```

Expected: `genericTitleCount` should be `0` unless the generic text is truly the document title.

### 5. Block References

```bash
node - <<'NODE'
const fs=require('fs');
const path=require('path');
const platform=process.env.PLATFORM || 'oceanengine';
const base=`data/sources/${platform}`;
const dirs=fs.readdirSync(base,{withFileTypes:true})
  .filter(d=>d.isDirectory()&&!d.name.startsWith('_'))
  .map(d=>d.name);
const sourceSet=new Set(dirs);
let references=0;
let targetRefs=0;
let internalTargets=0;
for (const dir of dirs) {
  const blocks=JSON.parse(fs.readFileSync(path.join(base,dir,'blocks.json'),'utf8'));
  for (const block of blocks) for (const ref of block.references ?? []) {
    references++;
    if (ref.target_source_id) {
      targetRefs++;
      if (sourceSet.has(ref.target_source_id)) internalTargets++;
    }
  }
}
console.log(JSON.stringify({references,targetRefs,internalTargets}, null, 2));
NODE
```

Use this before publishing `public/llms.txt`. `internalTargets` indicates whether cross-document references were preserved for Agent follow-up reading.

Interpretation:

- `references`: all extracted document links.
- `targetRefs`: links that were mapped to a `target_source_id`.
- `internalTargets`: mapped links whose target source exists in the current platform data.

If `references` is high but `targetRefs` is `0`, the extractor is probably preserving links but failing to infer source ids for this platform's URL shape.

### 6. Thin External Documents

Use this for platforms whose detail API sometimes returns only metadata plus an external document URL, such as Kuaishou RICHTEXT pages that point to Qingque docs.

```bash
node - <<'NODE'
const fs=require('fs');
const path=require('path');
const platform=process.env.PLATFORM || 'kuaishou';
const base=`data/sources/${platform}`;
const dirs=fs.readdirSync(base,{withFileTypes:true})
  .filter(d=>d.isDirectory()&&!d.name.startsWith('_'))
  .map(d=>d.name);
const thin=[];
for (const dir of dirs) {
  const clean=fs.readFileSync(path.join(base,dir,'cleaned.md'),'utf8').trim();
  const source=JSON.parse(fs.readFileSync(path.join(base,dir,'source.json'),'utf8'));
  if (clean.includes('## 外部文档') && clean.length < 900) {
    thin.push({dir,title:source.title,chars:clean.length,url:source.url});
  }
}
console.log(JSON.stringify({thinExternalCount:thin.length, samples:thin.slice(0,20)}, null, 2));
NODE
```

Expected: `thinExternalCount` can be non-zero when the platform deliberately hosts rich-text content elsewhere, but it must be reported as a quality boundary before treating the docs pack as complete.

## Current OceanEngine Baseline

The current full seed crawl on 2026-05-18 produced:

- `manifestItems`: 643
- `sourceDirs`: 643
- `completeSources`: 643
- `badCount`: 0
- `titleOnlyCount`: 1
- `references`: 4480
- `targetRefs`: 2914
- `internalTargets`: 2850
- source data size: about `282M`

Treat this as a baseline, not a permanent target. If discovery grows later, update the expected counts after reviewing the manifest diff.

## Current Kuaishou DSP Baseline

The current Kuaishou DSP seed crawl on 2026-05-18 produced:

- `manifestItems`: 366
- `sourceDirs`: 366
- `completeSources`: 366
- `badCount`: 0
- `titleOnlyCount`: 0
- `genericTitleCount`: 0
- `thinExternalCount`: 29
- `references`: 29
- `targetRefs`: 0
- `internalTargets`: 0
- source data size: about `11M`

Treat the 29 thin external documents as a known boundary: the Kuaishou detail API exposes an external Qingque URL but not the embedded rich-text body for those pages.

## Acceptance

Seed data is usable when:

- Full ingest has matching manifest/source/complete counts.
- No source has empty `cleaned.md` or empty `blocks.json`.
- Title-only pages are counted and sampled.
- Manifest titles look like document titles, not page anchors such as `配置示例`.
- Generic navigation titles are not used as document titles.
- Block references are extracted when the source HTML contains links, and `targetRefs` is plausible for same-site links.
- Crawlee reports zero failed requests, or failures are listed and intentionally excluded.
- Thin external documents are counted and reported when a platform's API only exposes an external rich-text URL.

## Common Mistakes

- Treating `discover:sources` count as “collected content”. Discovery only writes `manifest.json`.
- Trusting Crawlee success without checking `cleaned.md` and `blocks.json`.
- Publishing title-only pages without listing them as extractor follow-up work.
- Treating a sample ingest mismatch as a full ingest failure.
- Ignoring `targetRefs: 0` when `references` is non-zero.
- Deleting `_collections` before using the manifest for batch ingest.
- Rebuilding source blocks after extractor changes without rerunning the quality checks.
