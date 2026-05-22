// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsHotMaterialDeriveGetV30Response } from "../models";


export interface OpenApiV30ToolsHotMaterialDeriveGetGetRequest {
  advertiserId: number | string;
  taskIds: number | string[];
}

export class ToolsHotMaterialDeriveGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsHotMaterialDeriveGetGet(request: OpenApiV30ToolsHotMaterialDeriveGetGetRequest): Promise<ToolsHotMaterialDeriveGetV30Response> {
    const response = await this.openApiV30ToolsHotMaterialDeriveGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsHotMaterialDeriveGetGetWithHttpInfo(request: OpenApiV30ToolsHotMaterialDeriveGetGetRequest): Promise<ApiResponse<ToolsHotMaterialDeriveGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsHotMaterialDeriveGetGet");
    }

    if (request.taskIds == null) {
      throw new ApiException("Missing the required parameter 'taskIds' when calling openApiV30ToolsHotMaterialDeriveGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsHotMaterialDeriveGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/hot_material_derive/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "task_ids", value: request.taskIds, collectionFormat: "csv" }
      ]
    });
  }
}


