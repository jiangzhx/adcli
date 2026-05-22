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
      throw new ApiException("starId is required and must be specified");
    }

    if (request.taskId == null) {
      throw new ApiException("taskId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.page != null && Number(request.page) < 1) {
      throw new ApiException("page must be greater than 1");
    }

    if (request.limit == null) {
      throw new ApiException("limit is required and must be specified");
    }

    if (request.limit != null && Number(request.limit) < 1) {
      throw new ApiException("limit must be greater than 1");
    }

    if (request.limit != null && Number(request.limit) > 30) {
      throw new ApiException("limit must be less than 30");
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


