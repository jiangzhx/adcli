// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarFeCommonServiceTalentDayGetCheckInCodeV2Response } from "../models";


export class StarFeCommonServiceTalentDayGetCheckInCodeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarFeCommonServiceTalentDayGetCheckInCodeGet(sCoreUserId: number): Promise<StarFeCommonServiceTalentDayGetCheckInCodeV2Response> {
    const response = await this.openApi2StarFeCommonServiceTalentDayGetCheckInCodeGetWithHttpInfo(sCoreUserId);
    return response.data;
  }

  async openApi2StarFeCommonServiceTalentDayGetCheckInCodeGetWithHttpInfo(sCoreUserId: number): Promise<ApiResponse<StarFeCommonServiceTalentDayGetCheckInCodeV2Response>> {
    if (sCoreUserId == null) {
      throw new ApiException("Missing the required parameter 'sCoreUserId' when calling openApi2StarFeCommonServiceTalentDayGetCheckInCodeGet");
    }
    return this.apiClient.requestWithHttpInfo<StarFeCommonServiceTalentDayGetCheckInCodeV2Response>({
      method: "GET",
      path: "/open_api/2/star/fe_common_service/talent_day/get_check_in_code/",
      queryParams: [
        { name: "s_core_user_id", value: sCoreUserId }
      ]
    });
  }
}


