// Generated from oceanengine/ad_open_sdk_go api/api_star_mcn_provider_get_participated_task_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarMcnProviderGetParticipatedTaskV2Response } from "../models/index";


export interface StarMcnProviderGetParticipatedTaskV2ApiOpenApi2StarMcnProviderGetParticipatedTaskGetRequest {
  starId: number | string;
  page: number;
  pageSize: number;
  providerOrderTaskStatus?: number;
  providerTaskCategory?: number;
  isComicTask?: boolean;
}

export class StarMcnProviderGetParticipatedTaskV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetParticipatedTaskGet(request: StarMcnProviderGetParticipatedTaskV2ApiOpenApi2StarMcnProviderGetParticipatedTaskGetRequest): Promise<StarMcnProviderGetParticipatedTaskV2Response> {
    const response = await this.openApi2StarMcnProviderGetParticipatedTaskGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnProviderGetParticipatedTaskGetWithHttpInfo(request: StarMcnProviderGetParticipatedTaskV2ApiOpenApi2StarMcnProviderGetParticipatedTaskGetRequest): Promise<ApiResponse<StarMcnProviderGetParticipatedTaskV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnProviderGetParticipatedTaskGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarMcnProviderGetParticipatedTaskGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2StarMcnProviderGetParticipatedTaskGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnProviderGetParticipatedTaskV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/provider_get_participated_task/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "provider_order_task_status", value: request.providerOrderTaskStatus },
        { name: "provider_task_category", value: request.providerTaskCategory },
        { name: "is_comic_task", value: request.isComicTask }
      ]
    });
  }
}


