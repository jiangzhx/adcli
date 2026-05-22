// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarStarAdUniteTaskDetailV2Response } from "../models";


export class StarStarAdUniteTaskDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarStarAdUniteTaskDetailGet(starId: number, demandId: number, statStartDate: string, statEndDate: string): Promise<StarStarAdUniteTaskDetailV2Response> {
    const response = await this.openApi2StarStarAdUniteTaskDetailGetWithHttpInfo(starId, demandId, statStartDate, statEndDate);
    return response.data;
  }

  async openApi2StarStarAdUniteTaskDetailGetWithHttpInfo(starId: number, demandId: number, statStartDate: string, statEndDate: string): Promise<ApiResponse<StarStarAdUniteTaskDetailV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarStarAdUniteTaskDetailGet");
    }

    if (demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarStarAdUniteTaskDetailGet");
    }

    if (statStartDate == null) {
      throw new ApiException("Missing the required parameter 'statStartDate' when calling openApi2StarStarAdUniteTaskDetailGet");
    }

    if (statEndDate == null) {
      throw new ApiException("Missing the required parameter 'statEndDate' when calling openApi2StarStarAdUniteTaskDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<StarStarAdUniteTaskDetailV2Response>({
      method: "GET",
      path: "/open_api/2/star/star_ad_unite_task/detail/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "demand_id", value: demandId },
        { name: "stat_start_date", value: statStartDate },
        { name: "stat_end_date", value: statEndDate }
      ]
    });
  }
}


