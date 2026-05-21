// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarBillGetPendingV2Response } from "../models";


export class StarBillGetPendingV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarBillGetPendingGet(starId: number, campaignId: number, orderId: number): Promise<StarBillGetPendingV2Response> {
    const response = await this.openApi2StarBillGetPendingGetWithHttpInfo(starId, campaignId, orderId);
    return response.data;
  }

  async openApi2StarBillGetPendingGetWithHttpInfo(starId: number, campaignId: number, orderId: number): Promise<ApiResponse<StarBillGetPendingV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarBillGetPendingGet");
    }
    return this.apiClient.requestWithHttpInfo<StarBillGetPendingV2Response>({
      method: "GET",
      path: "/open_api/2/star/bill/get_pending/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "campaign_id", value: campaignId },
        { name: "order_id", value: orderId }
      ]
    });
  }
}


