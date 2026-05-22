// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsGrayGetV30Response, ToolsGrayGetV30Version } from "../models";


export interface OpenApiV30ToolsGrayGetGetRequest {
  advertiserId: number;
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

  async openApiV30ToolsGrayGetGet(request: OpenApiV30ToolsGrayGetGetRequest): Promise<ToolsGrayGetV30Response> {
    const response = await this.openApiV30ToolsGrayGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsGrayGetGetWithHttpInfo(request: OpenApiV30ToolsGrayGetGetRequest): Promise<ApiResponse<ToolsGrayGetV30Response>> {
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
        { name: "gray_keys", value: request.grayKeys, collectionFormat: "csv" },
        { name: "version", value: request.version }
      ]
    });
  }
}


