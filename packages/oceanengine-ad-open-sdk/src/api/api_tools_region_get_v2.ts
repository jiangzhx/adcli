// Generated from oceanengine/ad_open_sdk_go api/api_tools_region_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsRegionGetV2RegionLevel, ToolsRegionGetV2RegionType, ToolsRegionGetV2Response } from "../models/index";


export interface ToolsRegionGetV2ApiOpenApi2ToolsRegionGetGetRequest {
  regionLevel?: ToolsRegionGetV2RegionLevel;
  regionType?: ToolsRegionGetV2RegionType;
}

export class ToolsRegionGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRegionGetGet(request: ToolsRegionGetV2ApiOpenApi2ToolsRegionGetGetRequest): Promise<ToolsRegionGetV2Response> {
    const response = await this.openApi2ToolsRegionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRegionGetGetWithHttpInfo(request: ToolsRegionGetV2ApiOpenApi2ToolsRegionGetGetRequest): Promise<ApiResponse<ToolsRegionGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsRegionGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/region/get/",
      queryParams: [
        { name: "region_level", value: request.regionLevel },
        { name: "region_type", value: request.regionType }
      ]
    });
  }
}


