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
  test("sets Go SDK compatible default headers", async () => {
    const requests: Request[] = [];
    const client = new ApiClient({
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ ok: true });
      },
    });

    await client.request({ method: "GET", path: "/open_api/test/" });

    expect(requests).toHaveLength(1);
    expect(requests[0].headers.get("User-Agent")).toBe("Bytedance Ads Openapi SDK");
    expect(requests[0].headers.get("X-Sdk-Language")).toBe("node");
    expect(requests[0].headers.get("X-Sdk-Version")).toBe(SDK_VERSION);
  });

  test("sends Access-Token after setAccessToken", async () => {
    const requests: Request[] = [];
    const client = new ApiClient({
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ ok: true });
      },
    });

    client.setAccessToken("token-123");
    await client.request({ method: "GET", path: "/open_api/test/" });

    expect(requests[0].headers.get("Access-Token")).toBe("token-123");
  });

  test("serializes scalar and csv query params like Java ApiClient", async () => {
    const requests: Request[] = [];
    const client = new ApiClient({
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ ok: true });
      },
    });

    await client.request({
      method: "GET",
      path: "/open_api/v3.0/report/custom/config/get/",
      queryParams: [
        { name: "advertiser_id", value: 123 },
        { name: "data_topics", value: ["BASIC_DATA", "CREATIVE_DATA"], collectionFormat: "csv" },
      ],
    });

    const url = new URL(requests[0].url);
    expect(url.pathname).toBe("/open_api/v3.0/report/custom/config/get/");
    expect(url.searchParams.get("advertiser_id")).toBe("123");
    expect(url.searchParams.get("data_topics")).toBe("BASIC_DATA,CREATIVE_DATA");
  });

  test("serializes multi query params as repeated keys", async () => {
    const requests: Request[] = [];
    const client = new ApiClient({
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ ok: true });
      },
    });

    await client.request({
      method: "GET",
      path: "/open_api/test/",
      queryParams: [{ name: "ids", value: [1, 2], collectionFormat: "multi" }],
    });

    expect(new URL(requests[0].url).searchParams.getAll("ids")).toEqual(["1", "2"]);
  });

  test("serializes object query params as JSON strings for filtering", async () => {
    const requests: Request[] = [];
    const client = new ApiClient({
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ ok: true });
      },
    });

    await client.request({
      method: "GET",
      path: "/open_api/v3.0/project/list/",
      queryParams: [{ name: "filtering", value: { ids: [123], status_first: "PROJECT_STATUS_ENABLE" } }],
    });

    expect(new URL(requests[0].url).searchParams.get("filtering")).toBe(
      JSON.stringify({ ids: [123], status_first: "PROJECT_STATUS_ENABLE" }),
    );
  });

  test("sends JSON body for POST requests", async () => {
    const requests: Request[] = [];
    const client = new ApiClient({
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ ok: true });
      },
    });

    await client.request({
      method: "POST",
      path: "/open_api/oauth2/access_token/",
      body: { auth_code: "code", secret: "secret" },
    });

    expect(requests[0].headers.get("Content-Type")).toBe("application/json");
    expect(await requests[0].text()).toBe(JSON.stringify({ auth_code: "code", secret: "secret" }));
  });

  test("sends multipart form params and files", async () => {
    const requests: Request[] = [];
    const client = new ApiClient({
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ ok: true });
      },
    });

    await client.request({
      method: "POST",
      path: "/open_api/2/file/video/agent/",
      contentType: "multipart/form-data",
      formParams: {
        agent_id: "1860166068834571",
        file_name: "video.mp4",
        is_need_auth: true,
      },
      files: {
        video_file: new File(["video-bytes"], "video.mp4", { type: "video/mp4" }),
      },
    });

    expect(requests[0].headers.get("Content-Type")?.startsWith("multipart/form-data; boundary=")).toBe(true);
    const form = await requests[0].formData();
    expect(form.get("agent_id")).toBe("1860166068834571");
    expect(form.get("file_name")).toBe("video.mp4");
    expect(form.get("is_need_auth")).toBe("true");
    const file = form.get("video_file");
    expect(file).toBeInstanceOf(File);
    expect((file as File).name).toBe("video.mp4");
    expect(await (file as File).text()).toBe("video-bytes");
  });

  test("returns ArrayBuffer responses when requested", async () => {
    const client = new ApiClient({
      fetch: async () =>
        new Response(new Uint8Array([1, 2, 3]), {
          headers: { "Content-Type": "application/octet-stream" },
        }),
    });

    const response = await client.request<ArrayBuffer>({
      method: "GET",
      path: "/open_api/2/async_task/download/",
      responseType: "arrayBuffer",
    });

    expect(response).toBeInstanceOf(ArrayBuffer);
    expect([...new Uint8Array(response)]).toEqual([1, 2, 3]);
  });

  test("returns response data with http info", async () => {
    const client = new ApiClient({
      fetch: async () => jsonResponse({ code: 0, message: "OK", data: { id: 1 } }, { headers: { "x-trace-id": "trace-1" } }),
    });

    const response = await client.requestWithHttpInfo<{ code: number; data: { id: number } }>({
      method: "GET",
      path: "/open_api/test/",
    });

    expect(response.statusCode).toBe(200);
    expect(response.headers.get("x-trace-id")).toBe("trace-1");
    expect(response.data.data.id).toBe(1);
  });

  test("preserves unsafe integer ids from JSON responses as strings", async () => {
    const client = new ApiClient({
      fetch: async () => rawJsonResponse([
        "{",
        '"code":0,',
        '"data":{"list":[{"promotion_id":7641898034989400000,"project_id":7641894773956215000,"name":"广告 7641898034989400000","safe_count":123}]}',
        "}",
      ].join("")),
    });

    const response = await client.request<{
      data: {
        list: Array<{
          promotion_id: string;
          project_id: string;
          name: string;
          safe_count: number;
        }>;
      };
    }>({ method: "GET", path: "/open_api/test/" });

    expect(response.data.list[0].promotion_id).toBe("7641898034989400000");
    expect(response.data.list[0].project_id).toBe("7641894773956215000");
    expect(response.data.list[0].name).toBe("广告 7641898034989400000");
    expect(response.data.list[0].safe_count).toBe(123);
  });

  test("throws ApiException on non-2xx responses", async () => {
    const client = new ApiClient({
      fetch: async () => jsonResponse({ code: 401, message: "invalid token" }, { status: 401 }),
    });

    await expect(client.request({ method: "GET", path: "/open_api/test/" })).rejects.toBeInstanceOf(ApiException);
  });
});
