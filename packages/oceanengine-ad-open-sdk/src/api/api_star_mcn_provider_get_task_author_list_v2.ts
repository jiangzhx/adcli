// Generated from oceanengine/ad_open_sdk_go api/api_star_mcn_provider_get_task_author_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarMcnProviderGetTaskAuthorListV2Response } from "../models/index";


export interface StarMcnProviderGetTaskAuthorListV2ApiOpenApi2StarMcnProviderGetTaskAuthorListGetRequest {
  starId: number | string;
  taskId: number | string;
  page: number;
  limit: number;
  authorOrderStatus?: number;
}

export class StarMcnProviderGetTaskAuthorListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetTaskAuthorListGet(request: StarMcnProviderGetTaskAuthorListV2ApiOpenApi2StarMcnProviderGetTaskAuthorListGetRequest): Promise<StarMcnProviderGetTaskAuthorListV2Response> {
    const response = await this.openApi2StarMcnProviderGetTaskAuthorListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnProviderGetTaskAuthorListGetWithHttpInfo(request: StarMcnProviderGetTaskAuthorListV2ApiOpenApi2StarMcnProviderGetTaskAuthorListGetRequest): Promise<ApiResponse<StarMcnProviderGetTaskAuthorListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.taskId == null) {
      throw new ApiException("taskId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.limit == null) {
      throw new ApiException("limit is required and must be specified");
    }

    if (request.limit != null && Number(request.limit) < 1) {
      throw new ApiException("limit must be greater than 1");
    }

    if (request.limit != null && Number(request.limit) > 50) {
      throw new ApiException("limit must be less than 50");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnProviderGetTaskAuthorListV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/provider_get_task_author_list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "task_id", value: request.taskId },
        { name: "author_order_status", value: request.authorOrderStatus },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


