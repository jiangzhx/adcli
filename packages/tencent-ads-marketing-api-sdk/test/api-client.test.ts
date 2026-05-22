import { describe, expect, test } from "bun:test";
import { ApiClient, ApiException, SDK_VERSION } from "../src/api/v3/client";

function jsonResponse(body: unknown, init: ResponseInit = {}) {
  const headers = new Headers(init.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  return new Response(JSON.stringify(body), {
    status: 200,
    ...init,
    headers,
  });
}

function rawJsonResponse(body: string, init: ResponseInit = {}) {
  const headers = new Headers(init.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  return new Response(body, {
    status: 200,
    ...init,
    headers,
  });
}

describe("ApiClient", () => {
  test("sets Tencent Ads compatible default headers", async () => {
    const requests: Request[] = [];
    const client = new ApiClient({
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ code: 0, data: {} });
      },
    });

    await client.request({ method: "GET", path: "/adgroups/get" });

    expect(requests[0].headers.get("User-Agent")).toBe("Tencent Ads Marketing API SDK");
    expect(requests[0].headers.get("X-Sdk-Language")).toBe("node");
    expect(requests[0].headers.get("X-Sdk-Version")).toBe(SDK_VERSION);
  });

  test("sets generated GET content negotiation headers", async () => {
    const requests: Request[] = [];
    const client = new ApiClient({
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ code: 0, data: {} });
      },
    });

    await client.request({ method: "GET", path: "/adgroups/get", contentType: "text/plain" });

    expect(requests[0].headers.get("Content-Type")).toBe("text/plain");
    expect(requests[0].headers.get("Accept")).toBe("application/json");
  });

  test("preserves the v3.0 base path for generated absolute API paths", async () => {
    const requests: Request[] = [];
    const client = new ApiClient({
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ code: 0, data: {} });
      },
    });

    await client.request({ method: "GET", path: "/advertiser/get" });

    expect(new URL(requests[0].url).pathname).toBe("/v3.0/advertiser/get");
  });

  test("adds Go SDK compatible auth query params after setAccessToken", async () => {
    const requests: Request[] = [];
    const client = new ApiClient({
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ code: 0, data: {} });
      },
    });

    client.setAccessToken("token-123").setUserToken("user-token");
    await client.request({ method: "GET", path: "/advertiser/get" });

    const url = new URL(requests[0].url);
    expect(url.searchParams.get("access_token")).toBe("token-123");
    expect(url.searchParams.get("timestamp")).toBeTruthy();
    expect(url.searchParams.get("nonce")?.length).toBe(20);
    expect(url.searchParams.get("user_token")).toBe("user-token");
  });

  test("serializes multi query params as JSON strings like Tencent Go SDK", async () => {
    const requests: Request[] = [];
    const client = new ApiClient({
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ code: 0, data: {} });
      },
    });

    await client.request({
      method: "GET",
      path: "/adgroups/get",
      queryParams: [{ name: "fields", value: ["adgroup_id", "adgroup_name"], collectionFormat: "multi" }],
    });

    expect(new URL(requests[0].url).searchParams.get("fields")).toBe('["adgroup_id","adgroup_name"]');
  });

  test("returns Tencent response data like Go SDK", async () => {
    const client = new ApiClient({
      fetch: async () => jsonResponse({ code: 0, data: { list: [{ adgroup_id: 123 }] } }),
    });

    const response = await client.request({ method: "GET", path: "/adgroups/get" });
    expect(response).toEqual({
      list: [{ adgroup_id: 123 }],
    });
  });

  test("throws ApiException for Tencent business errors like Go SDK", async () => {
    const client = new ApiClient({
      fetch: async () => jsonResponse({ code: 11002, message: "Access token is invalid.", message_cn: "您的access_token无效" }),
    });

    let thrown: unknown;
    try {
      await client.request({ method: "GET", path: "/adgroups/get" });
    } catch (error) {
      thrown = error;
    }

    expect(thrown).toBeInstanceOf(ApiException);
    expect((thrown as Error).message).toBe("Access token is invalid.");
    expect((thrown as ApiException).responseBody).toEqual({
      code: 11002,
      message: "Access token is invalid.",
      message_cn: "您的access_token无效",
    });
  });

  test("sends multipart form params and files", async () => {
    const requests: Request[] = [];
    const client = new ApiClient({
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ code: 0, data: {} });
      },
    });

    await client.request({
      method: "POST",
      path: "/images/add",
      contentType: "multipart/form-data",
      formParams: {
        account_id: "123",
        upload_type: "UPLOAD_TYPE_FILE",
        signature: "sig",
      },
      files: {
        file: new File(["image-bytes"], "image.png", { type: "image/png" }),
      },
    });

    expect(requests[0].headers.get("Content-Type")?.startsWith("multipart/form-data; boundary=")).toBe(true);
    const form = await requests[0].formData();
    expect(form.get("account_id")).toBe("123");
    const file = form.get("file");
    expect(file).toBeInstanceOf(File);
    expect((file as File).name).toBe("image.png");
    expect(await (file as File).text()).toBe("image-bytes");
  });

  test("preserves unsafe integer ids from JSON responses as strings", async () => {
    const client = new ApiClient({
      fetch: async () =>
        rawJsonResponse(
          '{"code":0,"data":{"list":[{"account_id":7641898034989400000,"adgroup_id":7641894773956215000,"safe_count":123}]}}',
        ),
    });

    const response = await client.request<{
      list: Array<{ account_id: string; adgroup_id: string; safe_count: number }>;
    }>({ method: "GET", path: "/adgroups/get" });

    expect(response.list[0].account_id).toBe("7641898034989400000");
    expect(response.list[0].adgroup_id).toBe("7641894773956215000");
    expect(response.list[0].safe_count).toBe(123);
  });

  test("throws ApiException on non-2xx responses", async () => {
    const client = new ApiClient({
      fetch: async () => jsonResponse({ code: 401, message: "invalid token" }, { status: 401 }),
    });

    await expect(client.request({ method: "GET", path: "/adgroups/get" })).rejects.toBeInstanceOf(ApiException);
  });
});
