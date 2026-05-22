// Generated from oceanengine/ad_open_sdk_go api/api_star_bill_get_pending_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarBillGetPendingV2Response } from "../models/index";


export interface StarBillGetPendingV2ApiOpenApi2StarBillGetPendingGetRequest {
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

  async openApi2StarBillGetPendingGet(request: StarBillGetPendingV2ApiOpenApi2StarBillGetPendingGetRequest): Promise<StarBillGetPendingV2Response> {
    const response = await this.openApi2StarBillGetPendingGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarBillGetPendingGetWithHttpInfo(request: StarBillGetPendingV2ApiOpenApi2StarBillGetPendingGetRequest): Promise<ApiResponse<StarBillGetPendingV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
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


