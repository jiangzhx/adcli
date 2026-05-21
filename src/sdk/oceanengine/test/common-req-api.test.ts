import { describe, expect, test } from "bun:test";
import { CommonReqApi } from "../src/runtime/CommonReqApi";
import { ApiClient } from "../src/runtime/ApiClient";

function jsonResponse(body: unknown) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json", "x-trace-id": "trace-common" },
  });
}

describe("CommonReqApi", () => {
  test("sends GET query params through ApiClient", async () => {
    const requests: Request[] = [];
    const api = new CommonReqApi(
      new ApiClient({
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { ok: true } });
        },
      }),
    );

    const response = await api.commonReq("GET", "/open_api/custom/", undefined, [{ name: "advertiser_id", value: 123 }]);

    expect((response.data as { ok: boolean }).ok).toBe(true);
    expect(requests[0].method).toBe("GET");
    expect(new URL(requests[0].url).searchParams.get("advertiser_id")).toBe("123");
  });

  test("sends POST body and content type", async () => {
    const requests: Request[] = [];
    const api = new CommonReqApi(
      new ApiClient({
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { ok: true } });
        },
      }),
    );

    await api.commonReq("POST", "/open_api/custom/", "application/json", undefined, undefined, { name: "demo" });

    expect(requests[0].headers.get("Content-Type")).toBe("application/json");
    expect(await requests[0].text()).toBe(JSON.stringify({ name: "demo" }));
  });

  test("sends urlencoded form params", async () => {
    const requests: Request[] = [];
    const api = new CommonReqApi(
      new ApiClient({
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { ok: true } });
        },
      }),
    );

    await api.commonReq(
      "POST",
      "/open_api/custom/",
      "application/x-www-form-urlencoded",
      undefined,
      { advertiser_id: 123, name: "demo" },
    );

    expect(requests[0].headers.get("Content-Type")).toBe("application/x-www-form-urlencoded");
    expect(await requests[0].text()).toBe("advertiser_id=123&name=demo");
  });

  test("returns http info variant", async () => {
    const api = new CommonReqApi(
      new ApiClient({
        fetch: async () => jsonResponse({ code: 0, data: { ok: true } }),
      }),
    );

    const response = await api.commonReqWithHttpInfo("GET", "/open_api/custom/");

    expect(response.statusCode).toBe(200);
    expect(response.headers.get("x-trace-id")).toBe("trace-common");
    expect((response.data.data as { ok: boolean }).ok).toBe(true);
  });
});
