// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarStarAdUniteTaskItemListV2Response } from "../models";


export class StarStarAdUniteTaskItemListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarStarAdUniteTaskItemListGet(starId: number, statStartDate: string, statEndDate: string, demandId: number, page: number, pageSize: number): Promise<StarStarAdUniteTaskItemListV2Response> {
    const response = await this.openApi2StarStarAdUniteTaskItemListGetWithHttpInfo(starId, statStartDate, statEndDate, demandId, page, pageSize);
    return response.data;
  }

  async openApi2StarStarAdUniteTaskItemListGetWithHttpInfo(starId: number, statStartDate: string, statEndDate: string, demandId: number, page: number, pageSize: number): Promise<ApiResponse<StarStarAdUniteTaskItemListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarStarAdUniteTaskItemListGet");
    }

    if (statStartDate == null) {
      throw new ApiException("Missing the required parameter 'statStartDate' when calling openApi2StarStarAdUniteTaskItemListGet");
    }

    if (statEndDate == null) {
      throw new ApiException("Missing the required parameter 'statEndDate' when calling openApi2StarStarAdUniteTaskItemListGet");
    }

    if (demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarStarAdUniteTaskItemListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarStarAdUniteTaskItemListV2Response>({
      method: "GET",
      path: "/open_api/2/star/star_ad_unite_task_item/list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "stat_start_date", value: statStartDate },
        { name: "stat_end_date", value: statEndDate },
        { name: "demand_id", value: demandId }
      ]
    });
  }
}


