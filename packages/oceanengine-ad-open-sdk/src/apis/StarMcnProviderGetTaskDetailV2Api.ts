// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnProviderGetTaskDetailV2Response } from "../models";


export interface OpenApi2StarMcnProviderGetTaskDetailGetRequest {
  starId: number;
  taskId: number;
}

export class StarMcnProviderGetTaskDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetTaskDetailGet(request: OpenApi2StarMcnProviderGetTaskDetailGetRequest): Promise<StarMcnProviderGetTaskDetailV2Response> {
    const response = await this.openApi2StarMcnProviderGetTaskDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnProviderGetTaskDetailGetWithHttpInfo(request: OpenApi2StarMcnProviderGetTaskDetailGetRequest): Promise<ApiResponse<StarMcnProviderGetTaskDetailV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnProviderGetTaskDetailGet");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarMcnProviderGetTaskDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnProviderGetTaskDetailV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/provider_get_task_detail/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "task_id", value: request.taskId }
      ]
    });
  }
}


