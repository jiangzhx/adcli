import { describe, expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import { parseGoApiSource, parseGoModelSource, flattenEmbeddedFields } from "../../src/kuaishou/go-parser";

const goRoot = "/tmp/kwai-marketing-api-src";

describe("kuaishou go parser", () => {
  test("parses advertiser info request and response structs", async () => {
    const request = parseGoModelSource(await readFile(`${goRoot}/model/advertiser/info_request.go`, "utf8"), "model/advertiser/info_request.go");
    const info = parseGoModelSource(await readFile(`${goRoot}/model/advertiser/info.go`, "utf8"), "model/advertiser/info.go");

    expect(request.structs[0]).toMatchObject({
      name: "InfoRequest",
      requestKind: "post",
      url: "v1/advertiser/info",
    });
    expect(request.structs[0].fields).toEqual([{ goName: "AdvertiserID", jsonName: "advertiser_id", tsType: "KuaishouId" }]);
    expect(info.structs[0].name).toBe("Info");
    expect(info.structs[0].requestKind).toBe("none");
    expect(info.structs[0].fields.some((field) => field.jsonName === "user_name" && field.tsType === "string")).toBe(true);
  });

  test("parses advertiser info API and campaign create unwrap", async () => {
    const infoModels = parseGoModelSource(await readFile(`${goRoot}/model/advertiser/info.go`, "utf8"), "model/advertiser/info.go");
    const infoApi = parseGoApiSource(await readFile(`${goRoot}/api/advertiser/info.go`, "utf8"), "api/advertiser/info.go", infoModels.structs);
    expect(infoApi.functions[0]).toMatchObject({
      functionName: "Info",
      tsName: "info",
      kind: "post",
      unwrap: "object",
      responseType: "Info",
      requestType: "InfoRequest",
    });

    const campaignModels = parseGoModelSource(
      `
package campaign
type CreateRequest struct {
  AdvertiserID uint64 \`json:"advertiser_id,omitempty"\`
}
func (r CreateRequest) Url() string { return "gw/dsp/campaign/create" }
func (r CreateRequest) Encode() []byte { return nil }
type CreateResponse struct {
  CampaignID uint64 \`json:"campaign_id,omitempty"\`
}
`,
      "model/dsp/campaign/create.go",
    );
    const campaignApi = parseGoApiSource(
      `
package campaign
func Create(ctx context.Context, clt *core.SDKClient, accessToken string, req *campaign.CreateRequest) (uint64, error) {
  var resp campaign.CreateResponse
  if err := clt.Post(ctx, accessToken, req, &resp); err != nil {
    return 0, err
  }
  return resp.CampaignID, nil
}
`,
      "api/dsp/campaign/create.go",
      campaignModels.structs,
    );
    expect(campaignApi.functions[0]).toMatchObject({
      functionName: "Create",
      kind: "post",
      unwrap: "field",
      extractField: "campaign_id",
      responseType: "KuaishouId",
    });
  });

  test("parses GetBytes download as getBytes returning Uint8Array", () => {
    const api = parseGoApiSource(
      `
package asynctask
func Download(ctx context.Context, clt *core.SDKClient, accessToken string, req *asynctask.DownloadRequest) ([]byte, error) {
  return clt.GetBytes(ctx, accessToken, req)
}
`,
      "api/report/asynctask/download.go",
    );
    expect(api.functions[0]).toMatchObject({
      functionName: "Download",
      kind: "getBytes",
      responseType: "Uint8Array",
    });
  });

  test("parses oauth access token builder and authorize url", async () => {
    const models = parseGoModelSource(await readFile(`${goRoot}/model/oauth/access_token.go`, "utf8"), "model/oauth/access_token.go");
    const api = parseGoApiSource(await readFile(`${goRoot}/api/oauth/access_token.go`, "utf8"), "api/oauth/access_token.go", models.structs);
    expect(api.functions[0].buildsRequest).toEqual({
      type: "AccessTokenRequest",
      fields: [
        { jsonName: "app_id", source: "appId" },
        { jsonName: "secret", source: "secret" },
        { jsonName: "auth_code", source: "param", paramName: "authCode" },
      ],
    });

    const urlApi = parseGoApiSource(await readFile(`${goRoot}/api/oauth/url.go`, "utf8"), "api/oauth/url.go");
    expect(urlApi.functions[0]).toMatchObject({
      functionName: "Url",
      kind: "url",
      responseType: "string",
    });
  });

  test("parses get white list request", async () => {
    const spec = parseGoModelSource(await readFile(`${goRoot}/model/advertiser/white_list_request.go`, "utf8"), "model/advertiser/white_list_request.go");
    expect(spec.structs[0]).toMatchObject({
      name: "WhiteListRequest",
      requestKind: "get",
      url: "v1/advertiser/white_list",
    });
  });

  test("parses anonymous embedded structs", () => {
    const spec = parseGoModelSource(
      `
package report
type UnitReportRequest struct {
  ReportRequest
  CampaignIDs []uint64 \`json:"campaign_ids,omitempty"\`
}
func (r UnitReportRequest) Url() string { return "v1/report/unit_report" }
func (r UnitReportRequest) Encode() []byte { return nil }
`,
      "model/report/unit_report_request.go",
    );
    expect(spec.structs[0].embeddedTypes).toEqual(["ReportRequest"]);
    expect(spec.structs[0].fields).toEqual([{ goName: "CampaignIDs", jsonName: "campaign_ids", tsType: "KuaishouId[]" }]);
  });

  test("flattens embedded ReportRequest fields onto the outer request", () => {
    const reportRequest = parseGoModelSource(
      `
package report
type ReportRequest struct {
  AdvertiserID uint64 \`json:"advertiser_id,omitempty"\`
  StartDate string \`json:"start_date,omitempty"\`
  EndDate string \`json:"end_date,omitempty"\`
  Page int \`json:"page,omitempty"\`
  PageSize int \`json:"page_size,omitempty"\`
}
`,
      "model/report/report_request.go",
    );
    const unitReport = parseGoModelSource(
      `
package report
type UnitReportRequest struct {
  ReportRequest
  CampaignIDs []uint64 \`json:"campaign_ids,omitempty"\`
}
func (r UnitReportRequest) Url() string { return "v1/report/unit_report" }
func (r UnitReportRequest) Encode() []byte { return nil }
`,
      "model/report/unit_report_request.go",
    );
    flattenEmbeddedFields([reportRequest, unitReport]);
    const fields = unitReport.structs[0].fields.map((field) => field.jsonName);
    expect(fields).toEqual(["advertiser_id", "start_date", "end_date", "page", "page_size", "campaign_ids"]);
  });

  test("parses string enum without a struct", async () => {
    const spec = parseGoModelSource(await readFile(`${goRoot}/model/temporal_granularity.go`, "utf8"), "model/temporal_granularity.go");
    expect(spec.structs).toEqual([]);
    expect(spec.enums).toEqual([
      {
        name: "TemporalGranularityType",
        kind: "string",
        members: [
          { goName: "TemporalGranularityType_DAILY", tsName: "DAILY", value: "DAILY" },
          { goName: "TemporalGranularityType_HOURLY", tsName: "HOURLY", value: "HOURLY" },
        ],
      },
    ]);
  });
});
