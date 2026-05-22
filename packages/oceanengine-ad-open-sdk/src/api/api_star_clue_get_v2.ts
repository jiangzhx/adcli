// Generated from oceanengine/ad_open_sdk_go api/api_star_clue_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarClueGetV2Response } from "../models/index";


export interface StarClueGetV2ApiOpenApi2StarClueGetGetRequest {
  starId: number | string;
  demandId?: number | string;
  orderId?: number | string;
  page?: number;
  pageSize?: number;
}

export class StarClueGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarClueGetGet(request: StarClueGetV2ApiOpenApi2StarClueGetGetRequest): Promise<StarClueGetV2Response> {
    const response = await this.openApi2StarClueGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarClueGetGetWithHttpInfo(request: StarClueGetV2ApiOpenApi2StarClueGetGetRequest): Promise<ApiResponse<StarClueGetV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarClueGetGet");
    }
    return this.apiClient.requestWithHttpInfo<StarClueGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/clue/get/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "demand_id", value: request.demandId },
        { name: "order_id", value: request.orderId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


