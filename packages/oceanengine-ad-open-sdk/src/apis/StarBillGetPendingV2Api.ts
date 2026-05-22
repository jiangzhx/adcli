// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarBillGetPendingV2Response } from "../models";


export interface OpenApi2StarBillGetPendingGetRequest {
  starId: number | string;
  campaignId?: number | string;
  orderId?: number | string;
}

export class StarBillGetPendingV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarBillGetPendingGet(request: OpenApi2StarBillGetPendingGetRequest): Promise<StarBillGetPendingV2Response> {
    const response = await this.openApi2StarBillGetPendingGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarBillGetPendingGetWithHttpInfo(request: OpenApi2StarBillGetPendingGetRequest): Promise<ApiResponse<StarBillGetPendingV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarBillGetPendingGet");
    }
    return this.apiClient.requestWithHttpInfo<StarBillGetPendingV2Response>({
      method: "GET",
      path: "/open_api/2/star/bill/get_pending/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "campaign_id", value: request.campaignId },
        { name: "order_id", value: request.orderId }
      ]
    });
  }
}


