import { describe, expect, test } from "bun:test";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import envPaths from "env-paths";

import { formatTencentAdsError, formatTencentAdsOutput, runTencentAdsCommand } from "@/src/commands/tencent-ads/commands";
import { getTencentAdsConfigInfo } from "@/src/commands/tencent-ads/config";

function jsonResponse(body: unknown) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

describe("tencent ads CLI commands", () => {
  test("stores Tencent Ads token under the shared adcli cache directory by default", () => {
    expect(getTencentAdsConfigInfo().configPath).toBe(
      path.join(envPaths("adcli", { suffix: "" }).cache, "tencent-ads.json"),
    );
  });

  test("saves Tencent Ads token with auth command", async () => {
    const configDir = await mkdtemp(path.join(os.tmpdir(), "adcli-tencent-ads-"));
    try {
      const output = await runTencentAdsCommand(["auth", "saved-token"], { configDir });

      expect(output).toEqual({
        ok: true,
        config_path: path.join(configDir, "tencent-ads.json"),
      });
      expect(await readFile(path.join(configDir, "tencent-ads.json"), "utf8")).toBe('{"access_token":"saved-token"}\n');
    } finally {
      await rm(configDir, { recursive: true, force: true });
    }
  });

  test("uses saved Tencent Ads token when token flag and env are missing", async () => {
    const configDir = await mkdtemp(path.join(os.tmpdir(), "adcli-tencent-ads-"));
    try {
      await runTencentAdsCommand(["auth", "saved-token"], { configDir });

      const requests: Request[] = [];
      await runTencentAdsCommand(["advertiser", "list"], {
        configDir,
        env: {},
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { list: [] } });
        },
      });

      expect(new URL(requests[0].url).pathname).toBe("/v3.0/organization_account_relation/get");
      expect(requests[0].headers.get("Access-Token")).toBe("saved-token");
    } finally {
      await rm(configDir, { recursive: true, force: true });
    }
  });

  test("prefers explicit token over env and saved token", async () => {
    const configDir = await mkdtemp(path.join(os.tmpdir(), "adcli-tencent-ads-"));
    try {
      await runTencentAdsCommand(["auth", "saved-token"], { configDir });

      const requests: Request[] = [];
      await runTencentAdsCommand(["advertiser", "list", "--access-token", "explicit-token"], {
        configDir,
        env: { TENCENT_ADS_ACCESS_TOKEN: "env-token" },
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { list: [] } });
        },
      });

      expect(requests[0].headers.get("Access-Token")).toBe("explicit-token");
    } finally {
      await rm(configDir, { recursive: true, force: true });
    }
  });

  test("prefers env token over saved token", async () => {
    const configDir = await mkdtemp(path.join(os.tmpdir(), "adcli-tencent-ads-"));
    try {
      await runTencentAdsCommand(["auth", "saved-token"], { configDir });

      const requests: Request[] = [];
      await runTencentAdsCommand(["advertiser", "list"], {
        configDir,
        env: { TENCENT_ADS_ACCESS_TOKEN: "env-token" },
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { list: [] } });
        },
      });

      expect(requests[0].headers.get("Access-Token")).toBe("env-token");
    } finally {
      await rm(configDir, { recursive: true, force: true });
    }
  });

  test("lists advertisers through organization account relation API like fujian", async () => {
    const requests: Request[] = [];
    const output = await runTencentAdsCommand(["advertiser", "list", "--access-token", "token"], {
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ code: 0, data: { list: [{ account_id: 123, corporation_name: "广告主" }] } });
      },
    });

    const url = new URL(requests[0].url);
    expect(url.pathname).toBe("/v3.0/organization_account_relation/get");
    expect(url.searchParams.get("fields")).toBe('["account_id","corporation_name","is_bid","is_mp","is_adx","comment_list"]');
    expect(url.searchParams.get("pagination_mode")).toBe("PAGINATION_MODE_NORMAL");
    expect(url.searchParams.get("page")).toBe("1");
    expect(url.searchParams.get("page_size")).toBe("100");
    expect(requests[0].headers.get("Access-Token")).toBe("token");
    expect(output).toEqual({ list: [{ account_id: 123, corporation_name: "广告主" }] });
  });

  test("gets advertiser detail through advertiser get API", async () => {
    const requests: Request[] = [];
    await runTencentAdsCommand(["advertiser", "get", "--access-token", "token", "--account-id", "123", "--fields", "account_id,account_name"], {
      fetch: async (input) => {
        requests.push(input as Request);
        return jsonResponse({ code: 0, data: { list: [{ account_id: 123, account_name: "广告主" }] } });
      },
    });

    const url = new URL(requests[0].url);
    expect(url.pathname).toBe("/v3.0/advertiser/get");
    expect(url.searchParams.get("account_id")).toBe("123");
    expect(url.searchParams.get("fields")).toBe('["account_id","account_name"]');
    expect(url.searchParams.get("pagination_mode")).toBe("PAGINATION_MODE_NORMAL");
    expect(url.searchParams.get("page_size")).toBe("20");
  });

  test("preserves unsafe integer advertiser ids returned by advertiser list", async () => {
    const output = await runTencentAdsCommand(["advertiser", "list", "--access-token", "token"], {
      fetch: async () => new Response(
        '{"code":0,"data":{"list":[{"account_id":9007199254740993,"account_name":"广告主"}]}}',
        { status: 200, headers: { "Content-Type": "application/json" } },
      ),
    });

    expect(output).toEqual({
      list: [
        { account_id: "9007199254740993", account_name: "广告主" },
      ],
    });
  });

  test("formats advertiser list as account id and name by default", () => {
    const payload = {
      list: [
        { account_id: 3001, account_name: "广告主 A" },
        { account_id: 3002, corporation_name: "广告主 B" },
      ],
    };

    expect(formatTencentAdsOutput(payload, false, ["advertiser", "list"])).toBe([
      "account_id\tname",
      "3001\t广告主 A",
      "3002\t广告主 B",
    ].join("\n"));
  });

  test("rejects campaign list because Tencent Ads CLI follows API resource names", async () => {
    let thrown: unknown;
    try {
      await runTencentAdsCommand(["campaign", "list", "--access-token", "token", "--account-id", "123"], {
        fetch: async () => jsonResponse({ code: 0, data: { list: [] } }),
      });
    } catch (error) {
      thrown = error;
    }

    expect(thrown).toBeInstanceOf(Error);
    expect((thrown as Error).message).toBe("unknown tencent-ads command: campaign list");
  });

  test("lists adgroups through generated SDK", async () => {
    const requests: Request[] = [];
    await runTencentAdsCommand(
      [
        "adgroup",
        "list",
        "--access-token",
        "token",
        "--account-id",
        "123",
        "--page",
        "2",
        "--page-size",
        "50",
        "--fields",
        "adgroup_id,adgroup_name",
        "--filtering",
        '{"configured_status":"AD_STATUS_NORMAL"}',
      ],
      {
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { list: [], page_info: { page: 2, page_size: 50 } } });
        },
      },
    );

    const url = new URL(requests[0].url);
    expect(url.pathname).toBe("/v3.0/adgroups/get");
    expect(url.searchParams.get("account_id")).toBe("123");
    expect(url.searchParams.get("page")).toBe("2");
    expect(url.searchParams.get("page_size")).toBe("50");
    expect(url.searchParams.get("fields")).toBe('["adgroup_id","adgroup_name"]');
    expect(url.searchParams.get("filtering")).toBe('{"configured_status":"AD_STATUS_NORMAL"}');
  });

  test("formats adgroup list as adgroup id and name by default", () => {
    const payload = {
      list: [
        { adgroup_id: 1001, adgroup_name: "计划 A" },
        { adgroup_id: 1002, name: "计划 B" },
      ],
    };

    expect(formatTencentAdsOutput(payload, false, ["adgroup", "list"])).toBe([
      "adgroup_id\tname",
      "1001\t计划 A",
      "1002\t计划 B",
    ].join("\n"));
  });

  test("lists dynamic creatives through generated SDK", async () => {
    const requests: Request[] = [];
    await runTencentAdsCommand(
      [
        "dynamic-creative",
        "list",
        "--access-token",
        "token",
        "--account-id",
        "123",
        "--fields",
        "dynamic_creative_id,dynamic_creative_name",
        "--filtering",
        '{"adgroup_id":"7641894773956215123"}',
      ],
      {
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { list: [] } });
        },
      },
    );

    const url = new URL(requests[0].url);
    expect(url.pathname).toBe("/v3.0/dynamic_creatives/get");
    expect(url.searchParams.get("account_id")).toBe("123");
    expect(url.searchParams.get("filtering")).toBe('{"adgroup_id":"7641894773956215123"}');
    expect(url.searchParams.get("fields")).toBe('["dynamic_creative_id","dynamic_creative_name"]');
  });

  test("formats dynamic creative list as dynamic creative id and name by default", () => {
    const payload = {
      list: [
        { dynamic_creative_id: 2001, dynamic_creative_name: "创意 A" },
        { dynamic_creative_id: 2002, name: "创意 B" },
      ],
    };

    expect(formatTencentAdsOutput(payload, false, ["dynamic-creative", "list"])).toBe([
      "dynamic_creative_id\tname",
      "2001\t创意 A",
      "2002\t创意 B",
    ].join("\n"));
  });

  test("formats Tencent Ads API errors as full json in compact list mode", () => {
    const payload = {
      code: 40000,
      message: "invalid page_size",
      request_id: "request-id",
    };

    expect(formatTencentAdsOutput(payload, false, ["adgroup", "list"])).toBe(JSON.stringify(payload, null, 2));
  });

  test("formats non-2xx response body from generated SDK errors", async () => {
    let thrown: unknown;
    try {
      await runTencentAdsCommand(["adgroup", "list", "--access-token", "token", "--account-id", "123"], {
        fetch: async () => new Response(
          JSON.stringify({ code: 40100, message: "invalid access token", request_id: "request-id" }),
          { status: 401, headers: { "Content-Type": "application/json" } },
        ),
      });
    } catch (error) {
      thrown = error;
    }

    expect(formatTencentAdsError(thrown)).toBe(JSON.stringify({
      code: 40100,
      message: "invalid access token",
      request_id: "request-id",
    }, null, 2));
  });

  test("formats Tencent business errors from generated SDK errors", async () => {
    let thrown: unknown;
    try {
      await runTencentAdsCommand(["adgroup", "list", "--access-token", "token", "--account-id", "123"], {
        fetch: async () => jsonResponse({ code: 11002, message: "Access token is invalid.", message_cn: "您的access_token无效" }),
      });
    } catch (error) {
      thrown = error;
    }

    expect(formatTencentAdsError(thrown)).toBe(JSON.stringify({
      code: 11002,
      message: "Access token is invalid.",
      message_cn: "您的access_token无效",
    }, null, 2));
  });
});
