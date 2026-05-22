// Generated from oceanengine/ad_open_sdk_go api/api_star_mcn_provider_get_task_detail_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarMcnProviderGetTaskDetailV2Response } from "../models/index";


export interface StarMcnProviderGetTaskDetailV2ApiOpenApi2StarMcnProviderGetTaskDetailGetRequest {
  starId: number | string;
  taskId: number | string;
}

export class StarMcnProviderGetTaskDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetTaskDetailGet(request: StarMcnProviderGetTaskDetailV2ApiOpenApi2StarMcnProviderGetTaskDetailGetRequest): Promise<StarMcnProviderGetTaskDetailV2Response> {
    const response = await this.openApi2StarMcnProviderGetTaskDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnProviderGetTaskDetailGetWithHttpInfo(request: StarMcnProviderGetTaskDetailV2ApiOpenApi2StarMcnProviderGetTaskDetailGetRequest): Promise<ApiResponse<StarMcnProviderGetTaskDetailV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.taskId == null) {
      throw new ApiException("taskId is required and must be specified");
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


