// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnProviderGetTaskDetailV2Response } from "../models";


export class StarMcnProviderGetTaskDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetTaskDetailGet(starId: number, taskId: number): Promise<StarMcnProviderGetTaskDetailV2Response> {
    const response = await this.openApi2StarMcnProviderGetTaskDetailGetWithHttpInfo(starId, taskId);
    return response.data;
  }

  async openApi2StarMcnProviderGetTaskDetailGetWithHttpInfo(starId: number, taskId: number): Promise<ApiResponse<StarMcnProviderGetTaskDetailV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnProviderGetTaskDetailGet");
    }

    if (taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarMcnProviderGetTaskDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnProviderGetTaskDetailV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/provider_get_task_detail/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "task_id", value: taskId }
      ]
    });
  }
}


