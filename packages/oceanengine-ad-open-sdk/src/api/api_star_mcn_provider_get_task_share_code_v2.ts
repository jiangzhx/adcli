// Generated from oceanengine/ad_open_sdk_go api/api_star_mcn_provider_get_task_share_code_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarMcnProviderGetTaskShareCodeV2Response } from "../models/index";


export interface StarMcnProviderGetTaskShareCodeV2ApiOpenApi2StarMcnProviderGetTaskShareCodeGetRequest {
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

  async openApi2StarMcnProviderGetTaskShareCodeGet(request: StarMcnProviderGetTaskShareCodeV2ApiOpenApi2StarMcnProviderGetTaskShareCodeGetRequest): Promise<StarMcnProviderGetTaskShareCodeV2Response> {
    const response = await this.openApi2StarMcnProviderGetTaskShareCodeGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnProviderGetTaskShareCodeGetWithHttpInfo(request: StarMcnProviderGetTaskShareCodeV2ApiOpenApi2StarMcnProviderGetTaskShareCodeGetRequest): Promise<ApiResponse<StarMcnProviderGetTaskShareCodeV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.taskId == null) {
      throw new ApiException("taskId is required and must be specified");
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


