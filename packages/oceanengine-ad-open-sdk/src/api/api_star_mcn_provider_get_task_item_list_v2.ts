// Generated from oceanengine/ad_open_sdk_go api/api_star_mcn_provider_get_task_item_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarMcnProviderGetTaskItemListV2Response } from "../models/index";


export interface StarMcnProviderGetTaskItemListV2ApiOpenApi2StarMcnProviderGetTaskItemListGetRequest {
  starId: number | string;
  taskId: number | string;
  page: number;
  limit: number;
  providerConfirming?: boolean;
}

export class StarMcnProviderGetTaskItemListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetTaskItemListGet(request: StarMcnProviderGetTaskItemListV2ApiOpenApi2StarMcnProviderGetTaskItemListGetRequest): Promise<StarMcnProviderGetTaskItemListV2Response> {
    const response = await this.openApi2StarMcnProviderGetTaskItemListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnProviderGetTaskItemListGetWithHttpInfo(request: StarMcnProviderGetTaskItemListV2ApiOpenApi2StarMcnProviderGetTaskItemListGetRequest): Promise<ApiResponse<StarMcnProviderGetTaskItemListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnProviderGetTaskItemListGet");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarMcnProviderGetTaskItemListGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarMcnProviderGetTaskItemListGet");
    }

    if (request.limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarMcnProviderGetTaskItemListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnProviderGetTaskItemListV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/provider_get_task_item_list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "task_id", value: request.taskId },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit },
        { name: "provider_confirming", value: request.providerConfirming }
      ]
    });
  }
}


