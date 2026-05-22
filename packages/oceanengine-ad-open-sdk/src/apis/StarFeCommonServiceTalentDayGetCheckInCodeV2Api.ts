// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarFeCommonServiceTalentDayGetCheckInCodeV2Response } from "../models";


export interface OpenApi2StarFeCommonServiceTalentDayGetCheckInCodeGetRequest {
  sCoreUserId: number;
}

export class StarFeCommonServiceTalentDayGetCheckInCodeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarFeCommonServiceTalentDayGetCheckInCodeGet(request: OpenApi2StarFeCommonServiceTalentDayGetCheckInCodeGetRequest): Promise<StarFeCommonServiceTalentDayGetCheckInCodeV2Response> {
    const response = await this.openApi2StarFeCommonServiceTalentDayGetCheckInCodeGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarFeCommonServiceTalentDayGetCheckInCodeGetWithHttpInfo(request: OpenApi2StarFeCommonServiceTalentDayGetCheckInCodeGetRequest): Promise<ApiResponse<StarFeCommonServiceTalentDayGetCheckInCodeV2Response>> {
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


