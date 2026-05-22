// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnProviderGetParticipatedTaskV2Response } from "../models";


export class StarMcnProviderGetParticipatedTaskV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetParticipatedTaskGet(starId: number, page: number, pageSize: number, providerOrderTaskStatus: number, providerTaskCategory: number, isComicTask: boolean): Promise<StarMcnProviderGetParticipatedTaskV2Response> {
    const response = await this.openApi2StarMcnProviderGetParticipatedTaskGetWithHttpInfo(starId, page, pageSize, providerOrderTaskStatus, providerTaskCategory, isComicTask);
    return response.data;
  }

  async openApi2StarMcnProviderGetParticipatedTaskGetWithHttpInfo(starId: number, page: number, pageSize: number, providerOrderTaskStatus: number, providerTaskCategory: number, isComicTask: boolean): Promise<ApiResponse<StarMcnProviderGetParticipatedTaskV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnProviderGetParticipatedTaskGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarMcnProviderGetParticipatedTaskGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2StarMcnProviderGetParticipatedTaskGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnProviderGetParticipatedTaskV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/provider_get_participated_task/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "provider_order_task_status", value: providerOrderTaskStatus },
        { name: "provider_task_category", value: providerTaskCategory },
        { name: "is_comic_task", value: isComicTask }
      ]
    });
  }
}


