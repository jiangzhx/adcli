// Generated from oceanengine/ad_open_sdk_go api/api_tools_material_raise_status_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsMaterialRaiseStatusGetV30Response } from "../models/index";


export interface ToolsMaterialRaiseStatusGetV30ApiOpenApiV30ToolsMaterialRaiseStatusGetGetRequest {
  advertiserId: number | string;
  projectIds: (number | string)[];
}

export class ToolsMaterialRaiseStatusGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMaterialRaiseStatusGetGet(request: ToolsMaterialRaiseStatusGetV30ApiOpenApiV30ToolsMaterialRaiseStatusGetGetRequest): Promise<ToolsMaterialRaiseStatusGetV30Response> {
    const response = await this.openApiV30ToolsMaterialRaiseStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMaterialRaiseStatusGetGetWithHttpInfo(request: ToolsMaterialRaiseStatusGetV30ApiOpenApiV30ToolsMaterialRaiseStatusGetGetRequest): Promise<ApiResponse<ToolsMaterialRaiseStatusGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.projectIds == null) {
      throw new ApiException("projectIds is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsMaterialRaiseStatusGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/material_raise_status/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "project_ids", value: request.projectIds }
      ]
    });
  }
}


