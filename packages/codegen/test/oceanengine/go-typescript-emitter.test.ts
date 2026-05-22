import { describe, expect, test } from "bun:test";
import { emitApiClass } from "../../src/oceanengine/typescript-emitter";

describe("go request object TypeScript emitter", () => {
  test("emits request object method signatures with optional properties", () => {
    const output = emitApiClass(
      {
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
          { name: "data_topics", source: "request.dataTopics", collectionFormat: "csv" },
          { name: "page", source: "request.page" },
        ],
        formParams: [],
        authNames: [],
        accepts: ["application/json"],
        contentTypes: [],
      },
      { parameterStyle: "requestObject", runtimePrefix: "../runtime", modelsModule: "../models" },
    );

    expect(output).toContain("export interface OpenApiV30ReportCustomConfigGetGetRequest");
    expect(output).toContain("advertiserId: number | string;");
    expect(output).toContain("dataTopics: ReportCustomConfigGetV30DataTopics[];");
    expect(output).toContain("page?: number;");
    expect(output).toContain(
      "async openApiV30ReportCustomConfigGetGet(request: OpenApiV30ReportCustomConfigGetGetRequest): Promise<ReportCustomConfigGetV30Response>",
    );
    expect(output).toContain("if (request.advertiserId == null)");
    expect(output).toContain('{ name: "page", value: request.page }');
  });
});
