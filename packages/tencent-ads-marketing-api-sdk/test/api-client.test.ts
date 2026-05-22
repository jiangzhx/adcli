import { describe, expect, test } from "bun:test";
import { ApiClient, SDK_VERSION } from "../src/runtime/ApiClient";
import { ApiException } from "../src/runtime/ApiException";

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

  test("serializes multi query params as repeated keys", async () => {
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

    expect(new URL(requests[0].url).searchParams.getAll("fields")).toEqual(["adgroup_id", "adgroup_name"]);
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
      data: { list: Array<{ account_id: string; adgroup_id: string; safe_count: number }> };
    }>({ method: "GET", path: "/adgroups/get" });

    expect(response.data.list[0].account_id).toBe("7641898034989400000");
    expect(response.data.list[0].adgroup_id).toBe("7641894773956215000");
    expect(response.data.list[0].safe_count).toBe(123);
  });

  test("throws ApiException on non-2xx responses", async () => {
    const client = new ApiClient({
      fetch: async () => jsonResponse({ code: 401, message: "invalid token" }, { status: 401 }),
    });

    await expect(client.request({ method: "GET", path: "/adgroups/get" })).rejects.toBeInstanceOf(ApiException);
  });
});
