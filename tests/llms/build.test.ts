import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile, mkdir } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { buildAllLlmsArtifacts, buildLlmsArtifacts } from "@/src/lib/llms/builder";

test("buildLlmsArtifacts publishes source markdown and llms indexes", async () => {
  const rootDir = await mkdtemp(path.join(os.tmpdir(), "ad-docs-llms-"));

  try {
    await writeSource(rootDir, "oceanengine", "oceanengine_1741387668314126", {
      title: "自定义报表",
      url: "https://open.oceanengine.com/labels/7/docs/1741387668314126?origin=left_nav",
      markdown: "# 自定义报表\n\n通过 stat_cost 获取广告消耗。",
    });
    await writeSource(rootDir, "oceanengine", "oceanengine_1755261744248832", {
      title: "获取自定义报表可用指标和维度",
      url: "https://open.oceanengine.com/labels/7/docs/1755261744248832",
      markdown: "# 获取自定义报表可用指标和维度\n\n查询 metrics 和 dimensions。",
    });

    const manifest = await buildLlmsArtifacts({ rootDir, platform: "oceanengine" });

    assert.equal(manifest.platform, "oceanengine");
    assert.equal(manifest.documents.length, 2);
    assert.equal(manifest.outputs.llms, "/llms.txt");
    assert.equal(manifest.documents[0]?.public_path, "/oceanengine/docs/1741387668314126.md");
    assert.equal("source_dir" in manifest.documents[0]!, false);

    const llms = await readFile(path.join(rootDir, "public", "llms.txt"), "utf8");
    assert.match(llms, /# Ad Docs Context/);
    assert.match(llms, /获取广告消耗数据/);
    assert.match(llms, /\/oceanengine\/docs\/1741387668314126\.md/);

    const full = await readFile(path.join(rootDir, "public", "llms-full.txt"), "utf8");
    assert.match(full, /自定义报表/);
    assert.match(full, /获取自定义报表可用指标和维度/);

    const markdown = await readFile(path.join(rootDir, "public", "oceanengine", "docs", "1741387668314126.md"), "utf8");
    assert.match(markdown, /title: 自定义报表/);
    assert.match(markdown, /source_url: https:\/\/open\.oceanengine\.com\/labels\/7\/docs\/1741387668314126\?origin=left_nav/);
    assert.match(markdown, /通过 stat_cost 获取广告消耗。/);
  } finally {
    await rm(rootDir, { force: true, recursive: true });
  }
});

test("buildLlmsArtifacts keeps path-based source ids as doc ids", async () => {
  const rootDir = await mkdtemp(path.join(os.tmpdir(), "ad-docs-llms-"));

  try {
    await writeSource(rootDir, "tencent_ads", "tencent_ads_v3_0_pages_docs_reference_industry_v6_1", {
      title: "行业分类-2026 年 1 月 5 日生效",
      url: "https://developers.e.qq.com/v3.0/pages/docs/reference/industry_v6.1",
      markdown: "# 行业分类",
    });
    await writeSource(rootDir, "tencent_ads", "tencent_ads_v3_0_docs_api_realtime_cost_get", {
      title: "获取实时消耗",
      url: "https://developers.e.qq.com/v3.0/docs/api/realtime_cost/get",
      markdown: "# 获取实时消耗",
    });

    const manifest = await buildLlmsArtifacts({ rootDir, platform: "tencent_ads" });

    assert.equal(
      manifest.documents.find((document) => document.id === "tencent_ads_v3_0_pages_docs_reference_industry_v6_1")?.doc_id,
      "tencent_ads_v3_0_pages_docs_reference_industry_v6_1",
    );
    assert.equal(
      manifest.documents.find((document) => document.id === "tencent_ads_v3_0_pages_docs_reference_industry_v6_1")?.public_path,
      "/tencent_ads/docs/tencent_ads_v3_0_pages_docs_reference_industry_v6_1.md",
    );

    const llms = await readFile(path.join(rootDir, "public", "llms.txt"), "utf8");
    assert.match(llms, /获取广告消耗数据/);
    assert.match(llms, /\/tencent_ads\/docs\/tencent_ads_v3_0_docs_api_realtime_cost_get\.md/);
  } finally {
    await rm(rootDir, { force: true, recursive: true });
  }
});

test("buildLlmsArtifacts aggregates root indexes across built platforms", async () => {
  const rootDir = await mkdtemp(path.join(os.tmpdir(), "ad-docs-llms-"));

  try {
    await writeSource(rootDir, "oceanengine", "oceanengine_1741387668314126", {
      title: "自定义报表",
      url: "https://open.oceanengine.com/labels/7/docs/1741387668314126?origin=left_nav",
      markdown: "# 自定义报表",
    });
    await buildLlmsArtifacts({ rootDir, platform: "oceanengine" });

    await writeSource(rootDir, "tencent_ads", "tencent_ads_v3_0_docs_api_realtime_cost_get", {
      title: "获取实时消耗",
      url: "https://developers.e.qq.com/v3.0/docs/api/realtime_cost/get",
      markdown: "# 获取实时消耗",
    });
    await buildLlmsArtifacts({ rootDir, platform: "tencent_ads" });

    const llms = await readFile(path.join(rootDir, "public", "llms.txt"), "utf8");
    assert.match(llms, /## oceanengine/);
    assert.match(llms, /\/oceanengine\/docs\/1741387668314126\.md/);
    assert.match(llms, /## tencent_ads/);
    assert.match(llms, /\/tencent_ads\/docs\/tencent_ads_v3_0_docs_api_realtime_cost_get\.md/);

    const full = await readFile(path.join(rootDir, "public", "llms-full.txt"), "utf8");
    assert.match(full, /## oceanengine/);
    assert.match(full, /## tencent_ads/);
  } finally {
    await rm(rootDir, { force: true, recursive: true });
  }
});

test("buildAllLlmsArtifacts publishes every source platform into root indexes", async () => {
  const rootDir = await mkdtemp(path.join(os.tmpdir(), "ad-docs-llms-"));

  try {
    await writeSource(rootDir, "oceanengine", "oceanengine_1741387668314126", {
      title: "自定义报表",
      url: "https://open.oceanengine.com/labels/7/docs/1741387668314126?origin=left_nav",
      markdown: "# 自定义报表",
    });
    await writeSource(rootDir, "tencent_ads", "tencent_ads_v3_0_docs_api_realtime_cost_get", {
      title: "获取实时消耗",
      url: "https://developers.e.qq.com/v3.0/docs/api/realtime_cost/get",
      markdown: "# 获取实时消耗",
    });

    const manifests = await buildAllLlmsArtifacts({ rootDir });

    assert.deepEqual(manifests.map((manifest) => manifest.platform), ["oceanengine", "tencent_ads"]);

    const llms = await readFile(path.join(rootDir, "public", "llms.txt"), "utf8");
    assert.match(llms, /## oceanengine/);
    assert.match(llms, /## tencent_ads/);
  } finally {
    await rm(rootDir, { force: true, recursive: true });
  }
});

async function writeSource(
  rootDir: string,
  platform: string,
  sourceId: string,
  input: { title: string; url: string; markdown: string },
): Promise<void> {
  const dir = path.join(rootDir, "data", "sources", platform, sourceId);
  await mkdir(dir, { recursive: true });
  await writeFile(
    path.join(dir, "source.json"),
    `${JSON.stringify(
      {
        id: sourceId,
        platform,
        type: "official_html",
        title: input.title,
        url: input.url,
        captured_at: "2026-05-18T00:00:00.000Z",
        hash: "sha256:test",
        status: "ok",
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  await writeFile(path.join(dir, "cleaned.md"), input.markdown, "utf8");
}
