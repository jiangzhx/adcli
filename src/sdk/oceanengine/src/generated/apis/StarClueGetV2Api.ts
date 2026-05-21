// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarClueGetV2Response } from "../models";


export class StarClueGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarClueGetGet(starId: number, demandId: number, orderId: number, page: number, pageSize: number): Promise<StarClueGetV2Response> {
    const response = await this.openApi2StarClueGetGetWithHttpInfo(starId, demandId, orderId, page, pageSize);
    return response.data;
  }

  async openApi2StarClueGetGetWithHttpInfo(starId: number, demandId: number, orderId: number, page: number, pageSize: number): Promise<ApiResponse<StarClueGetV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarClueGetGet");
    }
    return this.apiClient.requestWithHttpInfo<StarClueGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/clue/get/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "demand_id", value: demandId },
        { name: "order_id", value: orderId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


