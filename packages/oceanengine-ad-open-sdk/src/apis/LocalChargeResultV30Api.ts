// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalChargeResultV30Response } from "../models";


export class LocalChargeResultV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalChargeResultGet(localAccountId: number, chargeOrderId: number): Promise<LocalChargeResultV30Response> {
    const response = await this.openApiV30LocalChargeResultGetWithHttpInfo(localAccountId, chargeOrderId);
    return response.data;
  }

  async openApiV30LocalChargeResultGetWithHttpInfo(localAccountId: number, chargeOrderId: number): Promise<ApiResponse<LocalChargeResultV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalChargeResultGet");
    }

    if (chargeOrderId == null) {
      throw new ApiException("Missing the required parameter 'chargeOrderId' when calling openApiV30LocalChargeResultGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalChargeResultV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/charge/result/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "charge_order_id", value: chargeOrderId }
      ]
    });
  }
}


