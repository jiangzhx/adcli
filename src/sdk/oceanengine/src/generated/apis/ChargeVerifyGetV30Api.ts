// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ChargeVerifyGetV30Caller, ChargeVerifyGetV30ChargeSource, ChargeVerifyGetV30ChargeType, ChargeVerifyGetV30Platform, ChargeVerifyGetV30Response } from "../models";


export class ChargeVerifyGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ChargeVerifyGetGet(ccAccountId: number, accountId: number, platform: ChargeVerifyGetV30Platform, requestId: string, chargeType: ChargeVerifyGetV30ChargeType, chargeSource: ChargeVerifyGetV30ChargeSource, caller: ChargeVerifyGetV30Caller): Promise<ChargeVerifyGetV30Response> {
    const response = await this.openApiV30ChargeVerifyGetGetWithHttpInfo(ccAccountId, accountId, platform, requestId, chargeType, chargeSource, caller);
    return response.data;
  }

  async openApiV30ChargeVerifyGetGetWithHttpInfo(ccAccountId: number, accountId: number, platform: ChargeVerifyGetV30Platform, requestId: string, chargeType: ChargeVerifyGetV30ChargeType, chargeSource: ChargeVerifyGetV30ChargeSource, caller: ChargeVerifyGetV30Caller): Promise<ApiResponse<ChargeVerifyGetV30Response>> {
    if (ccAccountId == null) {
      throw new ApiException("Missing the required parameter 'ccAccountId' when calling openApiV30ChargeVerifyGetGet");
    }

    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ChargeVerifyGetGet");
    }

    if (platform == null) {
      throw new ApiException("Missing the required parameter 'platform' when calling openApiV30ChargeVerifyGetGet");
    }

    if (requestId == null) {
      throw new ApiException("Missing the required parameter 'requestId' when calling openApiV30ChargeVerifyGetGet");
    }

    if (chargeType == null) {
      throw new ApiException("Missing the required parameter 'chargeType' when calling openApiV30ChargeVerifyGetGet");
    }

    if (chargeSource == null) {
      throw new ApiException("Missing the required parameter 'chargeSource' when calling openApiV30ChargeVerifyGetGet");
    }

    if (caller == null) {
      throw new ApiException("Missing the required parameter 'caller' when calling openApiV30ChargeVerifyGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ChargeVerifyGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/charge/verify/get/",
      queryParams: [
        { name: "cc_account_id", value: ccAccountId },
        { name: "account_id", value: accountId },
        { name: "platform", value: platform },
        { name: "request_id", value: requestId },
        { name: "charge_type", value: chargeType },
        { name: "charge_source", value: chargeSource },
        { name: "caller", value: caller }
      ]
    });
  }
}


