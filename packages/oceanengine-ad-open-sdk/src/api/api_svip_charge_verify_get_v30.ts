// Generated from oceanengine/ad_open_sdk_go api/api_svip_charge_verify_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SvipChargeVerifyGetV30Caller, SvipChargeVerifyGetV30ChargeSource, SvipChargeVerifyGetV30ChargeType, SvipChargeVerifyGetV30Platform, SvipChargeVerifyGetV30Response } from "../models/index";


export interface SvipChargeVerifyGetV30ApiOpenApiV30SvipChargeVerifyGetGetRequest {
  ccAccountId: number | string;
  accountId: number | string;
  platform: SvipChargeVerifyGetV30Platform;
  requestId: string;
  chargeType: SvipChargeVerifyGetV30ChargeType;
  chargeSource: SvipChargeVerifyGetV30ChargeSource;
  caller: SvipChargeVerifyGetV30Caller;
}

export class SvipChargeVerifyGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SvipChargeVerifyGetGet(request: SvipChargeVerifyGetV30ApiOpenApiV30SvipChargeVerifyGetGetRequest): Promise<SvipChargeVerifyGetV30Response> {
    const response = await this.openApiV30SvipChargeVerifyGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SvipChargeVerifyGetGetWithHttpInfo(request: SvipChargeVerifyGetV30ApiOpenApiV30SvipChargeVerifyGetGetRequest): Promise<ApiResponse<SvipChargeVerifyGetV30Response>> {
    if (request.ccAccountId == null) {
      throw new ApiException("Missing the required parameter 'ccAccountId' when calling openApiV30SvipChargeVerifyGetGet");
    }

    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SvipChargeVerifyGetGet");
    }

    if (request.platform == null) {
      throw new ApiException("Missing the required parameter 'platform' when calling openApiV30SvipChargeVerifyGetGet");
    }

    if (request.requestId == null) {
      throw new ApiException("Missing the required parameter 'requestId' when calling openApiV30SvipChargeVerifyGetGet");
    }

    if (request.chargeType == null) {
      throw new ApiException("Missing the required parameter 'chargeType' when calling openApiV30SvipChargeVerifyGetGet");
    }

    if (request.chargeSource == null) {
      throw new ApiException("Missing the required parameter 'chargeSource' when calling openApiV30SvipChargeVerifyGetGet");
    }

    if (request.caller == null) {
      throw new ApiException("Missing the required parameter 'caller' when calling openApiV30SvipChargeVerifyGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SvipChargeVerifyGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/svip/charge/verify/get/",
      queryParams: [
        { name: "cc_account_id", value: request.ccAccountId },
        { name: "account_id", value: request.accountId },
        { name: "platform", value: request.platform },
        { name: "request_id", value: request.requestId },
        { name: "charge_type", value: request.chargeType },
        { name: "charge_source", value: request.chargeSource },
        { name: "caller", value: request.caller }
      ]
    });
  }
}


