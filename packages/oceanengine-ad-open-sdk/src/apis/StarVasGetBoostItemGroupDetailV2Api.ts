// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarVasGetBoostItemGroupDetailV2Response } from "../models";


export interface OpenApi2StarVasGetBoostItemGroupDetailGetRequest {
  starId: number;
  taskId: number;
}

export class StarVasGetBoostItemGroupDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarVasGetBoostItemGroupDetailGet(request: OpenApi2StarVasGetBoostItemGroupDetailGetRequest): Promise<StarVasGetBoostItemGroupDetailV2Response> {
    const response = await this.openApi2StarVasGetBoostItemGroupDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarVasGetBoostItemGroupDetailGetWithHttpInfo(request: OpenApi2StarVasGetBoostItemGroupDetailGetRequest): Promise<ApiResponse<StarVasGetBoostItemGroupDetailV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarVasGetBoostItemGroupDetailGet");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarVasGetBoostItemGroupDetailGet");
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


