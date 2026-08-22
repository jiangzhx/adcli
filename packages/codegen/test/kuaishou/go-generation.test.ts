import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { mkdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { describe, expect, test } from "bun:test";
import { generateFromGoSdk } from "../../src/kuaishou/generate-from-go-sdk";

describe("kuaishou go generation workflow", () => {
  test("writes directory barrels as /index and only publishes the allowlisted namespaces", async () => {
    const root = mkdtempSync(join(tmpdir(), "kuaishou-go-sdk-"));
    const outRoot = mkdtempSync(join(tmpdir(), "kuaishou-node-sdk-"));
    const outDir = join(outRoot, "src");
    try {
      await mkdir(outDir, { recursive: true });
      writeFileSync(
        join(outRoot, "package.json"),
        `${JSON.stringify({ name: "@jiangzhx/kuaishou-marketing-api", exports: { ".": { import: "./dist/index.js" } } }, null, 2)}\n`,
      );
      await writeGoTree(root, {
        "model/advertiser/info.go": goPostModel("advertiser", "Info", "v1/advertiser/info"),
        "api/advertiser/info.go": goPostApi("advertiser", "advertiser", "Info", "Info"),
        "model/oauth/approval_list.go": goPostModel("oauth", "ApprovalList", "oauth2/authorize/approval/list"),
        "api/oauth/approval_list.go": goApprovalListApi(),
        "model/dsp/campaign/list.go": goPostModel("campaign", "List", "gw/dsp/campaign/list"),
        "api/dsp/campaign/list.go": goPostApi("campaign", "dsp/campaign", "List", "List"),
        "model/dsp/unit/list.go": goPostModel("unit", "List", "gw/dsp/unit/list"),
        "api/dsp/unit/list.go": goPostApi("unit", "dsp/unit", "List", "List"),
        "model/report/unit_report.go": goPostModel("report", "UnitReport", "v1/report/unit_report"),
        "api/report/unit_report.go": goPostApi("report", "report", "UnitReport", "UnitReport"),
        "model/report/material_report.go": goPostModel("report", "MaterialReport", "v1/report/material_report"),
        "api/report/material_report.go": goPostApi("report", "report", "MaterialReport", "MaterialReport"),
        "model/report/asynctask/create.go": goPostModel("asynctask", "Create", "v1/async_task/create"),
        "api/report/asynctask/create.go": goPostApi("asynctask", "report/asynctask", "Create", "Create"),
        "model/file/ad_video_list.go": goPostModel("file", "AdVideoList", "v1/file/ad/video/list"),
        "api/file/ad_video_list.go": goPostApi("file", "file", "AdVideoList", "AdVideoList"),
        "api/track/activate.go": `
package track
func Activate() error {
  return nil
}
`,
      });

      const result = await generateFromGoSdk({ goSdkRoot: root, outputDir: outDir });

      expect(result.source).toBe("go");
      expect(result.apis).toBe(8);
      expect(result.skipped.some((item) => item.file === "api/track/activate.go")).toBe(true);

      const reportBarrel = readFileSync(join(outDir, "api", "report", "index.ts"), "utf8");
      expect(reportBarrel).toContain('export * from "./unit_report";');
      expect(reportBarrel).toContain('export * from "./asynctask/index";');
      expect(reportBarrel).not.toContain('export * from "./asynctask";');

      const infoApi = readFileSync(join(outDir, "api", "advertiser", "info.ts"), "utf8");
      expect(infoApi).toContain('from "../../core/index"');
      expect(infoApi).toContain('from "../../model/advertiser/index"');
      expect(infoApi).not.toContain('from "../../core"');

      const approvalApi = readFileSync(join(outDir, "api", "oauth", "approval_list.ts"), "utf8");
      expect(approvalApi).toContain("successCodes: [0, 1]");

      const materialApi = readFileSync(join(outDir, "api", "report", "material_report.ts"), "utf8");
      expect(materialApi).toContain("flatResponse: true");
      const unitApi = readFileSync(join(outDir, "api", "report", "unit_report.ts"), "utf8");
      expect(unitApi).not.toContain("flatResponse");

      const index = readFileSync(join(outDir, "index.ts"), "utf8");
      expect(index).toContain('export * as report from "./api/report/index"');
      expect(index).toContain('export * as file from "./api/file/index"');
      expect(index).toContain('export * as asyncTask from "./api/report/asynctask/index"');
      expect(index).toContain('export * as oauth from "./api/oauth/index"');
      expect(index).not.toContain("track");
      expect(index).toContain('from "./core/index"');

      const pkg = JSON.parse(readFileSync(join(outRoot, "package.json"), "utf8")) as { exports: Record<string, unknown> };
      expect(pkg.exports["./api/report"]).toEqual({
        types: "./dist/api/report/index.d.ts",
        import: "./dist/api/report/index.js",
      });
      expect(pkg.exports["./api/file"]).toEqual({
        types: "./dist/api/file/index.d.ts",
        import: "./dist/api/file/index.js",
      });
      expect(pkg.exports["./api/report/asynctask"]).toEqual({
        types: "./dist/api/report/asynctask/index.d.ts",
        import: "./dist/api/report/asynctask/index.js",
      });
      expect(pkg.exports["./api/track"]).toBeUndefined();
      expect(existsSync(join(outDir, "api", "track"))).toBe(false);
    } finally {
      await rm(root, { recursive: true, force: true });
      await rm(outRoot, { recursive: true, force: true });
    }
  });

  test("flattens embedded ReportRequest fields into generated report classes", async () => {
    const root = mkdtempSync(join(tmpdir(), "kuaishou-go-embed-"));
    const outRoot = mkdtempSync(join(tmpdir(), "kuaishou-node-embed-"));
    const outDir = join(outRoot, "src");
    try {
      await mkdir(outDir, { recursive: true });
      await writeGoTree(root, {
        "model/report/report_request.go": `
package report
type ReportRequest struct {
  AdvertiserID uint64 \`json:"advertiser_id,omitempty"\`
  StartDate string \`json:"start_date,omitempty"\`
  EndDate string \`json:"end_date,omitempty"\`
  Page int \`json:"page,omitempty"\`
  PageSize int \`json:"page_size,omitempty"\`
  TemporalGranularity string \`json:"temporal_granularity,omitempty"\`
}
`,
        "model/report/unit_report_request.go": `
package report
type UnitReportRequest struct {
  ReportRequest
  CampaignIDs []uint64 \`json:"campaign_ids,omitempty"\`
}
func (r UnitReportRequest) Url() string { return "v1/report/unit_report" }
func (r UnitReportRequest) Encode() []byte { return nil }
`,
        "model/report/material_report_request.go": `
package report
type MaterialReportRequest struct {
  ReportRequest
  ViewType int \`json:"view_type,omitempty"\`
}
func (r MaterialReportRequest) Url() string { return "v1/report/material_report" }
func (r MaterialReportRequest) Encode() []byte { return nil }
`,
        "api/report/unit_report.go": goPostApi("report", "report", "UnitReport", "UnitReport"),
      });

      await generateFromGoSdk({ goSdkRoot: root, outputDir: outDir });

      const unit = readFileSync(join(outDir, "model", "report", "unit_report_request.ts"), "utf8");
      expect(unit).toContain("advertiser_id?: KuaishouId");
      expect(unit).toContain("start_date?: string");
      expect(unit).toContain("end_date?: string");
      expect(unit).toContain("page?: number");
      expect(unit).toContain("page_size?: number");
      expect(unit).toContain("temporal_granularity?: string");
      expect(unit).toContain("campaign_ids?: KuaishouId[]");
      expect(unit).toContain("advertiser_id: this.advertiser_id");
      expect(unit).toContain("start_date: this.start_date");

      const material = readFileSync(join(outDir, "model", "report", "material_report_request.ts"), "utf8");
      expect(material).toContain("advertiser_id?: KuaishouId");
      expect(material).toContain("view_type?: number");
      expect(material).toContain("advertiser_id: this.advertiser_id");
    } finally {
      await rm(root, { recursive: true, force: true });
      await rm(outRoot, { recursive: true, force: true });
    }
  });
});

async function writeGoTree(root: string, files: Record<string, string>) {
  for (const [relativePath, source] of Object.entries(files)) {
    const target = join(root, relativePath);
    await mkdir(dirname(target), { recursive: true });
    writeFileSync(target, source);
  }
}

function goPostModel(packageName: string, typeName: string, url: string) {
  return `
package ${packageName}

type ${typeName}Request struct {
  AdvertiserID uint64 \`json:"advertiser_id,omitempty"\`
}

func (r ${typeName}Request) Url() string { return ${JSON.stringify(url)} }

func (r ${typeName}Request) Encode() []byte { return nil }

type ${typeName}Response struct {
  OK int \`json:"ok,omitempty"\`
}
`;
}

function goPostApi(packageName: string, modelImport: string, functionName: string, typeName: string) {
  return `
package ${packageName}

import (
  "context"
  "github.com/bububa/kwai-marketing-api/core"
  "github.com/bububa/kwai-marketing-api/model/${modelImport}"
)

func ${functionName}(ctx context.Context, clt *core.SDKClient, accessToken string, req *${packageName}.${typeName}Request) (*${packageName}.${typeName}Response, error) {
  var resp ${packageName}.${typeName}Response
  if err := clt.Post(ctx, accessToken, req, &resp); err != nil {
    return nil, err
  }
  return &resp, nil
}
`;
}

function goApprovalListApi() {
  return `
package oauth

import (
  "context"
  "github.com/bububa/kwai-marketing-api/core"
  "github.com/bububa/kwai-marketing-api/model/oauth"
)

func ApprovalList(ctx context.Context, clt *core.SDKClient, accessToken string, pageNo int, pageSize int) (*oauth.ApprovalListResponse, error) {
  req := &oauth.ApprovalListRequest{
    AccessToken: accessToken,
    PageNo: pageNo,
    PageSize: pageSize,
  }
  var resp oauth.ApprovalListResponse
  if err := clt.Post(ctx, "", req, &resp); err != nil {
    return nil, err
  }
  return &resp, nil
}
`;
}
