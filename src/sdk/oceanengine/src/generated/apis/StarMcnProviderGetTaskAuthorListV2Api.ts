// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarMcnProviderGetTaskAuthorListV2Response } from "../models";


export class StarMcnProviderGetTaskAuthorListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetTaskAuthorListGet(starId: number, taskId: number, page: number, limit: number, authorOrderStatus: number): Promise<StarMcnProviderGetTaskAuthorListV2Response> {
    const response = await this.openApi2StarMcnProviderGetTaskAuthorListGetWithHttpInfo(starId, taskId, page, limit, authorOrderStatus);
    return response.data;
  }

  async openApi2StarMcnProviderGetTaskAuthorListGetWithHttpInfo(starId: number, taskId: number, page: number, limit: number, authorOrderStatus: number): Promise<ApiResponse<StarMcnProviderGetTaskAuthorListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnProviderGetTaskAuthorListGet");
    }

    if (taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarMcnProviderGetTaskAuthorListGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarMcnProviderGetTaskAuthorListGet");
    }

    if (limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarMcnProviderGetTaskAuthorListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnProviderGetTaskAuthorListV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/provider_get_task_author_list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "task_id", value: taskId },
        { name: "author_order_status", value: authorOrderStatus },
        { name: "page", value: page },
        { name: "limit", value: limit }
      ]
    });
  }
}


