// Generated from oceanengine/ad_open_sdk_go api/api_star_fe_common_service_talent_day_judge_checked_in_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarFeCommonServiceTalentDayJudgeCheckedInV2Response } from "../models/index";


export interface StarFeCommonServiceTalentDayJudgeCheckedInV2ApiOpenApi2StarFeCommonServiceTalentDayJudgeCheckedInGetRequest {
  code: string;
}

export class StarFeCommonServiceTalentDayJudgeCheckedInV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarFeCommonServiceTalentDayJudgeCheckedInGet(request: StarFeCommonServiceTalentDayJudgeCheckedInV2ApiOpenApi2StarFeCommonServiceTalentDayJudgeCheckedInGetRequest): Promise<StarFeCommonServiceTalentDayJudgeCheckedInV2Response> {
    const response = await this.openApi2StarFeCommonServiceTalentDayJudgeCheckedInGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarFeCommonServiceTalentDayJudgeCheckedInGetWithHttpInfo(request: StarFeCommonServiceTalentDayJudgeCheckedInV2ApiOpenApi2StarFeCommonServiceTalentDayJudgeCheckedInGetRequest): Promise<ApiResponse<StarFeCommonServiceTalentDayJudgeCheckedInV2Response>> {
    if (request.code == null) {
      throw new ApiException("Missing the required parameter 'code' when calling openApi2StarFeCommonServiceTalentDayJudgeCheckedInGet");
    }
    return this.apiClient.requestWithHttpInfo<StarFeCommonServiceTalentDayJudgeCheckedInV2Response>({
      method: "GET",
      path: "/open_api/2/star/fe_common_service/talent_day/judge_checked_in/",
      queryParams: [
        { name: "code", value: request.code }
      ]
    });
  }
}


