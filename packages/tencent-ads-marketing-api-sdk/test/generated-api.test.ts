import { describe, expect, test } from "bun:test";
import { CampaignsApi } from "../src/api/index";
import { ApiClient as V1ApiClient } from "../src/api/client";
import { AdgroupsApi, ApiClient as V3ApiClient, DynamicCreativesApi, ImagesApi } from "../src/api/v3/index";

function jsonResponse(body: unknown) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

describe("generated APIs", () => {
  test("CampaignsApi keeps the Go SDK v1.3 base path", async () => {
    const requests: Request[] = [];
    const api = new CampaignsApi(
      new V1ApiClient({
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: {} });
        },
      }),
    );

    await api.get({ accountId: "123" });

    const url = new URL(requests[0].url);
    expect(url.origin).toBe("https://sandbox-api.e.qq.com");
    expect(url.pathname).toBe("/v1.3/campaigns/get");
  });

  test("v3 AdgroupsApi sends required and optional query params", async () => {
    const requests: Request[] = [];
    const api = new AdgroupsApi(
      new V3ApiClient({
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: {} });
        },
      }),
    );

    await expect(api.get({ fields: ["adgroup_id"] } as never)).rejects.toBeInstanceOf(Error);
    const output = await api.get({
      accountId: "7641898034989400000",
      fields: ["adgroup_id", "adgroup_name"],
      page: 1,
      pageSize: 10,
    });

    const url = new URL(requests[0].url);
    expect(requests[0].method).toBe("GET");
    expect(url.pathname).toBe("/v3.0/adgroups/get");
    expect(url.searchParams.get("account_id")).toBe("7641898034989400000");
    expect(url.searchParams.get("fields")).toBe('["adgroup_id","adgroup_name"]');
    expect(url.searchParams.get("page_size")).toBe("10");
    expect(requests[0].headers.get("Content-Type")).toBe("text/plain");
    expect(requests[0].headers.get("Accept")).toBe("application/json");
    expect(output).toEqual({});
  });

  test("v3 DynamicCreativesApi sends requests to dynamic_creatives/get", async () => {
    const requests: Request[] = [];
    const api = new DynamicCreativesApi(
      new V3ApiClient({
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: {} });
        },
      }),
    );

    await api.get({
      accountId: "123",
      filtering: { adgroup_id: "7641894773956215123" },
      fields: ["dynamic_creative_id", "dynamic_creative_name"],
    });

    const url = new URL(requests[0].url);
    expect(url.origin).toBe("https://api.e.qq.com");
    expect(url.pathname).toBe("/v3.0/dynamic_creatives/get");
    expect(url.searchParams.get("filtering")).toBe('{"adgroup_id":"7641894773956215123"}');
    expect(url.searchParams.get("fields")).toBe('["dynamic_creative_id","dynamic_creative_name"]');
  });

  test("v3 ImagesApi maps optional Go file parameter to multipart Blob", async () => {
    const requests: Request[] = [];
    const api = new ImagesApi(
      new V3ApiClient({
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: {} });
        },
      }),
    );

    await api.add({
      accountId: "123",
      uploadType: "UPLOAD_TYPE_FILE",
      signature: "sig",
      file: new File(["image"], "image.png", { type: "image/png" }),
    });

    const form = await requests[0].formData();
    expect(new URL(requests[0].url).pathname).toBe("/v3.0/images/add");
    expect(form.get("upload_type")).toBe("UPLOAD_TYPE_FILE");
    expect(form.get("file")).toBeInstanceOf(File);
  });
});
