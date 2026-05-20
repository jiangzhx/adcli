import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { defaultPlatformAliases } from "@/src/lib/search/platforms";
import { buildSearchIndex } from "@/src/lib/search/index-builder";
import { searchDocuments } from "@/src/lib/search/searcher";

test("buildSearchIndex creates searchable records from public docs", async () => {
  const rootDir = await mkdtemp(path.join(os.tmpdir(), "adcli-search-"));

  try {
    await writePublicDoc(rootDir, {
      platform: "tencent_ads",
      id: "tencent_ads_v3_0_docs_api_realtime_cost_get",
      title: "获取实时消耗 全部接口",
      sourceUrl: "https://developers.e.qq.com/v3.0/docs/api/realtime_cost/get",
      publicPath: "/tencent_ads/docs/tencent_ads_v3_0_docs_api_realtime_cost_get.md",
      markdown: "# 获取实时消耗\n\n用于查询广告消耗和实时花费。",
    });

    const index = await buildSearchIndex({ rootDir });

    assert.equal(index.documents.length, 1);
    assert.deepEqual(index.platform_aliases.tencent_ads, defaultPlatformAliases.tencent_ads);
    assert.equal(index.documents[0]?.id, "tencent_ads_v3_0_docs_api_realtime_cost_get");
    assert.deepEqual(index.documents[0]?.headings, ["获取实时消耗"]);
    assert.match(index.documents[0]?.text ?? "", /广告消耗/);

    const raw = await readFile(path.join(rootDir, "public", "search-index.json"), "utf8");
    assert.match(raw, /tencent_ads_v3_0_docs_api_realtime_cost_get/);
  } finally {
    await rm(rootDir, { force: true, recursive: true });
  }
});

test("searchDocuments ranks spend documents for Chinese queries", async () => {
  const results = await searchDocuments({
    query: "广告消耗",
    documents: [
      {
        id: "tencent_ads_v3_0_docs_api_realtime_cost_get",
        platform: "tencent_ads",
        title: "获取实时消耗 全部接口",
        public_path: "/tencent_ads/docs/tencent_ads_v3_0_docs_api_realtime_cost_get.md",
        source_url: "https://developers.e.qq.com/v3.0/docs/api/realtime_cost/get",
        headings: ["请求参数"],
        text: "广告消耗 实时花费 advertiser_id date",
      },
      {
        id: "tencent_ads_v3_0_docs_api_oauth_token",
        platform: "tencent_ads",
        title: "获取 Token",
        public_path: "/tencent_ads/docs/tencent_ads_v3_0_docs_api_oauth_token.md",
        source_url: "https://developers.e.qq.com/v3.0/docs/api/oauth/token",
        headings: ["授权"],
        text: "access_token refresh_token authorization_code",
      },
    ],
  });

  assert.equal(results[0]?.id, "tencent_ads_v3_0_docs_api_realtime_cost_get");
  assert.equal(results[0]?.public_path, "/tencent_ads/docs/tencent_ads_v3_0_docs_api_realtime_cost_get.md");
});

test("searchDocuments boosts platform matches when query names a platform alias", async () => {
  const results = await searchDocuments({
    query: "广点通 广告消耗",
    platformAliases: {
      tencent_ads: ["广点通", "腾讯广告"],
      kuaishou: ["快手"],
      oceanengine: ["巨量"],
    },
    documents: [
      {
        id: "tencent_ads_v3_0_docs_api_realtime_cost_get",
        platform: "tencent_ads",
        title: "获取实时消耗 全部接口",
        public_path: "/tencent_ads/docs/tencent_ads_v3_0_docs_api_realtime_cost_get.md",
        source_url: "https://developers.e.qq.com/v3.0/docs/api/realtime_cost/get",
        headings: ["请求参数"],
        text: "广告消耗 实时花费 advertiser_id date",
      },
      {
        id: "kuaishou_3211",
        platform: "kuaishou",
        title: "客户共享钱包消耗明细查询",
        public_path: "/kuaishou/docs/kuaishou_3211.md",
        source_url: "https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3211",
        headings: ["接口说明"],
        text: "广告消耗 共享钱包 客户流水",
      },
      {
        id: "oceanengine_1784979080790218",
        platform: "oceanengine",
        title: "代理商消耗报表数据",
        public_path: "/oceanengine/docs/1784979080790218.md",
        source_url: "https://open.oceanengine.com/labels/7/docs/1784979080790218",
        headings: ["接口说明"],
        text: "广告消耗 代理商 报表数据",
      },
    ],
  });

  assert.equal(results[0]?.id, "tencent_ads_v3_0_docs_api_realtime_cost_get");
  assert.ok(results.some((result) => result.platform === "kuaishou"));
});

test("searchDocuments supports explicit platform filtering", async () => {
  const results = await searchDocuments({
    query: "广告消耗",
    platform: "tencent_ads",
    documents: [
      {
        id: "tencent_ads_v3_0_docs_api_realtime_cost_get",
        platform: "tencent_ads",
        title: "获取实时消耗 全部接口",
        public_path: "/tencent_ads/docs/tencent_ads_v3_0_docs_api_realtime_cost_get.md",
        source_url: "https://developers.e.qq.com/v3.0/docs/api/realtime_cost/get",
        headings: ["请求参数"],
        text: "广告消耗 实时花费 advertiser_id date",
      },
      {
        id: "kuaishou_3211",
        platform: "kuaishou",
        title: "客户共享钱包消耗明细查询",
        public_path: "/kuaishou/docs/kuaishou_3211.md",
        source_url: "https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3211",
        headings: ["接口说明"],
        text: "广告消耗 共享钱包 客户流水",
      },
    ],
  });

  assert.deepEqual(results.map((result) => result.platform), ["tencent_ads"]);
});

async function writePublicDoc(
  rootDir: string,
  input: {
    platform: string;
    id: string;
    title: string;
    sourceUrl: string;
    publicPath: string;
    markdown: string;
  },
): Promise<void> {
  const publicRoot = path.join(rootDir, "public");
  const platformRoot = path.join(publicRoot, input.platform);
  const docPath = path.join(publicRoot, input.publicPath);

  await mkdir(path.dirname(docPath), { recursive: true });
  await writeFile(docPath, input.markdown, "utf8");
  await writeFile(
    path.join(platformRoot, "manifest.json"),
    `${JSON.stringify({
      platform: input.platform,
      documents: [
        {
          id: input.id,
          doc_id: input.id,
          platform: input.platform,
          title: input.title,
          source_url: input.sourceUrl,
          public_path: input.publicPath,
        },
      ],
      outputs: {
        llms: "/llms.txt",
        llms_full: "/llms-full.txt",
        platform_index: `/${input.platform}/index.md`,
        platform_manifest: `/${input.platform}/manifest.json`,
      },
      updated_at: "2026-05-20T00:00:00.000Z",
    }, null, 2)}\n`,
    "utf8",
  );
}
