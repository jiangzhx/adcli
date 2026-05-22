// Generated from oceanengine/ad_open_sdk_go api/api_tools_gray_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsGrayGetV30Response, ToolsGrayGetV30Version } from "../models/index";


export interface ToolsGrayGetV30ApiOpenApiV30ToolsGrayGetGetRequest {
  advertiserId: number | string;
  grayKeys: string[];
  version?: ToolsGrayGetV30Version;
}

export class ToolsGrayGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsGrayGetGet(request: ToolsGrayGetV30ApiOpenApiV30ToolsGrayGetGetRequest): Promise<ToolsGrayGetV30Response> {
    const response = await this.openApiV30ToolsGrayGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsGrayGetGetWithHttpInfo(request: ToolsGrayGetV30ApiOpenApiV30ToolsGrayGetGetRequest): Promise<ApiResponse<ToolsGrayGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsGrayGetGet");
    }

    if (request.grayKeys == null) {
      throw new ApiException("Missing the required parameter 'grayKeys' when calling openApiV30ToolsGrayGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsGrayGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/gray/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "gray_keys", value: request.grayKeys },
        { name: "version", value: request.version }
      ]
    });
  }
}


