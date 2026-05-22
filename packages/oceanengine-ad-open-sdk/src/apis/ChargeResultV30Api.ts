// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ChargeResultV30Response } from "../models";


export class ChargeResultV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ChargeResultGet(advertiserId: number, chargeOrderId: number): Promise<ChargeResultV30Response> {
    const response = await this.openApiV30ChargeResultGetWithHttpInfo(advertiserId, chargeOrderId);
    return response.data;
  }

  async openApiV30ChargeResultGetWithHttpInfo(advertiserId: number, chargeOrderId: number): Promise<ApiResponse<ChargeResultV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ChargeResultGet");
    }

    if (chargeOrderId == null) {
      throw new ApiException("Missing the required parameter 'chargeOrderId' when calling openApiV30ChargeResultGet");
    }
    return this.apiClient.requestWithHttpInfo<ChargeResultV30Response>({
      method: "GET",
      path: "/open_api/v3.0/charge/result/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "charge_order_id", value: chargeOrderId }
      ]
    });
  }
}


