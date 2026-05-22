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
      throw new ApiException("ccAccountId is required and must be specified");
    }

    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.platform == null) {
      throw new ApiException("platform is required and must be specified");
    }

    if (request.requestId == null) {
      throw new ApiException("requestId is required and must be specified");
    }

    if (request.chargeType == null) {
      throw new ApiException("chargeType is required and must be specified");
    }

    if (request.chargeSource == null) {
      throw new ApiException("chargeSource is required and must be specified");
    }

    if (request.caller == null) {
      throw new ApiException("caller is required and must be specified");
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


