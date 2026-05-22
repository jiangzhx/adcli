// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SvipChargeVerifyGetV30Caller, SvipChargeVerifyGetV30ChargeSource, SvipChargeVerifyGetV30ChargeType, SvipChargeVerifyGetV30Platform, SvipChargeVerifyGetV30Response } from "../models";


export class SvipChargeVerifyGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SvipChargeVerifyGetGet(ccAccountId: number, accountId: number, platform: SvipChargeVerifyGetV30Platform, requestId: string, chargeType: SvipChargeVerifyGetV30ChargeType, chargeSource: SvipChargeVerifyGetV30ChargeSource, caller: SvipChargeVerifyGetV30Caller): Promise<SvipChargeVerifyGetV30Response> {
    const response = await this.openApiV30SvipChargeVerifyGetGetWithHttpInfo(ccAccountId, accountId, platform, requestId, chargeType, chargeSource, caller);
    return response.data;
  }

  async openApiV30SvipChargeVerifyGetGetWithHttpInfo(ccAccountId: number, accountId: number, platform: SvipChargeVerifyGetV30Platform, requestId: string, chargeType: SvipChargeVerifyGetV30ChargeType, chargeSource: SvipChargeVerifyGetV30ChargeSource, caller: SvipChargeVerifyGetV30Caller): Promise<ApiResponse<SvipChargeVerifyGetV30Response>> {
    if (ccAccountId == null) {
      throw new ApiException("Missing the required parameter 'ccAccountId' when calling openApiV30SvipChargeVerifyGetGet");
    }

    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SvipChargeVerifyGetGet");
    }

    if (platform == null) {
      throw new ApiException("Missing the required parameter 'platform' when calling openApiV30SvipChargeVerifyGetGet");
    }

    if (requestId == null) {
      throw new ApiException("Missing the required parameter 'requestId' when calling openApiV30SvipChargeVerifyGetGet");
    }

    if (chargeType == null) {
      throw new ApiException("Missing the required parameter 'chargeType' when calling openApiV30SvipChargeVerifyGetGet");
    }

    if (chargeSource == null) {
      throw new ApiException("Missing the required parameter 'chargeSource' when calling openApiV30SvipChargeVerifyGetGet");
    }

    if (caller == null) {
      throw new ApiException("Missing the required parameter 'caller' when calling openApiV30SvipChargeVerifyGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SvipChargeVerifyGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/svip/charge/verify/get/",
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


