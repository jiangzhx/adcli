// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnProviderGetTaskAuthorListV2Response } from "../models";


export interface OpenApi2StarMcnProviderGetTaskAuthorListGetRequest {
  starId: number;
  taskId: number;
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

  async openApi2StarMcnProviderGetTaskAuthorListGet(request: OpenApi2StarMcnProviderGetTaskAuthorListGetRequest): Promise<StarMcnProviderGetTaskAuthorListV2Response> {
    const response = await this.openApi2StarMcnProviderGetTaskAuthorListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnProviderGetTaskAuthorListGetWithHttpInfo(request: OpenApi2StarMcnProviderGetTaskAuthorListGetRequest): Promise<ApiResponse<StarMcnProviderGetTaskAuthorListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnProviderGetTaskAuthorListGet");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarMcnProviderGetTaskAuthorListGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarMcnProviderGetTaskAuthorListGet");
    }

    if (request.limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarMcnProviderGetTaskAuthorListGet");
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


