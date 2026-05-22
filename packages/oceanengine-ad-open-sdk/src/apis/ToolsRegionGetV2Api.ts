// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsRegionGetV2RegionLevel, ToolsRegionGetV2RegionType, ToolsRegionGetV2Response } from "../models";


export interface OpenApi2ToolsRegionGetGetRequest {
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

  async openApi2ToolsRegionGetGet(request: OpenApi2ToolsRegionGetGetRequest): Promise<ToolsRegionGetV2Response> {
    const response = await this.openApi2ToolsRegionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRegionGetGetWithHttpInfo(request: OpenApi2ToolsRegionGetGetRequest): Promise<ApiResponse<ToolsRegionGetV2Response>> {

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


