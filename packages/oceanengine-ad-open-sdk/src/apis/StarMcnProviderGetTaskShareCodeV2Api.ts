// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnProviderGetTaskShareCodeV2Response } from "../models";


export interface OpenApi2StarMcnProviderGetTaskShareCodeGetRequest {
  starId: number | string;
  taskId: number | string;
  channelId?: string;
}

export class StarMcnProviderGetTaskShareCodeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetTaskShareCodeGet(request: OpenApi2StarMcnProviderGetTaskShareCodeGetRequest): Promise<StarMcnProviderGetTaskShareCodeV2Response> {
    const response = await this.openApi2StarMcnProviderGetTaskShareCodeGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnProviderGetTaskShareCodeGetWithHttpInfo(request: OpenApi2StarMcnProviderGetTaskShareCodeGetRequest): Promise<ApiResponse<StarMcnProviderGetTaskShareCodeV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnProviderGetTaskShareCodeGet");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarMcnProviderGetTaskShareCodeGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnProviderGetTaskShareCodeV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/provider_get_task_share_code/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "task_id", value: request.taskId },
        { name: "channel_id", value: request.channelId }
      ]
    });
  }
}


