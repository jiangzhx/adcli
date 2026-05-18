import assert from "node:assert/strict";
import test from "node:test";

import { buildSourceArtifacts } from "@/src/lib/builder/artifacts";
import { buildKuaishouDocumentHtml } from "@/src/lib/builder/kuaishou";

test("buildKuaishouDocumentHtml renders API detail data into extractable source blocks", () => {
  const html = buildKuaishouDocumentHtml(
    {
      documentId: 3085,
      documentName: "获取 token",
      documentType: 2,
      description: "<p>利用授权码 auth_code 获取 access_token。</p>",
      version: "0.0.1",
      targetPath: "https://ad.e.kuaishou.com/rest/openapi/oauth2/authorize/access_token",
      httpMethod: "POST",
      httpContentType: "JSON",
      inputParamExampleList: [
        {
          title: "请求样例",
          type: "shell",
          body: "curl -H \"Content-Type:application/json\"",
        },
      ],
      inputParams: [
        {
          paramName: "app_id",
          paramType: "Long",
          required: 1,
          description: "<p>申请应用后快手返回的 app_id</p>",
        },
      ],
      outputParams: [
        {
          paramName: "data",
          paramType: "AuthorizeAccessTokenData",
          children: [
            {
              paramName: "access_token",
              paramType: "String",
              description: "<p>用于验证权限的 token.</p>",
            },
          ],
        },
      ],
    },
    "https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3085&menuId=3784",
  );

  const artifacts = buildSourceArtifacts({
    recipe: {
      id: "kuaishou_3085",
      platform: "kuaishou",
      type: "official_html",
      url: "https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3085&menuId=3784",
      title_hint: "获取 token",
      capture: {
        mode: "fetch",
      },
    },
    rawHtml: html,
    capturedAt: "2026-05-18T00:00:00.000Z",
  });

  assert.equal(artifacts.source.title, "获取 token");
  assert.match(artifacts.cleanedMarkdown, /接口信息/);
  assert.match(artifacts.cleanedMarkdown, /authorize\/access_token/);
  assert.match(artifacts.cleanedMarkdown, /app_id/);
  assert.match(artifacts.cleanedMarkdown, /access_token/);
  assert.ok(artifacts.blocks.length >= 6);
});
