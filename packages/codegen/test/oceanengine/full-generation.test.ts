import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { describe, expect, test } from "bun:test";
import { generateFromJavaSdk } from "../../scripts/oceanengine/generate-from-java-sdk";

describe("full generation workflow", () => {
  test("scans api and model directories by default", async () => {
    const root = mkdtempSync(join(tmpdir(), "oceanengine-java-sdk-full-"));
    const outDir = mkdtempSync(join(tmpdir(), "oceanengine-node-sdk-full-"));
    try {
      await mkdir(join(root, "src/main/java/com/bytedance/ads/api"), { recursive: true });
      await mkdir(join(root, "src/main/java/com/bytedance/ads/model"), { recursive: true });
      writeFileSync(
        join(root, "src/main/java/com/bytedance/ads/api/TestOneApi.java"),
        apiSource("TestOneApi", "openApiTestOneGet", "/open_api/test/one/", "GET", "TestOneResponse"),
      );
      writeFileSync(
        join(root, "src/main/java/com/bytedance/ads/api/TestTwoApi.java"),
        apiSource("TestTwoApi", "openApiTestTwoPost", "/open_api/test/two/", "POST", "TestTwoResponse"),
      );
      writeFileSync(
        join(root, "src/main/java/com/bytedance/ads/api/CommonReqApi.java"),
        `
public class CommonReqApi {
  public Object commonReq(String path, String method) throws ApiException {
    return commonReqWithHttpInfo(path, method).getData();
  }
}`,
      );
      writeFileSync(join(root, "src/main/java/com/bytedance/ads/model/TestOneResponse.java"), modelSource("TestOneResponse"));
      writeFileSync(join(root, "src/main/java/com/bytedance/ads/model/TestTwoResponse.java"), modelSource("TestTwoResponse"));
      writeFileSync(
        join(root, "src/main/java/com/bytedance/ads/model/AbstractOpenApiSchema.java"),
        `
public abstract class AbstractOpenApiSchema {
  private Object instance;
  private Boolean isNullable;
  private String schemaType;
}`,
      );

      const result = await generateFromJavaSdk({ javaSdkRoot: root, outputDir: outDir });

      expect(result.phase).toBe("B");
      expect(result.apis).toBe(2);
      expect(result.specialApis).toEqual([{ file: "api/CommonReqApi.java", coverage: "src/runtime/CommonReqApi.ts" }]);
      expect(result.models).toBe(3);
      expect(result.skipped).toEqual([]);
      expect(readFileSync(join(outDir, "apis.ts"), "utf8")).toContain('export * from "./apis/TestOneApi";');
      expect(readFileSync(join(outDir, "apis", "TestOneApi.ts"), "utf8")).toContain("export class TestOneApi");
      expect(readFileSync(join(outDir, "apis.ts"), "utf8")).not.toContain("export class CommonReqApi");
      expect(readFileSync(join(outDir, "models.ts"), "utf8")).toContain('export * from "./models/AbstractOpenApiSchema";');
      expect(readFileSync(join(outDir, "models", "AbstractOpenApiSchema.ts"), "utf8")).toContain(
        "export interface AbstractOpenApiSchema",
      );
      const manifest = JSON.parse(readFileSync(join(outDir, "manifest.json"), "utf8")) as Record<string, unknown>;
      expect(manifest.phase).toBe("B");
      expect("javaSdkRoot" in manifest).toBe(false);
      expect("outputDir" in manifest).toBe(false);
      expect(readFileSync(join(outDir, "apis", "TestOneApi.ts"), "utf8")).not.toContain(root);
    } finally {
      await rm(root, { recursive: true, force: true });
      await rm(outDir, { recursive: true, force: true });
    }
  });
});

function apiSource(className: string, methodName: string, path: string, method: string, responseType: string) {
  return `
public class ${className} {
  public okhttp3.Call ${methodName}Call(final ApiCallback _callback) throws ApiException {
    Object localVarPostBody = null;
    String localVarPath = "${path}";
    final String[] localVarAccepts = { "application/json" };
    final String[] localVarContentTypes = { };
    String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
    return localVarApiClient.buildCall(basePath, localVarPath, "${method}", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
  }
  public ${responseType} ${methodName}() throws ApiException {
    ApiResponse<${responseType}> localVarResp = ${methodName}WithHttpInfo();
    return localVarResp.getData();
  }
  public ApiResponse<${responseType}> ${methodName}WithHttpInfo() throws ApiException {
    Type localVarReturnType = new TypeToken<${responseType}>(){}.getType();
    return localVarApiClient.execute(localVarCall, localVarReturnType);
  }
}`;
}

function modelSource(className: string) {
  return `
public class ${className} {
  public static final String SERIALIZED_NAME_CODE = "code";
  @SerializedName(SERIALIZED_NAME_CODE)
  private Long code = null;
}`;
}
