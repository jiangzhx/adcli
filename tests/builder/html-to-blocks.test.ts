import assert from "node:assert/strict";
import test from "node:test";

import { extractBlocksFromHtml } from "@/src/lib/builder/html-to-blocks";

test("extractBlocksFromHtml keeps headings, paragraphs, code, and tables in order", () => {
  const html = `
    <main>
      <h1>API接口</h1>
      <p>用于查询广告报表。</p>
      <h2>请求示例</h2>
      <pre><code>GET /open_api/2/report/get/</code></pre>
      <table>
        <thead>
          <tr><th>字段</th><th>说明</th></tr>
        </thead>
        <tbody>
          <tr><td>advertiser_id</td><td>广告主 ID</td></tr>
        </tbody>
      </table>
    </main>
  `;

  const result = extractBlocksFromHtml({
    html,
    sourceId: "oceanengine_1839621283557572",
    titleHint: "API接口",
  });

  assert.equal(result.cleanedMarkdown, [
    "# API接口",
    "",
    "用于查询广告报表。",
    "",
    "## 请求示例",
    "",
    "```",
    "GET /open_api/2/report/get/",
    "```",
    "",
    "| 字段 | 说明 |",
    "| --- | --- |",
    "| advertiser_id | 广告主 ID |",
  ].join("\n"));

  assert.deepEqual(
    result.blocks.map((block) => ({
      id: block.id,
      kind: block.kind,
      markdown: block.markdown,
      source_id: block.source_id,
    })),
    [
      {
        id: "blk_001",
        kind: "heading",
        markdown: "# API接口",
        source_id: "oceanengine_1839621283557572",
      },
      {
        id: "blk_002",
        kind: "paragraph",
        markdown: "用于查询广告报表。",
        source_id: "oceanengine_1839621283557572",
      },
      {
        id: "blk_003",
        kind: "heading",
        markdown: "## 请求示例",
        source_id: "oceanengine_1839621283557572",
      },
      {
        id: "blk_004",
        kind: "code",
        markdown: "```\nGET /open_api/2/report/get/\n```",
        source_id: "oceanengine_1839621283557572",
      },
      {
        id: "blk_005",
        kind: "table",
        markdown:
          "| 字段 | 说明 |\n| --- | --- |\n| advertiser_id | 广告主 ID |",
        source_id: "oceanengine_1839621283557572",
      },
    ],
  );
});

test("extractBlocksFromHtml falls back to title hint when body has no useful blocks", () => {
  const result = extractBlocksFromHtml({
    html: "<html><head><title>ignored</title></head><body></body></html>",
    sourceId: "empty_source",
    titleHint: "兜底标题",
  });

  assert.equal(result.cleanedMarkdown, "# 兜底标题");
  assert.equal(result.blocks[0]?.kind, "heading");
  assert.equal(result.blocks[0]?.markdown, "# 兜底标题");
});

test("extractBlocksFromHtml merges adjacent code blocks", () => {
  const result = extractBlocksFromHtml({
    html: "<main><pre>{</pre><pre>\"mcpServers\": {</pre><pre>}</pre></main>",
    sourceId: "code_source",
  });

  assert.equal(result.blocks.length, 1);
  assert.equal(
    result.blocks[0]?.markdown,
    "```\n{\n\"mcpServers\": {\n}\n```",
  );
});

test("extractBlocksFromHtml preserves document links as block references", () => {
  const result = extractBlocksFromHtml({
    sourceId: "oceanengine_1696710506574848",
    sourceUrl: "https://open.oceanengine.com/labels/7/docs/1696710506574848?origin=left_nav",
    html: `
      <article>
        <p>先参考 <a href="/labels/7/docs/1696710505596940?origin=metadata">开发者应用</a> 和 <a href="/labels/34/docs/1696710506097679?origin=left_nav">刷新Token</a> 完成配置。</p>
      </article>
    `,
  });

  assert.equal(
    result.cleanedMarkdown,
    "先参考 [开发者应用](https://open.oceanengine.com/labels/7/docs/1696710505596940?origin=metadata) 和 [刷新Token](https://open.oceanengine.com/labels/34/docs/1696710506097679?origin=left_nav) 完成配置。",
  );
  assert.deepEqual(result.blocks[0]?.references, [
    {
      url: "https://open.oceanengine.com/labels/7/docs/1696710505596940?origin=metadata",
      text: "开发者应用",
      target_source_id: "oceanengine_1696710505596940",
    },
    {
      url: "https://open.oceanengine.com/labels/34/docs/1696710506097679?origin=left_nav",
      text: "刷新Token",
      target_source_id: "oceanengine_1696710506097679",
    },
  ]);
});

test("extractBlocksFromHtml infers path-based target source ids", () => {
  const result = extractBlocksFromHtml({
    sourceId: "tencent_ads_v3_0_pages_regist_developer",
    sourceUrl: "https://developers.e.qq.com/v3.0/pages/regist_developer",
    html: `
      <main>
        <p>授权前先阅读 <a href="/v3.0/docs/api/oauth/token">获取 Token</a>。</p>
      </main>
    `,
  });

  assert.deepEqual(result.blocks[0]?.references, [
    {
      url: "https://developers.e.qq.com/v3.0/docs/api/oauth/token",
      text: "获取 Token",
      target_source_id: "tencent_ads_v3_0_docs_api_oauth_token",
    },
  ]);
});
