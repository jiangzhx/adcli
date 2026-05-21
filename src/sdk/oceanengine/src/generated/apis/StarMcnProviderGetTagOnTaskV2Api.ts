// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarMcnProviderGetTagOnTaskV2Response } from "../models";


export class StarMcnProviderGetTagOnTaskV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetTagOnTaskGet(starId: number, taskId: number): Promise<StarMcnProviderGetTagOnTaskV2Response> {
    const response = await this.openApi2StarMcnProviderGetTagOnTaskGetWithHttpInfo(starId, taskId);
    return response.data;
  }

  async openApi2StarMcnProviderGetTagOnTaskGetWithHttpInfo(starId: number, taskId: number): Promise<ApiResponse<StarMcnProviderGetTagOnTaskV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnProviderGetTagOnTaskGet");
    }

    if (taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarMcnProviderGetTagOnTaskGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnProviderGetTagOnTaskV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/provider_get_tag_on_task/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "task_id", value: taskId }
      ]
    });
  }
}


