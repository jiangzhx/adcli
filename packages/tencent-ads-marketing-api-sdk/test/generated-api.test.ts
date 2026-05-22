import { describe, expect, test } from "bun:test";
import { AdgroupsApi, ImagesApi } from "../src/apis";
import { ApiClient } from "../src/runtime/ApiClient";

function jsonResponse(body: unknown) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

describe("generated APIs", () => {
  test("AdgroupsApi sends required and optional query params", async () => {
    const requests: Request[] = [];
    const api = new AdgroupsApi(
      new ApiClient({
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: {} });
        },
      }),
    );

    await expect(api.get({ fields: ["adgroup_id"] } as never)).rejects.toBeInstanceOf(Error);
    await api.get({
      accountId: "7641898034989400000",
      fields: ["adgroup_id", "adgroup_name"],
      page: 1,
      pageSize: 10,
    });

    const url = new URL(requests[0].url);
    expect(requests[0].method).toBe("GET");
    expect(url.pathname).toBe("/adgroups/get");
    expect(url.searchParams.get("account_id")).toBe("7641898034989400000");
    expect(url.searchParams.getAll("fields")).toEqual(["adgroup_id", "adgroup_name"]);
    expect(url.searchParams.get("page_size")).toBe("10");
  });

  test("ImagesApi maps optional Go file parameter to multipart Blob", async () => {
    const requests: Request[] = [];
    const api = new ImagesApi(
      new ApiClient({
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
    expect(new URL(requests[0].url).pathname).toBe("/images/add");
    expect(form.get("upload_type")).toBe("UPLOAD_TYPE_FILE");
    expect(form.get("file")).toBeInstanceOf(File);
  });
});
