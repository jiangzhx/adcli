import { describe, expect, test } from "bun:test";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import envPaths from "env-paths";

import { formatOceanEngineError, formatOceanEngineOutput, runOceanEngineCommand } from "@/src/commands/oceanengine/commands";
import { getOceanEngineConfigInfo } from "@/src/commands/oceanengine/config";

function jsonResponse(body: unknown) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

describe("oceanengine CLI commands", () => {
  test("stores OceanEngine token under the shared adcli cache directory by default", () => {
    expect(getOceanEngineConfigInfo().configPath).toBe(
      path.join(envPaths("adcli", { suffix: "" }).cache, "oceanengine.json"),
    );
  });

  test("saves OceanEngine token with auth command", async () => {
    const configDir = await mkdtemp(path.join(os.tmpdir(), "adcli-oceanengine-"));
    try {
      const output = await runOceanEngineCommand(["auth", "saved-token"], { configDir });

      expect(output).toEqual({
        ok: true,
        config_path: path.join(configDir, "oceanengine.json"),
      });
      expect(await readFile(path.join(configDir, "oceanengine.json"), "utf8")).toBe('{"access_token":"saved-token"}\n');
    } finally {
      await rm(configDir, { recursive: true, force: true });
    }
  });

  test("uses saved OceanEngine token when token flag and env are missing", async () => {
    const configDir = await mkdtemp(path.join(os.tmpdir(), "adcli-oceanengine-"));
    try {
      await runOceanEngineCommand(["auth", "saved-token"], { configDir });

      const requests: Request[] = [];
      await runOceanEngineCommand(["advertiser", "list"], {
        configDir,
        env: {},
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { list: [] } });
        },
      });

      expect(new URL(requests[0].url).searchParams.get("access_token")).toBe("saved-token");
      expect(requests[0].headers.get("Access-Token")).toBe("saved-token");
    } finally {
      await rm(configDir, { recursive: true, force: true });
    }
  });

  test("prefers explicit token over env and saved token", async () => {
    const configDir = await mkdtemp(path.join(os.tmpdir(), "adcli-oceanengine-"));
    try {
      await runOceanEngineCommand(["auth", "saved-token"], { configDir });

      const requests: Request[] = [];
      await runOceanEngineCommand(["advertiser", "list", "--access-token", "explicit-token"], {
        configDir,
        env: { OCEANENGINE_ACCESS_TOKEN: "env-token" },
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { list: [] } });
        },
      });

      expect(new URL(requests[0].url).searchParams.get("access_token")).toBe("explicit-token");
      expect(requests[0].headers.get("Access-Token")).toBe("explicit-token");
    } finally {
      await rm(configDir, { recursive: true, force: true });
    }
  });

  test("prefers env token over saved token", async () => {
    const configDir = await mkdtemp(path.join(os.tmpdir(), "adcli-oceanengine-"));
    try {
      await runOceanEngineCommand(["auth", "saved-token"], { configDir });

      const requests: Request[] = [];
      await runOceanEngineCommand(["advertiser", "list"], {
        configDir,
        env: { OCEANENGINE_ACCESS_TOKEN: "env-token" },
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { list: [] } });
        },
      });

      expect(new URL(requests[0].url).searchParams.get("access_token")).toBe("env-token");
      expect(requests[0].headers.get("Access-Token")).toBe("env-token");
    } finally {
      await rm(configDir, { recursive: true, force: true });
    }
  });

  test("lists authorized advertisers through generated SDK", async () => {
    const requests: Request[] = [];
    const output = await runOceanEngineCommand(["advertiser", "list", "--access-token", "token"], {
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ code: 0, data: { list: [{ advertiser_id: 123, advertiser_name: "广告主" }] } });
      },
    });

    expect(new URL(requests[0].url).pathname).toBe("/open_api/oauth2/advertiser/get/");
    expect(new URL(requests[0].url).searchParams.get("access_token")).toBe("token");
    expect(requests[0].headers.get("Access-Token")).toBe("token");
    expect(output).toEqual({ code: 0, data: { list: [{ advertiser_id: 123, advertiser_name: "广告主" }] } });
  });

  test("preserves unsafe integer advertiser ids returned by advertiser list", async () => {
    const output = await runOceanEngineCommand(["advertiser", "list", "--access-token", "token"], {
      fetch: async () => new Response(
        '{"code":0,"data":{"list":[{"advertiser_id":9007199254740993,"advertiser_name":"广告主"}]}}',
        { status: 200, headers: { "Content-Type": "application/json" } },
      ),
    });

    expect(output).toEqual({
      code: 0,
      data: {
        list: [
          { advertiser_id: "9007199254740993", advertiser_name: "广告主" },
        ],
      },
    });
  });

  test("lists OceanEngine projects through generated SDK", async () => {
    const requests: Request[] = [];
    await runOceanEngineCommand(
      [
        "project",
        "list",
        "--access-token",
        "token",
        "--advertiser-id",
        "123",
        "--page",
        "2",
        "--page-size",
        "50",
        "--filtering",
        '{"status_first":"PROJECT_STATUS_ENABLE"}',
      ],
      {
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { list: [], page_info: { page: 2, page_size: 50 } } });
        },
      },
    );

    const url = new URL(requests[0].url);
    expect(url.pathname).toBe("/open_api/v3.0/project/list/");
    expect(url.searchParams.get("advertiser_id")).toBe("123");
    expect(url.searchParams.get("page")).toBe("2");
    expect(url.searchParams.get("page_size")).toBe("50");
    expect(url.searchParams.get("filtering")).toBe('{"status_first":"PROJECT_STATUS_ENABLE"}');
  });

  test("formats project list as project id and name by default", () => {
    const payload = {
      code: 0,
      data: {
        list: [
          { project_id: 1001, name: "项目 A", status: "PROJECT_STATUS_ENABLE" },
          { project_id: 1002, project_name: "项目 B", status: "PROJECT_STATUS_DISABLE" },
        ],
      },
    };

    expect(formatOceanEngineOutput(payload, false, ["project", "list"])).toBe([
      "project_id\tname",
      "1001\t项目 A",
      "1002\t项目 B",
    ].join("\n"));
  });

  test("formats project list as full json only when json is requested", () => {
    const payload = {
      code: 0,
      data: {
        list: [
          { project_id: 1001, name: "项目 A", status: "PROJECT_STATUS_ENABLE" },
        ],
      },
    };

    expect(formatOceanEngineOutput(payload, false, ["project", "list", "--full"])).toBe([
      "project_id\tname",
      "1001\t项目 A",
    ].join("\n"));
    expect(formatOceanEngineOutput(payload, true, ["project", "list"])).toBe(JSON.stringify(payload, null, 2));
  });

  test("lists OceanEngine promotions through generated SDK", async () => {
    const requests: Request[] = [];
    const largeProjectId = "7641894773956215123";
    await runOceanEngineCommand(
      [
        "promotion",
        "list",
        "--access-token",
        "token",
        "--advertiser-id",
        "7641894773956215123",
        "--project-id",
        largeProjectId,
        "--fields",
        "promotion_id,name,status_first",
      ],
      {
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { list: [], page_info: { page: 1, page_size: 10 } } });
        },
      },
    );

    const url = new URL(requests[0].url);
    expect(url.pathname).toBe("/open_api/v3.0/promotion/list/");
    expect(url.searchParams.get("advertiser_id")).toBe("7641894773956215123");
    expect(url.searchParams.get("filtering")).toBe(`{"project_id":"${largeProjectId}"}`);
    expect(url.searchParams.get("fields")).toBe("promotion_id,name,status_first");
  });

  test("preserves unsafe integer ids in filtering json flags", async () => {
    const requests: Request[] = [];
    await runOceanEngineCommand(
      [
        "project",
        "list",
        "--access-token",
        "token",
        "--advertiser-id",
        "123",
        "--filtering",
        '{"project_ids":[7641894773956215000],"status_first":"PROJECT_STATUS_ENABLE"}',
      ],
      {
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { list: [], page_info: { page: 1, page_size: 10 } } });
        },
      },
    );

    expect(new URL(requests[0].url).searchParams.get("filtering")).toBe(
      '{"project_ids":["7641894773956215000"],"status_first":"PROJECT_STATUS_ENABLE"}',
    );
  });

  test("preserves unsafe integer advertiser id flags as query strings", async () => {
    const requests: Request[] = [];
    const advertiserId = "7641894773956215123";
    await runOceanEngineCommand(["project", "list", "--access-token", "token", "--advertiser-id", advertiserId], {
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ code: 0, data: { list: [], page_info: { page: 1, page_size: 10 } } });
      },
    });

    expect(new URL(requests[0].url).searchParams.get("advertiser_id")).toBe(advertiserId);
  });

  test("formats promotion list as promotion id and name by default", () => {
    const payload = {
      code: 0,
      data: {
        list: [
          { promotion_id: 2001, name: "广告 A", status: "PROMOTION_STATUS_ENABLE" },
          { promotion_id: 2002, promotion_name: "广告 B", status: "PROMOTION_STATUS_DISABLE" },
        ],
      },
    };

    expect(formatOceanEngineOutput(payload, false, ["promotion", "list"])).toBe([
      "promotion_id\tname",
      "2001\t广告 A",
      "2002\t广告 B",
    ].join("\n"));
  });

  test("formats unsafe integer ids returned as strings without precision loss", () => {
    const payload = {
      code: 0,
      data: {
        list: [
          { promotion_id: "7641898034989400000", name: "广告 A" },
        ],
      },
    };

    expect(formatOceanEngineOutput(payload, false, ["promotion", "list"])).toBe([
      "promotion_id\tname",
      "7641898034989400000\t广告 A",
    ].join("\n"));
  });

  test("formats promotion list as full json only when json is requested", () => {
    const payload = {
      code: 0,
      data: {
        list: [
          { promotion_id: 2001, name: "广告 A", status: "PROMOTION_STATUS_ENABLE" },
        ],
      },
    };

    expect(formatOceanEngineOutput(payload, false, ["promotion", "list", "--full"])).toBe([
      "promotion_id\tname",
      "2001\t广告 A",
    ].join("\n"));
    expect(formatOceanEngineOutput(payload, true, ["promotion", "list"])).toBe(JSON.stringify(payload, null, 2));
  });

  test("formats OceanEngine API errors as full json in compact list mode", () => {
    const payload = {
      code: 40000,
      message: "page_size: number must be most 20",
      request_id: "request-id",
    };

    expect(formatOceanEngineOutput(payload, false, ["promotion", "list"])).toBe(JSON.stringify(payload, null, 2));
  });

  test("formats non-2xx response body from generated SDK errors", async () => {
    let thrown: unknown;
    try {
      await runOceanEngineCommand(["promotion", "list", "--access-token", "token", "--advertiser-id", "123"], {
        fetch: async () => new Response(
          JSON.stringify({ code: 40100, message: "invalid access token", request_id: "request-id" }),
          { status: 401, headers: { "Content-Type": "application/json" } },
        ),
      });
    } catch (error) {
      thrown = error;
    }

    expect(formatOceanEngineError(thrown)).toBe(JSON.stringify({
      code: 40100,
      message: "invalid access token",
      request_id: "request-id",
    }, null, 2));
  });
});
