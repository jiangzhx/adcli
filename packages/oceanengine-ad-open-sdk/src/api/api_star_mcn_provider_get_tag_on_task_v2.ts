// Generated from oceanengine/ad_open_sdk_go api/api_star_mcn_provider_get_tag_on_task_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarMcnProviderGetTagOnTaskV2Response } from "../models/index";


export interface StarMcnProviderGetTagOnTaskV2ApiOpenApi2StarMcnProviderGetTagOnTaskGetRequest {
  starId: number | string;
  taskId: number | string;
}

export class StarMcnProviderGetTagOnTaskV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetTagOnTaskGet(request: StarMcnProviderGetTagOnTaskV2ApiOpenApi2StarMcnProviderGetTagOnTaskGetRequest): Promise<StarMcnProviderGetTagOnTaskV2Response> {
    const response = await this.openApi2StarMcnProviderGetTagOnTaskGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnProviderGetTagOnTaskGetWithHttpInfo(request: StarMcnProviderGetTagOnTaskV2ApiOpenApi2StarMcnProviderGetTagOnTaskGetRequest): Promise<ApiResponse<StarMcnProviderGetTagOnTaskV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnProviderGetTagOnTaskGet");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarMcnProviderGetTagOnTaskGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnProviderGetTagOnTaskV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/provider_get_tag_on_task/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "task_id", value: request.taskId }
      ]
    });
  }
}


