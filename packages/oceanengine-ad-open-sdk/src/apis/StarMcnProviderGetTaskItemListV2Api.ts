// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnProviderGetTaskItemListV2Response } from "../models";


export class StarMcnProviderGetTaskItemListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetTaskItemListGet(starId: number, taskId: number, page: number, limit: number, providerConfirming: boolean): Promise<StarMcnProviderGetTaskItemListV2Response> {
    const response = await this.openApi2StarMcnProviderGetTaskItemListGetWithHttpInfo(starId, taskId, page, limit, providerConfirming);
    return response.data;
  }

  async openApi2StarMcnProviderGetTaskItemListGetWithHttpInfo(starId: number, taskId: number, page: number, limit: number, providerConfirming: boolean): Promise<ApiResponse<StarMcnProviderGetTaskItemListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnProviderGetTaskItemListGet");
    }

    if (taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarMcnProviderGetTaskItemListGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarMcnProviderGetTaskItemListGet");
    }

    if (limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarMcnProviderGetTaskItemListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnProviderGetTaskItemListV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/provider_get_task_item_list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "task_id", value: taskId },
        { name: "page", value: page },
        { name: "limit", value: limit },
        { name: "provider_confirming", value: providerConfirming }
      ]
    });
  }
}


