---
name: ad-docs-llms-curation
description: Use when curating Ad Docs LLMs llms task entries, Common Tasks, platform navigation, AI-proposed index summaries, or reviewed task-link recommendations
---

# Ad Docs Llms Curation

## Overview

Use AI only for the semantic entrance layer: platform summary, Common Tasks, and recommended task links. Do not let AI generate the complete document inventory; that must come from deterministic manifests.

## When to Use

- After a platform has passed source quality checks.
- After `public/{platform}/manifest.json` exists.
- When `public/llms.txt` has empty or weak Common Tasks.
- When adding common questions such as spend, reports, access token, funds, callback, or SDK.
- When reviewing AI-generated task suggestions.

Do not use this to decide whether a document exists. Use `public/{platform}/manifest.json` as the source of truth.

## Inputs

Use deterministic inputs:

```text
public/{platform}/manifest.json
public/{platform}/docs/*.md
```

For token efficiency, give AI:

- All manifest titles and public paths.
- Source URLs.
- Short excerpts only for ambiguous candidates.
- Existing Common Tasks for the same or similar platform.

## Output Contract

AI suggestions must be written as proposed data, not directly into generated `public/llms.txt`:

```text
data/curation/{platform}/common-tasks.proposed.json
```

Proposed shape:

```json
[
  {
    "title": "获取广告消耗数据",
    "links": [
      {
        "title": "获取实时消耗",
        "docId": "tencent_ads_v3_0_docs_api_realtime_cost_get",
        "reason": "Direct spend endpoint"
      }
    ]
  }
]
```

After human review, promote to:

```text
data/curation/{platform}/common-tasks.json
```

Only reviewed curation should affect `pnpm build:llms all`.

## Suggested Task Groups

Start with high-frequency Agent entry points:

- 获取广告消耗数据
- 获取广告报表
- 获取 Access Token
- 创建广告计划 / 广告组 / 创意
- 查询账户资金 / 流水 / 余额
- 回调 / 事件订阅
- SDK 接入
- 枚举值 / 字段字典

Do not force every platform into every group. Empty or weak groups should be omitted.

## Review Checklist

- Every `docId` exists in `public/{platform}/manifest.json`.
- Task links point to task-level entry documents, not broad indexes when a specific API exists.
- Common Tasks are short enough for `llms.txt`.
- AI reasons are useful for review but are not published unless intentionally included.
- No invented endpoint, path, field, or permission appears in the curation file.
- Similar tasks across platforms use consistent names when the intent is the same.

## Common Mistakes

- Asking AI to rewrite the full document index.
- Letting AI output directly replace `public/llms.txt`.
- Publishing suggestions without checking that every `docId` exists.
- Adding too many links to one task and making the entry page noisy.
- Using only title matching when a title is ambiguous; inspect short excerpts for those cases.
