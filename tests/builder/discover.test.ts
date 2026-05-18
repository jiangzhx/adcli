import assert from "node:assert/strict";
import test from "node:test";

import { discoverDocumentsFromLinks, discoverDocumentsFromOceanEngineTree } from "@/src/lib/builder/discover";
import { discoverDocumentsFromKuaishouMenu } from "@/src/lib/builder/kuaishou";

test("discoverDocumentsFromLinks filters, normalizes, deduplicates, and creates source recipes", () => {
  const manifest = discoverDocumentsFromLinks({
    collectionId: "oceanengine_open_platform_docs",
    platform: "oceanengine",
    entryUrl: "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
    linkPatterns: ["/labels/7/docs/"],
    links: [
      {
        text: "MCP 简介",
        href: "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
      },
      {
        text: "报表 API",
        href: "/labels/7/docs/1839621283557000?origin=left_nav",
      },
      {
        text: "报表 API 重复",
        href: "https://open.oceanengine.com/labels/7/docs/1839621283557000?origin=left_nav",
      },
      {
        text: "首页",
        href: "https://open.oceanengine.com/",
      },
    ],
  });

  assert.equal(manifest.items.length, 2);
  assert.deepEqual(
    manifest.items.map((item) => ({
      source_id: item.source_id,
      title: item.title,
      url: item.url,
      recipe_type: item.recipe.type,
    })),
    [
      {
        source_id: "oceanengine_1839621283557572",
        title: "MCP 简介",
        url: "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
        recipe_type: "official_html",
      },
      {
        source_id: "oceanengine_1839621283557000",
        title: "报表 API",
        url: "https://open.oceanengine.com/labels/7/docs/1839621283557000?origin=left_nav",
        recipe_type: "official_html",
      },
    ],
  );
});

test("discoverDocumentsFromOceanEngineTree flattens nested doc tree into source recipes", () => {
  const manifest = discoverDocumentsFromOceanEngineTree({
    collectionId: "oceanengine_open_platform_docs",
    platform: "oceanengine",
    entryUrl: "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
    tree: {
      code: 0,
      data: {
        primary_doc_list: [
          {
            doc_id: "parent",
            title: "MCP 简介",
            child_docs: [
              {
                doc_id: "1839621283557572",
                title: "巨量引擎开发工具",
                child_docs: [],
              },
              {
                doc_id: "1847394521222599",
                title: "AD业务工具",
                child_docs: [],
              },
            ],
          },
        ],
      },
    },
  });

  assert.deepEqual(
    manifest.items.map((item) => ({
      source_id: item.source_id,
      title: item.title,
      url: item.url,
    })),
    [
      {
        source_id: "oceanengine_1839621283557572",
        title: "巨量引擎开发工具",
        url: "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
      },
      {
        source_id: "oceanengine_1847394521222599",
        title: "AD业务工具",
        url: "https://open.oceanengine.com/labels/7/docs/1847394521222599?origin=left_nav",
      },
    ],
  );
});

test("discoverDocumentsFromLinks prefers a later descriptive title for duplicate urls", () => {
  const manifest = discoverDocumentsFromLinks({
    collectionId: "oceanengine_open_platform_docs",
    platform: "oceanengine",
    entryUrl: "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
    linkPatterns: ["/labels/7/docs/"],
    links: [
      {
        text: "",
        href: "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
      },
      {
        text: "巨量引擎开发工具",
        href: "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
      },
    ],
  });

  assert.equal(manifest.items.length, 1);
  assert.equal(manifest.items[0]?.title, "巨量引擎开发工具");
  assert.equal(manifest.items[0]?.recipe.title_hint, "巨量引擎开发工具");
});

test("discoverDocumentsFromLinks replaces generic navigation titles", () => {
  const manifest = discoverDocumentsFromLinks({
    collectionId: "tencent_ads_developer_docs",
    platform: "tencent_ads",
    entryUrl: "https://developers.e.qq.com/v3.0/pages/regist_developer",
    linkPatterns: ["/v3.0/pages/"],
    links: [
      {
        text: "接口文档",
        href: "https://developers.e.qq.com/v3.0/pages/regist_developer",
      },
      {
        text: "如何注册成为开发者？",
        href: "https://developers.e.qq.com/v3.0/pages/regist_developer",
      },
    ],
  });

  assert.equal(manifest.items.length, 1);
  assert.equal(manifest.items[0]?.title, "如何注册成为开发者？");
  assert.equal(manifest.items[0]?.recipe.title_hint, "如何注册成为开发者？");
});

