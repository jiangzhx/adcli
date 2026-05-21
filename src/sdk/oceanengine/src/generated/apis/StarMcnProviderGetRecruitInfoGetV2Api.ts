// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarMcnProviderGetRecruitInfoGetV2Response } from "../models";


export class StarMcnProviderGetRecruitInfoGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetRecruitInfoGetGet(starId: number, taskId: number): Promise<StarMcnProviderGetRecruitInfoGetV2Response> {
    const response = await this.openApi2StarMcnProviderGetRecruitInfoGetGetWithHttpInfo(starId, taskId);
    return response.data;
  }

  async openApi2StarMcnProviderGetRecruitInfoGetGetWithHttpInfo(starId: number, taskId: number): Promise<ApiResponse<StarMcnProviderGetRecruitInfoGetV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnProviderGetRecruitInfoGetGet");
    }

    if (taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarMcnProviderGetRecruitInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnProviderGetRecruitInfoGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/provider_get_recruit_info/get/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "task_id", value: taskId }
      ]
    });
  }
}


