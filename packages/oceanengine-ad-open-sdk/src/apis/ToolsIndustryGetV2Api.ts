// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsIndustryGetV2Level, ToolsIndustryGetV2Response, ToolsIndustryGetV2Type } from "../models";


export interface OpenApi2ToolsIndustryGetGetRequest {
  level?: ToolsIndustryGetV2Level;
  type_?: ToolsIndustryGetV2Type;
}

export class ToolsIndustryGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsIndustryGetGet(request: OpenApi2ToolsIndustryGetGetRequest): Promise<ToolsIndustryGetV2Response> {
    const response = await this.openApi2ToolsIndustryGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsIndustryGetGetWithHttpInfo(request: OpenApi2ToolsIndustryGetGetRequest): Promise<ApiResponse<ToolsIndustryGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsIndustryGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/industry/get/",
      queryParams: [
        { name: "level", value: request.level },
        { name: "type", value: request.type_ }
      ]
    });
  }
}


