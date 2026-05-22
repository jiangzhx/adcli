import { describe, expect, test } from "bun:test";
import { emitApiClass, emitModel } from "../../src/oceanengine/typescript-emitter";
import type { JavaApiSpec, JavaModelSpec } from "../../src/oceanengine/java-parser";

describe("typescript emitter", () => {
  test("emits API class with required checks, query params, and request call", () => {
    const spec: JavaApiSpec = {
      className: "ReportCustomConfigGetV30Api",
      methodName: "openApiV30ReportCustomConfigGetGet",
      httpMethod: "GET",
      path: "/open_api/v3.0/report/custom/config/get/",
      responseType: "ReportCustomConfigGetV30Response",
      params: [
        { javaType: "Long", name: "advertiserId", required: true },
        { javaType: "List<ReportCustomConfigGetV30DataTopics>", name: "dataTopics", required: true },
      ],
      queryParams: [
        { name: "advertiser_id", source: "advertiserId" },
        { name: "data_topics", source: "dataTopics", collectionFormat: "csv" },
      ],
      formParams: [],
      authNames: ["ApiKeyAuth"],
      accepts: ["application/json"],
      contentTypes: [],
    };

    const output = emitApiClass(spec);

    expect(output).toContain("export class ReportCustomConfigGetV30Api");
    expect(output).toContain("ReportCustomConfigGetV30DataTopics");
    expect(output).toContain("ReportCustomConfigGetV30Response");
    expect(output).toContain("openApiV30ReportCustomConfigGetGet(");
    expect(output).toContain("advertiserId: number");
    expect(output).toContain("dataTopics: ReportCustomConfigGetV30DataTopics[]");
    expect(output).toContain("Missing the required parameter 'advertiserId'");
    expect(output).toContain('path: "/open_api/v3.0/report/custom/config/get/"');
    expect(output).toContain('{ name: "data_topics", value: dataTopics, collectionFormat: "csv" }');
  });

  test("emits interface model with serialized JSON fields", () => {
    const spec: JavaModelSpec = {
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
    const spec: JavaModelSpec = {
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
    const spec: JavaModelSpec = {
      kind: "abstractSchema",
      name: "AbstractOpenApiSchema",
    };

    const output = emitModel(spec);

    expect(output).toContain("export interface AbstractOpenApiSchema");
    expect(output).toContain("instance?: unknown;");
    expect(output).toContain("is_nullable?: boolean;");
    expect(output).toContain("schema_type?: string;");
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
      authNames: ["ApiKeyAuth"],
      accepts: ["application/octet-stream"],
      contentTypes: [],
    });

    expect(output).toContain("Promise<ArrayBuffer>");
    expect(output).not.toContain("byte[]");
  });
});