test("discoverDocumentsFromLinks applies max items after duplicate title improvement", () => {
  const manifest = discoverDocumentsFromLinks({
    collectionId: "tencent_ads_developer_docs",
    platform: "tencent_ads",
    entryUrl: "https://developers.e.qq.com/v3.0/pages/regist_developer",
    linkPatterns: ["/v3.0/pages/"],
    maxItems: 1,
    links: [
      {
        text: "业务专题",
        href: "https://developers.e.qq.com/v3.0/pages/adgroups/add",
      },
      {
        text: "如何注册成为开发者？",
        href: "https://developers.e.qq.com/v3.0/pages/regist_developer",
      },
      {
        text: "创建新投放",
        href: "https://developers.e.qq.com/v3.0/pages/adgroups/add",
      },
    ],
  });

  assert.equal(manifest.items.length, 1);
  assert.equal(manifest.items[0]?.source_id, "tencent_ads_v3_0_pages_adgroups_add");
  assert.equal(manifest.items[0]?.title, "创建新投放");
});

test("discoverDocumentsFromLinks deduplicates the same doc id across query variants", () => {
  const manifest = discoverDocumentsFromLinks({
    collectionId: "oceanengine_open_platform_docs",
    platform: "oceanengine",
    entryUrl: "https://open.oceanengine.com/labels/7/docs/1839621283557572",
    linkPatterns: ["/labels/7/docs/"],
    links: [
      {
        text: "配置示例",
        href: "https://open.oceanengine.com/labels/7/docs/1839621283557572",
      },
      {
        text: "巨量引擎开发工具",
        href: "https://open.oceanengine.com/labels/7/docs/1839621283557572?origin=left_nav",
      },
    ],
  });

  assert.equal(manifest.items.length, 1);
  assert.equal(manifest.items[0]?.source_id, "oceanengine_1839621283557572");
  assert.equal(manifest.items[0]?.title, "巨量引擎开发工具");
});

test("discoverDocumentsFromLinks creates stable source ids for path-based docs", () => {
  const manifest = discoverDocumentsFromLinks({
    collectionId: "tencent_ads_developer_docs",
    platform: "tencent_ads",
    entryUrl: "https://developers.e.qq.com/v3.0/pages/regist_developer",
    linkPatterns: ["/v3.0/pages/", "/v3.0/docs/"],
    links: [
      {
        text: "如何注册成为开发者？",
        href: "https://developers.e.qq.com/v3.0/pages/regist_developer",
      },
      {
        text: "获取 Token",
        href: "https://developers.e.qq.com/v3.0/docs/api/oauth/token",
      },
    ],
  });

  assert.deepEqual(
    manifest.items.map((item) => ({
      source_id: item.source_id,
      title: item.title,
      url: item.url,
    })),
    [
      {
        source_id: "tencent_ads_v3_0_pages_regist_developer",
        title: "如何注册成为开发者？",
        url: "https://developers.e.qq.com/v3.0/pages/regist_developer",
      },
      {
        source_id: "tencent_ads_v3_0_docs_api_oauth_token",
        title: "获取 Token",
        url: "https://developers.e.qq.com/v3.0/docs/api/oauth/token",
      },
    ],
  );
});

test("discoverDocumentsFromLinks creates stable source ids for query-based Kuaishou docs", () => {
  const manifest = discoverDocumentsFromLinks({
    collectionId: "kuaishou_dsp_developer_docs",
    platform: "kuaishou",
    entryUrl: "https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2539&menuId=3765",
    linkPatterns: ["docType=DSP"],
    links: [
      {
        text: "获取 token",
        href: "https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3085&menuId=3784",
      },
    ],
  });

  assert.equal(manifest.items[0]?.source_id, "kuaishou_3085");
  assert.equal(
    manifest.items[0]?.url,
    "https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3085&menuId=3784",
  );
});

test("discoverDocumentsFromKuaishouMenu flattens menu API docs and deduplicates document ids", () => {
  const manifest = discoverDocumentsFromKuaishouMenu({
    collectionId: "kuaishou_dsp_developer_docs",
    platform: "kuaishou",
    entryUrl: "https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2539&menuId=3765",
    menuList: [
      {
        menuId: 3767,
        menuName: "Token管理",
        platformType: "DSP",
        documentId: 0,
        children: [
          {
            menuId: 3784,
            menuName: "获取 token",
            platformType: "DSP",
            documentId: 3085,
            documentName: "获取 token",
          },
          {
            menuId: 3900,
            menuName: "获取 token 重复入口",
            platformType: "DSP",
            documentId: 3085,
            documentName: "获取 token",
          },
        ],
      },
    ],
  });

  assert.deepEqual(
    manifest.items.map((item) => ({
      source_id: item.source_id,
      title: item.title,
      url: item.url,
      capture_mode: item.recipe.capture.mode,
    })),
    [
      {
        source_id: "kuaishou_3085",
        title: "获取 token",
        url: "https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3085&menuId=3784",
        capture_mode: "fetch",
      },
    ],
  );
});
