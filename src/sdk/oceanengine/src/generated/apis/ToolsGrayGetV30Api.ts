// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsGrayGetV30Response, ToolsGrayGetV30Version } from "../models";


export class ToolsGrayGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsGrayGetGet(advertiserId: number, grayKeys: string[], version: ToolsGrayGetV30Version): Promise<ToolsGrayGetV30Response> {
    const response = await this.openApiV30ToolsGrayGetGetWithHttpInfo(advertiserId, grayKeys, version);
    return response.data;
  }

  async openApiV30ToolsGrayGetGetWithHttpInfo(advertiserId: number, grayKeys: string[], version: ToolsGrayGetV30Version): Promise<ApiResponse<ToolsGrayGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsGrayGetGet");
    }

    if (grayKeys == null) {
      throw new ApiException("Missing the required parameter 'grayKeys' when calling openApiV30ToolsGrayGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsGrayGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/gray/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "version", value: version },
        { name: "gray_keys", value: grayKeys, collectionFormat: "csv" }
      ]
    });
  }
}


