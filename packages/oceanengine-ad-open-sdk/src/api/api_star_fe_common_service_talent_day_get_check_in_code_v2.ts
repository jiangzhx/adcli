// Generated from oceanengine/ad_open_sdk_go api/api_star_fe_common_service_talent_day_get_check_in_code_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarFeCommonServiceTalentDayGetCheckInCodeV2Response } from "../models/index";


export interface StarFeCommonServiceTalentDayGetCheckInCodeV2ApiOpenApi2StarFeCommonServiceTalentDayGetCheckInCodeGetRequest {
  sCoreUserId: number | string;
}

export class StarFeCommonServiceTalentDayGetCheckInCodeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarFeCommonServiceTalentDayGetCheckInCodeGet(request: StarFeCommonServiceTalentDayGetCheckInCodeV2ApiOpenApi2StarFeCommonServiceTalentDayGetCheckInCodeGetRequest): Promise<StarFeCommonServiceTalentDayGetCheckInCodeV2Response> {
    const response = await this.openApi2StarFeCommonServiceTalentDayGetCheckInCodeGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarFeCommonServiceTalentDayGetCheckInCodeGetWithHttpInfo(request: StarFeCommonServiceTalentDayGetCheckInCodeV2ApiOpenApi2StarFeCommonServiceTalentDayGetCheckInCodeGetRequest): Promise<ApiResponse<StarFeCommonServiceTalentDayGetCheckInCodeV2Response>> {
    if (request.sCoreUserId == null) {
      throw new ApiException("Missing the required parameter 'sCoreUserId' when calling openApi2StarFeCommonServiceTalentDayGetCheckInCodeGet");
    }
    return this.apiClient.requestWithHttpInfo<StarFeCommonServiceTalentDayGetCheckInCodeV2Response>({
      method: "GET",
      path: "/open_api/2/star/fe_common_service/talent_day/get_check_in_code/",
      queryParams: [
        { name: "s_core_user_id", value: request.sCoreUserId }
      ]
    });
  }
}


