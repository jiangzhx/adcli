import { describe, expect, test } from "bun:test";
import { emitApiFile, emitModelModule } from "../../src/tencent-ads/typescript-emitter";

describe("tencent ads typescript emitter", () => {
  test("emits request object API classes", () => {
    const output = emitApiFile([
      {
        className: "AdgroupsApi",
        methodName: "get",
        httpMethod: "GET",
        path: "/adgroups/get",
        responseType: "AdgroupsGetResponseData",
        params: [
          { name: "accountId", javaType: "LongString", required: true },
          { name: "fields", javaType: "Object", required: false },
        ],
        queryParams: [
          { name: "account_id", source: "request.accountId" },
          { name: "fields", source: "request.fields", collectionFormat: "multi" },
        ],
        formParams: [],
        fileParams: [],
        authNames: ["OAuth2"],
        accepts: ["application/json"],
        contentTypes: ["text/plain"],
      },
    ]);

    expect(output).toContain("export interface AdgroupsApiGetRequest");
    expect(output).toContain("accountId: number | string;");
    expect(output).toContain("fields?: unknown;");
    expect(output).toContain('path: "/adgroups/get"');
    expect(output).toContain('{ name: "fields", value: request.fields, collectionFormat: "multi" }');
  });

  test("emits multipart form and file request options", () => {
    const output = emitApiFile([
      {
        className: "CustomAudienceFilesApi",
        methodName: "add",
        httpMethod: "POST",
        path: "/custom_audience_files/add",
        responseType: "CustomAudienceFilesAddResponseData",
        params: [
          { name: "accountId", javaType: "LongString", required: true },
          { name: "file", javaType: "File", required: true },
        ],
        queryParams: [],
        formParams: [{ name: "account_id", source: "request.accountId" }],
        fileParams: [{ name: "file", source: "request.file" }],
        authNames: ["OAuth2"],
        accepts: ["application/json"],
        contentTypes: ["multipart/form-data"],
      },
    ]);

    expect(output).toContain("file: Blob;");
    expect(output).toContain('contentType: "multipart/form-data"');
    expect(output).toContain("formParams:");
    expect(output).toContain("files:");
  });

  test("emits model modules", () => {
    const output = emitModelModule({
      kind: "interface",
      name: "AdgroupsGetResponseData",
      fields: [{ jsonName: "list", javaName: "list", javaType: "List<AdgroupsGetListStruct>", required: false }],
    });
    expect(output).toContain('import type { AdgroupsGetListStruct } from "../models";');
    expect(output).toContain("list?: AdgroupsGetListStruct[];");
  });
});
