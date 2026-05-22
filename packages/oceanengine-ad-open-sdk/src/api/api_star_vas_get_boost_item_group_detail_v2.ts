// Generated from oceanengine/ad_open_sdk_go api/api_star_vas_get_boost_item_group_detail_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarVasGetBoostItemGroupDetailV2Response } from "../models/index";


export interface StarVasGetBoostItemGroupDetailV2ApiOpenApi2StarVasGetBoostItemGroupDetailGetRequest {
  starId: number | string;
  taskId: number | string;
}

export class StarVasGetBoostItemGroupDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarVasGetBoostItemGroupDetailGet(request: StarVasGetBoostItemGroupDetailV2ApiOpenApi2StarVasGetBoostItemGroupDetailGetRequest): Promise<StarVasGetBoostItemGroupDetailV2Response> {
    const response = await this.openApi2StarVasGetBoostItemGroupDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarVasGetBoostItemGroupDetailGetWithHttpInfo(request: StarVasGetBoostItemGroupDetailV2ApiOpenApi2StarVasGetBoostItemGroupDetailGetRequest): Promise<ApiResponse<StarVasGetBoostItemGroupDetailV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.taskId == null) {
      throw new ApiException("taskId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<StarVasGetBoostItemGroupDetailV2Response>({
      method: "GET",
      path: "/open_api/2/star/vas/get_boost_item_group_detail/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "task_id", value: request.taskId }
      ]
    });
  }
}


