import { describe, expect, test } from "bun:test";
import { emitApiFile, emitModelFile } from "../../src/kuaishou/typescript-emitter";
import { buildTypeRegistry } from "../../src/kuaishou/type-registry";

describe("kuaishou typescript emitter", () => {
  test("emits post request class and info API", () => {
    const model = emitModelFile({
      packageName: "advertiser",
      relativePath: "model/advertiser/info_request.go",
      structs: [
        {
          name: "InfoRequest",
          requestKind: "post",
          url: "v1/advertiser/info",
          fields: [{ goName: "AdvertiserID", jsonName: "advertiser_id", tsType: "KuaishouId" }],
        },
      ],
    });
    expect(model).toContain("export class InfoRequest implements PostRequest, InfoRequestInit");
    expect(model).toContain("path()");
    expect(model).toContain('return "v1/advertiser/info"');

    const api = emitApiFile({
      packageName: "advertiser",
      relativePath: "api/advertiser/info.go",
      modelImport: "advertiser",
      functions: [
        {
          functionName: "Info",
          tsName: "info",
          kind: "post",
          params: [
            { goName: "accessToken", tsName: "accessToken", tsType: "string", role: "accessToken" },
            { goName: "advertiserID", tsName: "advertiserID", tsType: "KuaishouId", role: "scalar" },
          ],
          responseType: "Info",
          unwrap: "object",
          requestType: "InfoRequest",
          requestInitType: "InfoRequestInit",
          buildsRequest: {
            type: "InfoRequest",
            fields: [{ jsonName: "advertiser_id", source: "param", paramName: "advertiserID" }],
          },
        },
      ],
    });
    expect(api).toContain("export async function info");
    expect(api).toContain("export { info as Info }");
    expect(api).toContain("advertiser_id: advertiserID");
    expect(api).toContain("client.post<Info>");
    expect(api).toContain('from "../../core/index"');
    expect(api).toContain('from "../../model/advertiser/index"');
  });

  test("imports array unwrap types and falls back to empty array", () => {
    const api = emitApiFile({
      packageName: "unit",
      relativePath: "api/dsp/unit/get_monitor_urls.go",
      modelImport: "dsp/unit",
      functions: [
        {
          functionName: "GetMonitorURLs",
          tsName: "getMonitorURLs",
          kind: "post",
          params: [
            { goName: "accessToken", tsName: "accessToken", tsType: "string", role: "accessToken" },
            { goName: "req", tsName: "req", tsType: "GetMonitorURLsRequest | GetMonitorURLsRequestInit", role: "request" },
          ],
          responseType: "UnitMonitorURL[]",
          unwrap: "field",
          extractField: "unit_monitor_urls",
          requestType: "GetMonitorURLsRequest",
          requestInitType: "GetMonitorURLsRequestInit",
        },
      ],
    });

    expect(api).toContain("import { GetMonitorURLsRequest, GetMonitorURLsRequestInit, UnitMonitorURL } from");
    expect(api).toContain('from "../../../model/dsp/unit/index"');
    expect(api).toContain("return resp.unit_monitor_urls ?? []");
  });

  test("imports sibling model types instead of leaving bare names", () => {
    const registry = buildTypeRegistry([
      {
        packageName: "campaign",
        relativePath: "model/dsp/campaign/campaign.go",
        structs: [
          {
            name: "Campaign",
            requestKind: "none",
            fields: [{ goName: "CampaignID", jsonName: "campaign_id", tsType: "KuaishouId" }],
          },
          {
            name: "AutoBuildNameRule",
            requestKind: "none",
            fields: [{ goName: "UnitNameRule", jsonName: "unit_name_rule", tsType: "string" }],
          },
        ],
      },
      {
        packageName: "campaign",
        relativePath: "model/dsp/campaign/create.go",
        structs: [
          {
            name: "CreateRequest",
            requestKind: "post",
            url: "gw/dsp/campaign/create",
            fields: [
              { goName: "AdvertiserID", jsonName: "advertiser_id", tsType: "KuaishouId" },
              { goName: "AutoBuildNameRule", jsonName: "auto_build_name_rule", tsType: "AutoBuildNameRule" },
            ],
          },
        ],
      },
    ]);

    const model = emitModelFile(
      {
        packageName: "campaign",
        relativePath: "model/dsp/campaign/create.go",
        structs: [
          {
            name: "CreateRequest",
            requestKind: "post",
            url: "gw/dsp/campaign/create",
            fields: [
              { goName: "AdvertiserID", jsonName: "advertiser_id", tsType: "KuaishouId" },
              { goName: "AutoBuildNameRule", jsonName: "auto_build_name_rule", tsType: "AutoBuildNameRule" },
            ],
          },
        ],
      },
      { typeRegistry: registry },
    );

    expect(model).toContain('import type { AutoBuildNameRule } from "./campaign";');
    expect(model).not.toContain("from \"./index\"");
  });

  test("emits string enum as const object and type", () => {
    const model = emitModelFile({
      packageName: "model",
      relativePath: "model/temporal_granularity.go",
      structs: [],
      enums: [
        {
          name: "TemporalGranularityType",
          kind: "string",
          members: [
            { goName: "TemporalGranularityType_DAILY", tsName: "DAILY", value: "DAILY" },
            { goName: "TemporalGranularityType_HOURLY", tsName: "HOURLY", value: "HOURLY" },
          ],
        },
      ],
    });

    expect(model).toContain("export const TemporalGranularityType");
    expect(model).toContain('DAILY: "DAILY"');
    expect(model).toContain("export type TemporalGranularityType");
    expect(model).not.toContain("jsonMarshal");
  });

  test("keeps json url field and exposes path() for the endpoint", () => {
    const model = emitModelFile({
      packageName: "unit",
      relativePath: "model/dsp/unit/create.go",
      structs: [
        {
          name: "CreateRequest",
          requestKind: "post",
          url: "gw/dsp/unit/create",
          fields: [
            { goName: "AdvertiserID", jsonName: "advertiser_id", tsType: "KuaishouId" },
            { goName: "URL", jsonName: "url", tsType: "string" },
          ],
        },
      ],
    });

    expect(model).toContain("  url?: string;");
    expect(model).toContain("  path() {");
    expect(model).toContain('return "gw/dsp/unit/create"');
  });

  test("imports jsonMarshal for get requests that encode array fields", () => {
    const model = emitModelFile({
      packageName: "oauth",
      relativePath: "model/oauth/url_request.go",
      structs: [
        {
          name: "UrlRequest",
          requestKind: "get",
          url: "tools/authorize",
          fields: [{ goName: "Scope", jsonName: "scope", tsType: "string[]" }],
        },
      ],
    });

    expect(model).toContain("jsonMarshal");
    expect(model).toContain("encodeQuery");
  });

  test("does not import jsonMarshal for response-only structs", () => {
    const model = emitModelFile({
      packageName: "campaign",
      relativePath: "model/dsp/campaign/campaign.go",
      structs: [
        {
          name: "Campaign",
          requestKind: "none",
          fields: [{ goName: "DayBudgetSchedule", jsonName: "day_budget_schedule", tsType: "number[]" }],
        },
      ],
    });

    expect(model).not.toContain("jsonMarshal");
  });

  test("passes extra success codes through to the client call", () => {
    const api = emitApiFile({
      packageName: "oauth",
      relativePath: "api/oauth/approval_list.go",
      modelImport: "oauth",
      functions: [
        {
          functionName: "ApprovalList",
          tsName: "approvalList",
          kind: "post",
          params: [
            { goName: "accessToken", tsName: "accessToken", tsType: "string", role: "accessToken" },
            { goName: "pageNo", tsName: "pageNo", tsType: "number", role: "scalar" },
          ],
          responseType: "ApprovalListResponse",
          unwrap: "object",
          requestType: "ApprovalListRequest",
          requestInitType: "ApprovalListRequestInit",
          buildsRequest: {
            type: "ApprovalListRequest",
            fields: [{ jsonName: "page_no", source: "param", paramName: "pageNo" }],
          },
          successCodes: [0, 1],
        },
      ],
    });

    expect(api).toContain("successCodes: [0, 1]");
    expect(api).toContain('from "../../core/index"');
    expect(api).toContain('from "../../model/oauth/index"');
  });

  test("imports MatchType from runtime types", () => {
    const model = emitModelFile({
      packageName: "report",
      relativePath: "model/report/stat.go",
      structs: [
        {
          name: "Stat",
          requestKind: "none",
          fields: [
            { goName: "MatchType", jsonName: "match_type", tsType: "MatchType" },
            { goName: "CampaignID", jsonName: "campaign_id", tsType: "KuaishouId" },
          ],
        },
      ],
    });

    expect(model).toContain("import type { KuaishouId, MatchType }");
    expect(model).not.toContain("jsonMarshal");
  });

  test("emits upload fields instead of json body", () => {
    const model = emitModelFile({
      packageName: "file",
      relativePath: "model/file/ad_video_upload_v1.go",
      structs: [
        {
          name: "AdVideoUploadRequestV1",
          requestKind: "upload",
          url: "v1/file/ad/video/upload",
          fields: [
            { goName: "AdvertiserID", jsonName: "advertiser_id", tsType: "KuaishouId" },
            { goName: "File", jsonName: "file", tsType: "UploadField" },
          ],
        },
      ],
    });

    expect(model).toContain("import type { UploadRequest, UploadField }");
    expect(model).toContain("const fields: UploadField[] = []");
    expect(model).not.toContain("jsonMarshal");
  });

  test("emits getBytes without importing Uint8Array from models", () => {
    const api = emitApiFile({
      packageName: "asynctask",
      relativePath: "api/report/asynctask/download.go",
      modelImport: "report/asynctask",
      functions: [
        {
          functionName: "Download",
          tsName: "download",
          kind: "getBytes",
          params: [
            { goName: "accessToken", tsName: "accessToken", tsType: "string", role: "accessToken" },
            { goName: "req", tsName: "req", tsType: "DownloadRequest | DownloadRequestInit", role: "request" },
          ],
          responseType: "Uint8Array",
          unwrap: "object",
          requestType: "DownloadRequest",
          requestInitType: "DownloadRequestInit",
        },
      ],
    });

    expect(api).toContain("client.getBytes");
    expect(api).toContain("Promise<Uint8Array>");
    expect(api).not.toContain("Uint8Array } from");
  });
});
