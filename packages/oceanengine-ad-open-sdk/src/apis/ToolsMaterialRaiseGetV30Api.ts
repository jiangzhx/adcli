// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsMaterialRaiseGetV30Response } from "../models";


export interface OpenApiV30ToolsMaterialRaiseGetGetRequest {
  advertiserId: number;
  projectIds: number[];
  page?: number;
  pageSize?: number;
}

export class ToolsMaterialRaiseGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMaterialRaiseGetGet(request: OpenApiV30ToolsMaterialRaiseGetGetRequest): Promise<ToolsMaterialRaiseGetV30Response> {
    const response = await this.openApiV30ToolsMaterialRaiseGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMaterialRaiseGetGetWithHttpInfo(request: OpenApiV30ToolsMaterialRaiseGetGetRequest): Promise<ApiResponse<ToolsMaterialRaiseGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsMaterialRaiseGetGet");
    }

    if (request.projectIds == null) {
      throw new ApiException("Missing the required parameter 'projectIds' when calling openApiV30ToolsMaterialRaiseGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsMaterialRaiseGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/material_raise/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "project_ids", value: request.projectIds, collectionFormat: "csv" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


