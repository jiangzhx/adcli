import { describe, expect, test } from "bun:test";
import {
  AdvertiserFundGetV2Api,
  ApiClient,
  CommonReqApi,
  Oauth2AccessTokenApi,
  ReportCustomConfigGetV30Api,
  ReportCustomConfigGetV30DataTopics,
} from "../src";

describe("oceanengine sdk entrypoint", () => {
  test("exports runtime, generated APIs, and generated models", () => {
    expect(ApiClient).toBeTruthy();
    expect(CommonReqApi).toBeTruthy();
    expect(Oauth2AccessTokenApi).toBeTruthy();
    expect(ReportCustomConfigGetV30Api).toBeTruthy();
    expect(AdvertiserFundGetV2Api).toBeTruthy();
    expect(ReportCustomConfigGetV30DataTopics.BASIC_DATA).toBe("BASIC_DATA");
  });
});
