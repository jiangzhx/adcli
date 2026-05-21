import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { describe, expect, test } from "bun:test";
import { runPhaseAPort } from "../scripts/phase-a-port";

describe("phase-a-port workflow", () => {
  test("generates representative API, model, and manifest files", async () => {
    const root = mkdtempSync(join(tmpdir(), "oceanengine-java-sdk-"));
    const outDir = mkdtempSync(join(tmpdir(), "oceanengine-node-sdk-"));
    try {
      await mkdir(join(root, "src/main/java/com/bytedance/ads/api"), { recursive: true });
      await mkdir(join(root, "src/main/java/com/bytedance/ads/model"), { recursive: true });
      writeFileSync(
        join(root, "src/main/java/com/bytedance/ads/api/Oauth2AccessTokenApi.java"),
        `
public class Oauth2AccessTokenApi {
  public okhttp3.Call openApiOauth2AccessTokenPostCall(Oauth2AccessTokenRequest oauth2AccessTokenRequest, final ApiCallback _callback) throws ApiException {
    Object localVarPostBody = oauth2AccessTokenRequest;
    String localVarPath = "/open_api/oauth2/access_token/";
    final String[] localVarAccepts = { "application/json" };
    final String[] localVarContentTypes = { "application/json" };
    String[] localVarAuthNames = new String[] { "ApiKeyAuth" };
    return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
  }
  public Oauth2AccessTokenResponse openApiOauth2AccessTokenPost(Oauth2AccessTokenRequest oauth2AccessTokenRequest) throws ApiException {
    ApiResponse<Oauth2AccessTokenResponse> localVarResp = openApiOauth2AccessTokenPostWithHttpInfo(oauth2AccessTokenRequest);
    return localVarResp.getData();
  }
  public ApiResponse<Oauth2AccessTokenResponse> openApiOauth2AccessTokenPostWithHttpInfo(Oauth2AccessTokenRequest oauth2AccessTokenRequest) throws ApiException {
    Type localVarReturnType = new TypeToken<Oauth2AccessTokenResponse>(){}.getType();
    return localVarApiClient.execute(localVarCall, localVarReturnType);
  }
}`,
      );
      writeFileSync(
        join(root, "src/main/java/com/bytedance/ads/model/Oauth2AccessTokenRequest.java"),
        `
public class Oauth2AccessTokenRequest {
  public static final String SERIALIZED_NAME_AUTH_CODE = "auth_code";
  @SerializedName(SERIALIZED_NAME_AUTH_CODE)
  private String authCode = null;
  static { openapiRequiredFields.add("auth_code"); }
}`,
      );
      writeFileSync(
        join(root, "src/main/java/com/bytedance/ads/model/Oauth2AccessTokenResponse.java"),
        `
public class Oauth2AccessTokenResponse {
  public static final String SERIALIZED_NAME_CODE = "code";
  @SerializedName(SERIALIZED_NAME_CODE)
  private Long code = null;
}`,
      );

      const result = await runPhaseAPort({
        javaSdkRoot: root,
        outputDir: outDir,
        apiFiles: ["Oauth2AccessTokenApi.java"],
        modelFiles: ["Oauth2AccessTokenRequest.java", "Oauth2AccessTokenResponse.java"],
      });

      expect(result.apis).toBe(1);
      expect(result.models).toBe(2);
      expect(readFileSync(join(outDir, "apis.ts"), "utf8")).toContain('export * from "./apis/Oauth2AccessTokenApi";');
      expect(readFileSync(join(outDir, "apis", "Oauth2AccessTokenApi.ts"), "utf8")).toContain("export class Oauth2AccessTokenApi");
      expect(readFileSync(join(outDir, "models.ts"), "utf8")).toContain('export * from "./models/Oauth2AccessTokenRequest";');
      expect(readFileSync(join(outDir, "models", "Oauth2AccessTokenRequest.ts"), "utf8")).toContain(
        "export interface Oauth2AccessTokenRequest",
      );
      const manifest = JSON.parse(readFileSync(join(outDir, "manifest.json"), "utf8")) as Record<string, unknown>;
      expect(manifest.phase).toBe("A");
      expect("javaSdkRoot" in manifest).toBe(false);
      expect("outputDir" in manifest).toBe(false);
      expect(readFileSync(join(outDir, "apis", "Oauth2AccessTokenApi.ts"), "utf8")).not.toContain(root);
    } finally {
      await rm(root, { recursive: true, force: true });
      await rm(outDir, { recursive: true, force: true });
    }
  });
});
