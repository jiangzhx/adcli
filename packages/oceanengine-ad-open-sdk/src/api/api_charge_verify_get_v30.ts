// Generated from oceanengine/ad_open_sdk_go api/api_charge_verify_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ChargeVerifyGetV30Caller, ChargeVerifyGetV30ChargeSource, ChargeVerifyGetV30ChargeType, ChargeVerifyGetV30Platform, ChargeVerifyGetV30Response } from "../models/index";


export interface ChargeVerifyGetV30ApiOpenApiV30ChargeVerifyGetGetRequest {
  ccAccountId: number | string;
  accountId: number | string;
  platform: ChargeVerifyGetV30Platform;
  requestId: string;
  chargeType: ChargeVerifyGetV30ChargeType;
  chargeSource: ChargeVerifyGetV30ChargeSource;
  caller: ChargeVerifyGetV30Caller;
}

export class ChargeVerifyGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ChargeVerifyGetGet(request: ChargeVerifyGetV30ApiOpenApiV30ChargeVerifyGetGetRequest): Promise<ChargeVerifyGetV30Response> {
    const response = await this.openApiV30ChargeVerifyGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ChargeVerifyGetGetWithHttpInfo(request: ChargeVerifyGetV30ApiOpenApiV30ChargeVerifyGetGetRequest): Promise<ApiResponse<ChargeVerifyGetV30Response>> {
    if (request.ccAccountId == null) {
      throw new ApiException("Missing the required parameter 'ccAccountId' when calling openApiV30ChargeVerifyGetGet");
    }

    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ChargeVerifyGetGet");
    }

    if (request.platform == null) {
      throw new ApiException("Missing the required parameter 'platform' when calling openApiV30ChargeVerifyGetGet");
    }

    if (request.requestId == null) {
      throw new ApiException("Missing the required parameter 'requestId' when calling openApiV30ChargeVerifyGetGet");
    }

    if (request.chargeType == null) {
      throw new ApiException("Missing the required parameter 'chargeType' when calling openApiV30ChargeVerifyGetGet");
    }

    if (request.chargeSource == null) {
      throw new ApiException("Missing the required parameter 'chargeSource' when calling openApiV30ChargeVerifyGetGet");
    }

    if (request.caller == null) {
      throw new ApiException("Missing the required parameter 'caller' when calling openApiV30ChargeVerifyGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ChargeVerifyGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/charge/verify/get/",
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


