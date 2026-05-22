// Generated from oceanengine/ad_open_sdk_go api/api_tools_hot_material_derive_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsHotMaterialDeriveGetV30Response } from "../models/index";


export interface ToolsHotMaterialDeriveGetV30ApiOpenApiV30ToolsHotMaterialDeriveGetGetRequest {
  advertiserId: number | string;
  taskIds: (number | string)[];
}

export class ToolsHotMaterialDeriveGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsHotMaterialDeriveGetGet(request: ToolsHotMaterialDeriveGetV30ApiOpenApiV30ToolsHotMaterialDeriveGetGetRequest): Promise<ToolsHotMaterialDeriveGetV30Response> {
    const response = await this.openApiV30ToolsHotMaterialDeriveGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsHotMaterialDeriveGetGetWithHttpInfo(request: ToolsHotMaterialDeriveGetV30ApiOpenApiV30ToolsHotMaterialDeriveGetGetRequest): Promise<ApiResponse<ToolsHotMaterialDeriveGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.taskIds == null) {
      throw new ApiException("taskIds is required and must be specified");
    }

    if (request.taskIds != null && request.taskIds.length < 1) {
      throw new ApiException("taskIds must have at least 1 elements");
    }

    if (request.taskIds != null && request.taskIds.length > 50) {
      throw new ApiException("taskIds must have less than 50 elements");
    }
    return this.apiClient.requestWithHttpInfo<ToolsHotMaterialDeriveGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/hot_material_derive/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "task_ids", value: request.taskIds }
      ]
    });
  }
}


