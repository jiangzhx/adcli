// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnProviderGetTaskShareCodeV2Response } from "../models";


export class StarMcnProviderGetTaskShareCodeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetTaskShareCodeGet(starId: number, taskId: number, channelId: string): Promise<StarMcnProviderGetTaskShareCodeV2Response> {
    const response = await this.openApi2StarMcnProviderGetTaskShareCodeGetWithHttpInfo(starId, taskId, channelId);
    return response.data;
  }

  async openApi2StarMcnProviderGetTaskShareCodeGetWithHttpInfo(starId: number, taskId: number, channelId: string): Promise<ApiResponse<StarMcnProviderGetTaskShareCodeV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnProviderGetTaskShareCodeGet");
    }

    if (taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarMcnProviderGetTaskShareCodeGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnProviderGetTaskShareCodeV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/provider_get_task_share_code/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "task_id", value: taskId },
        { name: "channel_id", value: channelId }
      ]
    });
  }
}


