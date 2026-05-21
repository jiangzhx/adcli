// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsMaterialRaiseGetV30Response } from "../models";


export class ToolsMaterialRaiseGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMaterialRaiseGetGet(advertiserId: number, projectIds: number[], page: number, pageSize: number): Promise<ToolsMaterialRaiseGetV30Response> {
    const response = await this.openApiV30ToolsMaterialRaiseGetGetWithHttpInfo(advertiserId, projectIds, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsMaterialRaiseGetGetWithHttpInfo(advertiserId: number, projectIds: number[], page: number, pageSize: number): Promise<ApiResponse<ToolsMaterialRaiseGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsMaterialRaiseGetGet");
    }

    if (projectIds == null) {
      throw new ApiException("Missing the required parameter 'projectIds' when calling openApiV30ToolsMaterialRaiseGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsMaterialRaiseGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/material_raise/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "project_ids", value: projectIds, collectionFormat: "csv" }
      ]
    });
  }
}


