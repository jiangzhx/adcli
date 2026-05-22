// Generated from oceanengine/ad_open_sdk_go api/api_charge_result_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ChargeResultV30Response } from "../models/index";


export interface ChargeResultV30ApiOpenApiV30ChargeResultGetRequest {
  advertiserId: number | string;
  chargeOrderId: number | string;
}

export class ChargeResultV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ChargeResultGet(request: ChargeResultV30ApiOpenApiV30ChargeResultGetRequest): Promise<ChargeResultV30Response> {
    const response = await this.openApiV30ChargeResultGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ChargeResultGetWithHttpInfo(request: ChargeResultV30ApiOpenApiV30ChargeResultGetRequest): Promise<ApiResponse<ChargeResultV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.chargeOrderId == null) {
      throw new ApiException("chargeOrderId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ChargeResultV30Response>({
      method: "GET",
      path: "/open_api/v3.0/charge/result/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "charge_order_id", value: request.chargeOrderId }
      ]
    });
  }
}


