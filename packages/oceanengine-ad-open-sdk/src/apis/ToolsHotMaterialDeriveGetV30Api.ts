// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsHotMaterialDeriveGetV30Response } from "../models";


export class ToolsHotMaterialDeriveGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsHotMaterialDeriveGetGet(advertiserId: number, taskIds: number[]): Promise<ToolsHotMaterialDeriveGetV30Response> {
    const response = await this.openApiV30ToolsHotMaterialDeriveGetGetWithHttpInfo(advertiserId, taskIds);
    return response.data;
  }

  async openApiV30ToolsHotMaterialDeriveGetGetWithHttpInfo(advertiserId: number, taskIds: number[]): Promise<ApiResponse<ToolsHotMaterialDeriveGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsHotMaterialDeriveGetGet");
    }

    if (taskIds == null) {
      throw new ApiException("Missing the required parameter 'taskIds' when calling openApiV30ToolsHotMaterialDeriveGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsHotMaterialDeriveGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/hot_material_derive/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "task_ids", value: taskIds, collectionFormat: "csv" }
      ]
    });
  }
}


