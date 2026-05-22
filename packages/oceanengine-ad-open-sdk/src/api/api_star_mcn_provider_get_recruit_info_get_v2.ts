// Generated from oceanengine/ad_open_sdk_go api/api_star_mcn_provider_get_recruit_info_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarMcnProviderGetRecruitInfoGetV2Response } from "../models/index";


export interface StarMcnProviderGetRecruitInfoGetV2ApiOpenApi2StarMcnProviderGetRecruitInfoGetGetRequest {
  starId: number | string;
  taskId: number | string;
}

export class StarMcnProviderGetRecruitInfoGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetRecruitInfoGetGet(request: StarMcnProviderGetRecruitInfoGetV2ApiOpenApi2StarMcnProviderGetRecruitInfoGetGetRequest): Promise<StarMcnProviderGetRecruitInfoGetV2Response> {
    const response = await this.openApi2StarMcnProviderGetRecruitInfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnProviderGetRecruitInfoGetGetWithHttpInfo(request: StarMcnProviderGetRecruitInfoGetV2ApiOpenApi2StarMcnProviderGetRecruitInfoGetGetRequest): Promise<ApiResponse<StarMcnProviderGetRecruitInfoGetV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.taskId == null) {
      throw new ApiException("taskId is required and must be specified");
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


