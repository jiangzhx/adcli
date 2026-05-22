import { describe, expect, test } from "bun:test";
import { ApiClient } from "../src/runtime/ApiClient";
import {
  AdvertiserFundGetV2Api,
  Oauth2AccessTokenApi,
  ReportCustomConfigGetV30Api,
} from "../src/apis";
import { ReportCustomConfigGetV30DataTopics } from "../src/models";

function jsonResponse(body: unknown) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

describe("generated APIs", () => {
  test("Oauth2AccessTokenApi sends POST JSON body", async () => {
    const requests: Request[] = [];
    const api = new Oauth2AccessTokenApi(
      new ApiClient({
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: { access_token: "token" } });
        },
      }),
    );

    await api.openApiOauth2AccessTokenPost({ oauth2AccessTokenRequest: { auth_code: "code", secret: "secret" } });

    expect(requests[0].method).toBe("POST");
    expect(new URL(requests[0].url).pathname).toBe("/open_api/oauth2/access_token/");
    expect(await requests[0].text()).toBe(JSON.stringify({ auth_code: "code", secret: "secret" }));
  });

  test("ReportCustomConfigGetV30Api sends csv query and validates required params", async () => {
    const requests: Request[] = [];
    const api = new ReportCustomConfigGetV30Api(
      new ApiClient({
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: {} });
        },
      }),
    );

    await expect(api.openApiV30ReportCustomConfigGetGet({ dataTopics: [] } as never)).rejects.toBeInstanceOf(Error);
    await api.openApiV30ReportCustomConfigGetGet({
      advertiserId: 123,
      dataTopics: [ReportCustomConfigGetV30DataTopics.BASIC_DATA],
    });

    const url = new URL(requests[0].url);
    expect(requests[0].method).toBe("GET");
    expect(url.pathname).toBe("/open_api/v3.0/report/custom/config/get/");
    expect(url.searchParams.get("advertiser_id")).toBe("123");
    expect(url.searchParams.get("data_topics")).toBe("BASIC_DATA");
  });

  test("AdvertiserFundGetV2Api sends scalar query params", async () => {
    const requests: Request[] = [];
    const api = new AdvertiserFundGetV2Api(
      new ApiClient({
        fetch: async (input) => {
          requests.push(input as Request);
          return jsonResponse({ code: 0, data: {} });
        },
      }),
    );

    await api.openApi2AdvertiserFundGetGet({ advertiserId: 123, grantTypeSplit: "ON" });

    const url = new URL(requests[0].url);
    expect(url.pathname).toBe("/open_api/2/advertiser/fund/get/");
    expect(url.searchParams.get("advertiser_id")).toBe("123");
    expect(url.searchParams.get("grant_type_split")).toBe("ON");
  });
});
