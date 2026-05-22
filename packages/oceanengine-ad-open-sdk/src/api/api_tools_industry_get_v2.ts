// Generated from oceanengine/ad_open_sdk_go api/api_tools_industry_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsIndustryGetV2Level, ToolsIndustryGetV2Response, ToolsIndustryGetV2Type } from "../models/index";


export interface ToolsIndustryGetV2ApiOpenApi2ToolsIndustryGetGetRequest {
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

  async openApi2ToolsIndustryGetGet(request: ToolsIndustryGetV2ApiOpenApi2ToolsIndustryGetGetRequest): Promise<ToolsIndustryGetV2Response> {
    const response = await this.openApi2ToolsIndustryGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsIndustryGetGetWithHttpInfo(request: ToolsIndustryGetV2ApiOpenApi2ToolsIndustryGetGetRequest): Promise<ApiResponse<ToolsIndustryGetV2Response>> {

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


