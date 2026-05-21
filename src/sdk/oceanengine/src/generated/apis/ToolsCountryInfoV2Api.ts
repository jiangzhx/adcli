// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsCountryInfoV2Language, ToolsCountryInfoV2Response } from "../models";


export class ToolsCountryInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsCountryInfoGet(advertiserId: number, language: ToolsCountryInfoV2Language): Promise<ToolsCountryInfoV2Response> {
    const response = await this.openApi2ToolsCountryInfoGetWithHttpInfo(advertiserId, language);
    return response.data;
  }

  async openApi2ToolsCountryInfoGetWithHttpInfo(advertiserId: number, language: ToolsCountryInfoV2Language): Promise<ApiResponse<ToolsCountryInfoV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsCountryInfoGet");
    }

    if (language == null) {
      throw new ApiException("Missing the required parameter 'language' when calling openApi2ToolsCountryInfoGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsCountryInfoV2Response>({
      method: "GET",
      path: "/open_api/2/tools/country/info/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "language", value: language }
      ]
    });
  }
}


