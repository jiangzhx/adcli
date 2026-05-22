// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarStarAdUniteTaskDetailV2Response } from "../models";


export interface OpenApi2StarStarAdUniteTaskDetailGetRequest {
  starId: number | string;
  demandId: number | string;
  statStartDate: string;
  statEndDate: string;
}

export class StarStarAdUniteTaskDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarStarAdUniteTaskDetailGet(request: OpenApi2StarStarAdUniteTaskDetailGetRequest): Promise<StarStarAdUniteTaskDetailV2Response> {
    const response = await this.openApi2StarStarAdUniteTaskDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarStarAdUniteTaskDetailGetWithHttpInfo(request: OpenApi2StarStarAdUniteTaskDetailGetRequest): Promise<ApiResponse<StarStarAdUniteTaskDetailV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarStarAdUniteTaskDetailGet");
    }

    if (request.demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarStarAdUniteTaskDetailGet");
    }

    if (request.statStartDate == null) {
      throw new ApiException("Missing the required parameter 'statStartDate' when calling openApi2StarStarAdUniteTaskDetailGet");
    }

    if (request.statEndDate == null) {
      throw new ApiException("Missing the required parameter 'statEndDate' when calling openApi2StarStarAdUniteTaskDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<StarStarAdUniteTaskDetailV2Response>({
      method: "GET",
      path: "/open_api/2/star/star_ad_unite_task/detail/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "demand_id", value: request.demandId },
        { name: "stat_start_date", value: request.statStartDate },
        { name: "stat_end_date", value: request.statEndDate }
      ]
    });
  }
}


