import { describe, expect, test } from "bun:test";
import { emitApiClass, emitModel } from "../../src/oceanengine/typescript-emitter";
import type { ApiSpec, ModelSpec } from "../../src/oceanengine/spec";

describe("typescript emitter", () => {
  test("emits API class with required checks, query params, and request call", () => {
    const spec: ApiSpec = {
      className: "ReportCustomConfigGetV30Api",
      methodName: "openApiV30ReportCustomConfigGetGet",
      httpMethod: "GET",
      path: "/open_api/v3.0/report/custom/config/get/",
      responseType: "ReportCustomConfigGetV30Response",
      params: [
        { javaType: "LongString", name: "advertiserId", required: true },
        { javaType: "List<ReportCustomConfigGetV30DataTopics>", name: "dataTopics", required: true },
        { javaType: "Integer", name: "page", required: false },
      ],
      queryParams: [
        { name: "advertiser_id", source: "request.advertiserId" },
        { name: "data_topics", source: "request.dataTopics" },
        { name: "page", source: "request.page" },
      ],
      formParams: [],
      fileParams: [],
      authNames: ["ApiKeyAuth"],
      accepts: ["application/json"],
      contentTypes: [],
      checks: [
        { kind: "required", paramName: "advertiserId", message: "advertiserId is required and must be specified" },
        { kind: "number", paramName: "advertiserId", operator: "<", value: "1", message: "advertiserId must be greater than 1" },
        { kind: "required", paramName: "dataTopics", message: "dataTopics is required and must be specified" },
        { kind: "length", paramName: "dataTopics", operator: "<", value: "1", message: "dataTopics must have at least 1 elements" },
      ],
    };

    const output = emitApiClass(spec);

    expect(output).toContain("export class ReportCustomConfigGetV30Api");
    expect(output).toContain("export interface ReportCustomConfigGetV30ApiOpenApiV30ReportCustomConfigGetGetRequest");
    expect(output).toContain("ReportCustomConfigGetV30DataTopics");
    expect(output).toContain("ReportCustomConfigGetV30Response");
    expect(output).toContain("openApiV30ReportCustomConfigGetGet(request:");
    expect(output).toContain("advertiserId: number | string");
    expect(output).toContain("dataTopics: ReportCustomConfigGetV30DataTopics[]");
    expect(output).toContain("page?: number;");
    expect(output).toContain(
      "async openApiV30ReportCustomConfigGetGet(request: ReportCustomConfigGetV30ApiOpenApiV30ReportCustomConfigGetGetRequest): Promise<ReportCustomConfigGetV30Response>",
    );
    expect(output).toContain("if (request.advertiserId == null)");
    expect(output).toContain("advertiserId is required and must be specified");
    expect(output).toContain("if (request.advertiserId != null && Number(request.advertiserId) < 1)");
    expect(output).toContain("advertiserId must be greater than 1");
    expect(output).toContain("if (request.dataTopics != null && request.dataTopics.length < 1)");
    expect(output).toContain("dataTopics must have at least 1 elements");
    expect(output).toContain('path: "/open_api/v3.0/report/custom/config/get/"');
    expect(output).toContain('{ name: "data_topics", value: request.dataTopics }');
    expect(output).toContain('{ name: "page", value: request.page }');
  });

  test("emits interface model with serialized JSON fields", () => {
    const spec: ModelSpec = {
      kind: "interface",
      name: "Oauth2AccessTokenRequest",
      fields: [
        { jsonName: "app_id", javaName: "appId", javaType: "Long", required: false },
        { jsonName: "7d_retention", javaName: "retention", javaType: "Long", required: false },
        { jsonName: "auth_code", javaName: "authCode", javaType: "String", required: true },
      ],
    };

    const output = emitModel(spec);

    expect(output).toContain("export interface Oauth2AccessTokenRequest");
    expect(output).toContain("app_id?: number;");
    expect(output).toContain('"7d_retention"?: number;');
    expect(output).toContain("auth_code: string;");
  });

  test("emits const enum model", () => {
    const spec: ModelSpec = {
      kind: "enum",
      name: "ReportCustomConfigGetV30DataTopics",
      values: [{ key: "BASIC_DATA", value: "BASIC_DATA" }],
    };

    const output = emitModel(spec);

    expect(output).toContain("export const ReportCustomConfigGetV30DataTopics");
    expect(output).toContain('BASIC_DATA: "BASIC_DATA"');
    expect(output).toContain("export type ReportCustomConfigGetV30DataTopics =");
  });

  test("emits AbstractOpenApiSchema internal model", () => {
    const spec: ModelSpec = {
      kind: "abstractSchema",
      name: "AbstractOpenApiSchema",
    };

    const output = emitModel(spec);

    expect(output).toContain("export interface AbstractOpenApiSchema");
    expect(output).toContain("instance?: unknown;");
    expect(output).toContain("is_nullable?: boolean;");
    expect(output).toContain("schema_type?: string;");
  });

  test("wraps union array element types", () => {
    const output = emitApiClass({
      className: "PromotionRejectReasonGetV30Api",
      methodName: "openApiV30PromotionRejectReasonGetGet",
      httpMethod: "GET",
      path: "/open_api/v3.0/promotion/reject_reason/get/",
      responseType: "PromotionRejectReasonGetV30Response",
      params: [{ javaType: "List<LongString>", name: "promotionIds", required: true }],
      queryParams: [{ name: "promotion_ids", source: "request.promotionIds" }],
      formParams: [],
      fileParams: [],
      authNames: ["ApiKeyAuth"],
      accepts: ["application/json"],
      contentTypes: [],
      checks: [
        { kind: "required", paramName: "promotionIds", message: "promotionIds is required and must be specified" },
        { kind: "length", paramName: "promotionIds", operator: "<", value: "1", message: "promotionIds must have at least 1 elements" },
      ],
    });

    expect(output).toContain("promotionIds: (number | string)[];");
    expect(output).toContain("request.promotionIds.length < 1");
    expect(output).not.toContain("promotionIds: number | string[];");
  });

  test("maps byte array responses to ArrayBuffer", () => {
    const output = emitApiClass({
      className: "AsyncTaskDownloadV2Api",
      methodName: "openApi2AsyncTaskDownloadGet",
      httpMethod: "GET",
      path: "/open_api/2/async_task/download/",
      responseType: "byte[]",
      params: [],
      queryParams: [],
      formParams: [],
      fileParams: [],
      authNames: ["ApiKeyAuth"],
      accepts: ["application/octet-stream"],
      contentTypes: [],
    });

    expect(output).toContain("Promise<ArrayBuffer>");
    expect(output).toContain('responseType: "arrayBuffer"');
    expect(output).not.toContain("byte[]");
  });

  test("emits multipart form and file request options", () => {
    const output = emitApiClass({
      className: "FileVideoAgentV2Api",
      methodName: "openApi2FileVideoAgentPost",
      httpMethod: "POST",
      path: "/open_api/2/file/video/agent/",
      responseType: "FileVideoAgentV2Response",
      params: [
        { javaType: "LongString", name: "agentId", required: true },
        { javaType: "String", name: "fileName", required: true },
        { javaType: "File", name: "videoFile", required: false },
      ],
      queryParams: [],
      formParams: [
        { name: "agent_id", source: "request.agentId" },
        { name: "file_name", source: "request.fileName" },
      ],
      fileParams: [{ name: "video_file", source: "request.videoFile" }],
      authNames: ["ApiKeyAuth"],
      accepts: ["application/json"],
      contentTypes: ["multipart/form-data"],
    });

    expect(output).toContain('contentType: "multipart/form-data"');
    expect(output).toContain('formParams: {');
    expect(output).toContain('agent_id: request.agentId');
    expect(output).toContain('file_name: request.fileName');
    expect(output).toContain('files: {');
    expect(output).toContain('video_file: request.videoFile');
  });
});
