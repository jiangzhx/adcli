import { describe, expect, test } from "bun:test";
import { ApiClient } from "../src/api/client";
import { CommonApi } from "../src/api/api_common";

function jsonResponse(body: unknown) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json", "x-trace-id": "trace-common" },
  });
}

describe("CommonApi", () => {
  test("sends GET query params through ApiClient", async () => {
    const requests: Request[] = [];
    const api = new CommonApi(
      new ApiClient({
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { ok: true } });
        },
      }),
    );

    const response = await api.get({ path: "/open_api/custom/", requestQuery: { advertiser_id: 123 } });

    expect((response.data as { ok: boolean }).ok).toBe(true);
    expect(requests[0].method).toBe("GET");
    expect(new URL(requests[0].url).searchParams.get("advertiser_id")).toBe("123");
  });

  test("sends POST body and content type", async () => {
    const requests: Request[] = [];
    const api = new CommonApi(
      new ApiClient({
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { ok: true } });
        },
      }),
    );

    await api.post({ path: "/open_api/custom/", requestBody: { name: "demo" } });

    expect(requests[0].headers.get("Content-Type")).toBe("application/json");
    expect(await requests[0].text()).toBe(JSON.stringify({ name: "demo" }));
  });

  test("sends POST requestForm as JSON body", async () => {
    const requests: Request[] = [];
    const api = new CommonApi(
      new ApiClient({
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { ok: true } });
        },
      }),
    );

    await api.post({ path: "/open_api/custom/", requestForm: { advertiser_id: 123, name: "demo" } });

    expect(requests[0].headers.get("Content-Type")).toBe("application/json");
    expect(await requests[0].text()).toBe(JSON.stringify({ advertiser_id: 123, name: "demo" }));
  });

  test("sends multipart files", async () => {
    const requests: Request[] = [];
    const api = new CommonApi(
      new ApiClient({
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { ok: true } });
        },
      }),
    );

    await api.postMultipart({
      path: "/open_api/2/file/video/agent/",
      requestForm: { agent_id: "1860166068834571" },
      requestFile: { video_file: new File(["video-bytes"], "video.mp4") },
    });

    const form = await requests[0].formData();
    expect(form.get("agent_id")).toBe("1860166068834571");
    expect(form.get("video_file")).toBeInstanceOf(File);
  });

  test("returns http info variant", async () => {
    const api = new CommonApi(
      new ApiClient({
        fetch: async () => jsonResponse({ code: 0, data: { ok: true } }),
      }),
    );

    const response = await api.getWithHttpInfo({ path: "/open_api/custom/" });

    expect(response.statusCode).toBe(200);
    expect(response.headers.get("x-trace-id")).toBe("trace-common");
    expect((response.data.data as { ok: boolean }).ok).toBe(true);
  });
});
