// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarVasGetBoostItemGroupDetailV2Response } from "../models";


export class StarVasGetBoostItemGroupDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarVasGetBoostItemGroupDetailGet(starId: number, taskId: number): Promise<StarVasGetBoostItemGroupDetailV2Response> {
    const response = await this.openApi2StarVasGetBoostItemGroupDetailGetWithHttpInfo(starId, taskId);
    return response.data;
  }

  async openApi2StarVasGetBoostItemGroupDetailGetWithHttpInfo(starId: number, taskId: number): Promise<ApiResponse<StarVasGetBoostItemGroupDetailV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarVasGetBoostItemGroupDetailGet");
    }

    if (taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarVasGetBoostItemGroupDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<StarVasGetBoostItemGroupDetailV2Response>({
      method: "GET",
      path: "/open_api/2/star/vas/get_boost_item_group_detail/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "task_id", value: taskId }
      ]
    });
  }
}


