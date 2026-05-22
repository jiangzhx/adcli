// Generated from oceanengine/ad_open_sdk_go api/api_star_star_ad_unite_task_item_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarStarAdUniteTaskItemListV2Response } from "../models/index";


export interface StarStarAdUniteTaskItemListV2ApiOpenApi2StarStarAdUniteTaskItemListGetRequest {
  starId: number | string;
  statStartDate: string;
  statEndDate: string;
  demandId: number | string;
  page?: number;
  pageSize?: number;
}

export class StarStarAdUniteTaskItemListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarStarAdUniteTaskItemListGet(request: StarStarAdUniteTaskItemListV2ApiOpenApi2StarStarAdUniteTaskItemListGetRequest): Promise<StarStarAdUniteTaskItemListV2Response> {
    const response = await this.openApi2StarStarAdUniteTaskItemListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarStarAdUniteTaskItemListGetWithHttpInfo(request: StarStarAdUniteTaskItemListV2ApiOpenApi2StarStarAdUniteTaskItemListGetRequest): Promise<ApiResponse<StarStarAdUniteTaskItemListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarStarAdUniteTaskItemListGet");
    }

    if (request.statStartDate == null) {
      throw new ApiException("Missing the required parameter 'statStartDate' when calling openApi2StarStarAdUniteTaskItemListGet");
    }

    if (request.statEndDate == null) {
      throw new ApiException("Missing the required parameter 'statEndDate' when calling openApi2StarStarAdUniteTaskItemListGet");
    }

    if (request.demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarStarAdUniteTaskItemListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarStarAdUniteTaskItemListV2Response>({
      method: "GET",
      path: "/open_api/2/star/star_ad_unite_task_item/list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "stat_start_date", value: request.statStartDate },
        { name: "stat_end_date", value: request.statEndDate },
        { name: "demand_id", value: request.demandId }
      ]
    });
  }
}


