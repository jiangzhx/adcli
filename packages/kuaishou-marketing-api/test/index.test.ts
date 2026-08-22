import { describe, expect, test } from "bun:test";
import {
  BASE_URL,
  NewSDKClient,
  OAUTH_URL,
  SDKClient,
  SOURCE_VERSION,
  advertiser,
  campaign,
  oauth,
  unit,
} from "../src";

describe("kuaishou marketing api entrypoint", () => {
  test("exports runtime and first-slice APIs", () => {
    expect(SDKClient).toBeTruthy();
    expect(NewSDKClient).toBeTruthy();
    expect(SOURCE_VERSION).toBe("1.10.1");
    expect(oauth.accessToken).toBeTruthy();
    expect(oauth.AccessToken).toBe(oauth.accessToken);
    expect(advertiser.info).toBeTruthy();
    expect(advertiser.Info).toBe(advertiser.info);
    expect(campaign.create).toBeTruthy();
    expect(campaign.Create).toBe(campaign.create);
    expect(unit.create).toBeTruthy();
    expect(unit.Create).toBe(unit.create);
  });
});

describe("oauth", () => {
  test("builds authorize url from client app id", () => {
    const client = new SDKClient(123, "secret");
    const authorizeUrl = oauth.url(client, {
      redirect_uri: "https://example.com/callback",
      scope: ["ad:manage"],
      state: "demo",
    });

    expect(authorizeUrl.startsWith(`${OAUTH_URL}/tools/authorize?`)).toBe(true);
    const parsed = new URL(authorizeUrl);
    expect(parsed.searchParams.get("app_id")).toBe("123");
    expect(parsed.searchParams.get("redirect_uri")).toBe("https://example.com/callback");
    expect(parsed.searchParams.get("state")).toBe("demo");
    expect(parsed.searchParams.get("scope")).toBe('["ad:manage"]');
  });

  test("exchanges auth code for access token", async () => {
    const client = new SDKClient(123, "secret", {
      fetch: async (input, init) => {
        expect(String(input)).toBe(`${BASE_URL}/oauth2/authorize/access_token`);
        expect(init?.method).toBe("POST");
        const body = decodeJsonBody(init?.body);
        expect(body).toEqual({
          app_id: 123,
          secret: "secret",
          auth_code: "code-1",
        });
        return rawJsonResponse(
          '{"code":0,"data":{"access_token":"token","refresh_token":"refresh","advertiser_ids":[9007199254740993]}}',
        );
      },
    });

    const result = await oauth.accessToken(client, "code-1");
    expect(result.access_token).toBe("token");
    expect(result.refresh_token).toBe("refresh");
    expect(result.advertiser_ids?.[0]).toBe("9007199254740993");
  });
});

describe("advertiser", () => {
  test("posts advertiser info with access token", async () => {
    const client = new SDKClient(123, "secret", {
      fetch: async (input, init) => {
        expect(String(input)).toBe(`${BASE_URL}/v1/advertiser/info`);
        expect(init?.headers instanceof Headers ? init.headers.get("Access-Token") : undefined).toBe("token");
        const body = decodeJsonBody(init?.body);
        expect(body).toEqual({ advertiser_id: 456 });
        return jsonResponse({
          code: 0,
          data: {
            user_name: "demo",
            corporation_name: "acme",
          },
        });
      },
    });

    const result = await advertiser.info(client, "token", 456);
    expect(result.user_name).toBe("demo");
    expect(result.corporation_name).toBe("acme");
  });

  test("returns advertiser balance from fund get", async () => {
    const client = new SDKClient(123, "secret", {
      fetch: async () => jsonResponse({ code: 0, data: { balance: 12.5 } }),
    });

    await expect(advertiser.fundGet(client, "token", 456)).resolves.toBe(12.5);
  });

  test("gets white list with query string", async () => {
    const client = new SDKClient(123, "secret", {
      fetch: async (input, init) => {
        expect(String(input)).toBe(`${BASE_URL}/v1/advertiser/white_list?advertiser_id=456`);
        expect(init?.method).toBe("GET");
        return jsonResponse({
          code: 0,
          data: { aliance_account: 1 },
        });
      },
    });

    const result = await advertiser.whiteList(client, "token", 456);
    expect(result.aliance_account).toBe(1);
  });

  test("throws api envelope when code is not zero", async () => {
    const client = new SDKClient(123, "secret", {
      fetch: async () =>
        jsonResponse({
          code: 40100,
          message: "invalid token",
          request_id: "req-1",
        }),
    });

    try {
      await advertiser.info(client, "bad-token", 456);
      throw new Error("expected request to fail");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe("invalid token");
    }
  });
});

describe("campaign", () => {
  test("creates campaign and unwraps campaign_id", async () => {
    const client = new SDKClient(123, "secret", {
      fetch: async (input, init) => {
        expect(String(input)).toBe(`${BASE_URL}/gw/dsp/campaign/create`);
        const body = decodeJsonBody(init?.body);
        expect(body).toEqual({
          advertiser_id: 456,
          campaign_name: "plan-1",
          type: 5,
        });
        return jsonResponse({ code: 0, data: { campaign_id: 9001 } });
      },
    });

    await expect(
      campaign.create(client, "token", {
        advertiser_id: 456,
        campaign_name: "plan-1",
        type: 5,
      }),
    ).resolves.toBe(9001);
  });
});

describe("unit", () => {
  test("creates unit and unwraps unit_id", async () => {
    const client = new SDKClient(123, "secret", {
      fetch: async (input, init) => {
        expect(String(input)).toBe(`${BASE_URL}/gw/dsp/unit/create`);
        const body = decodeJsonBody(init?.body);
        expect(body).toEqual({
          advertiser_id: 456,
          campaign_id: 9001,
          unit_name: "unit-1",
        });
        return jsonResponse({ code: 0, data: { unit_id: 8001 } });
      },
    });

    await expect(
      unit.create(client, "token", {
        advertiser_id: 456,
        campaign_id: 9001,
        unit_name: "unit-1",
      }),
    ).resolves.toBe(8001);
  });
});

function jsonResponse(payload: unknown) {
  return rawJsonResponse(JSON.stringify(payload));
}

function rawJsonResponse(payload: string) {
  return new Response(payload, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

function decodeJsonBody(body: BodyInit | null | undefined) {
  if (body instanceof Uint8Array) {
    return JSON.parse(new TextDecoder().decode(body));
  }
  if (typeof body === "string") {
    return JSON.parse(body);
  }
  throw new Error(`unexpected request body: ${String(body)}`);
}
