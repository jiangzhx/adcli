// Generated from oceanengine/ad_open_sdk_go api/api_tools_country_info_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsCountryInfoV2Language, ToolsCountryInfoV2Response } from "../models/index";


export interface ToolsCountryInfoV2ApiOpenApi2ToolsCountryInfoGetRequest {
  advertiserId: number | string;
  language: ToolsCountryInfoV2Language;
}

export class ToolsCountryInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsCountryInfoGet(request: ToolsCountryInfoV2ApiOpenApi2ToolsCountryInfoGetRequest): Promise<ToolsCountryInfoV2Response> {
    const response = await this.openApi2ToolsCountryInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsCountryInfoGetWithHttpInfo(request: ToolsCountryInfoV2ApiOpenApi2ToolsCountryInfoGetRequest): Promise<ApiResponse<ToolsCountryInfoV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsCountryInfoGet");
    }

    if (request.language == null) {
      throw new ApiException("Missing the required parameter 'language' when calling openApi2ToolsCountryInfoGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsCountryInfoV2Response>({
      method: "GET",
      path: "/open_api/2/tools/country/info/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "language", value: request.language }
      ]
    });
  }
}


