// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPlayableValidateV2Response } from "../models";


export class ToolsPlayableValidateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPlayableValidateGet(advertiserId: number, playableId: number): Promise<ToolsPlayableValidateV2Response> {
    const response = await this.openApi2ToolsPlayableValidateGetWithHttpInfo(advertiserId, playableId);
    return response.data;
  }

  async openApi2ToolsPlayableValidateGetWithHttpInfo(advertiserId: number, playableId: number): Promise<ApiResponse<ToolsPlayableValidateV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsPlayableValidateGet");
    }

    if (playableId == null) {
      throw new ApiException("Missing the required parameter 'playableId' when calling openApi2ToolsPlayableValidateGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPlayableValidateV2Response>({
      method: "GET",
      path: "/open_api/2/tools/playable/validate/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "playable_id", value: playableId }
      ]
    });
  }
}


