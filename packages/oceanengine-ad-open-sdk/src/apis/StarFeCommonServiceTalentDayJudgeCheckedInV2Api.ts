// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarFeCommonServiceTalentDayJudgeCheckedInV2Response } from "../models";


export class StarFeCommonServiceTalentDayJudgeCheckedInV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarFeCommonServiceTalentDayJudgeCheckedInGet(code: string): Promise<StarFeCommonServiceTalentDayJudgeCheckedInV2Response> {
    const response = await this.openApi2StarFeCommonServiceTalentDayJudgeCheckedInGetWithHttpInfo(code);
    return response.data;
  }

  async openApi2StarFeCommonServiceTalentDayJudgeCheckedInGetWithHttpInfo(code: string): Promise<ApiResponse<StarFeCommonServiceTalentDayJudgeCheckedInV2Response>> {
    if (code == null) {
      throw new ApiException("Missing the required parameter 'code' when calling openApi2StarFeCommonServiceTalentDayJudgeCheckedInGet");
    }
    return this.apiClient.requestWithHttpInfo<StarFeCommonServiceTalentDayJudgeCheckedInV2Response>({
      method: "GET",
      path: "/open_api/2/star/fe_common_service/talent_day/judge_checked_in/",
      queryParams: [
        { name: "code", value: code }
      ]
    });
  }
}


