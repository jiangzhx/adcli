// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnProviderGetRecruitInfoGetV2Response } from "../models";


export interface OpenApi2StarMcnProviderGetRecruitInfoGetGetRequest {
  starId: number;
  taskId: number;
}

export class StarMcnProviderGetRecruitInfoGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetRecruitInfoGetGet(request: OpenApi2StarMcnProviderGetRecruitInfoGetGetRequest): Promise<StarMcnProviderGetRecruitInfoGetV2Response> {
    const response = await this.openApi2StarMcnProviderGetRecruitInfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnProviderGetRecruitInfoGetGetWithHttpInfo(request: OpenApi2StarMcnProviderGetRecruitInfoGetGetRequest): Promise<ApiResponse<StarMcnProviderGetRecruitInfoGetV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnProviderGetRecruitInfoGetGet");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarMcnProviderGetRecruitInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnProviderGetRecruitInfoGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/provider_get_recruit_info/get/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "task_id", value: request.taskId }
      ]
    });
  }
}


