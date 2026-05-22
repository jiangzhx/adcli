// Generated from oceanengine/ad_open_sdk_go api/api_local_charge_result_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalChargeResultV30Response } from "../models/index";


export interface LocalChargeResultV30ApiOpenApiV30LocalChargeResultGetRequest {
  localAccountId: number | string;
  chargeOrderId: number | string;
}

export class LocalChargeResultV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalChargeResultGet(request: LocalChargeResultV30ApiOpenApiV30LocalChargeResultGetRequest): Promise<LocalChargeResultV30Response> {
    const response = await this.openApiV30LocalChargeResultGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalChargeResultGetWithHttpInfo(request: LocalChargeResultV30ApiOpenApiV30LocalChargeResultGetRequest): Promise<ApiResponse<LocalChargeResultV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("localAccountId is required and must be specified");
    }

    if (request.chargeOrderId == null) {
      throw new ApiException("chargeOrderId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<LocalChargeResultV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/charge/result/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "charge_order_id", value: request.chargeOrderId }
      ]
    });
  }
}


