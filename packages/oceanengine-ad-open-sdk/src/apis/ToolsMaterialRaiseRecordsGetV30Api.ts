// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsMaterialRaiseRecordsGetV30Response, ToolsMaterialRaiseRecordsGetV30Status } from "../models";


export class ToolsMaterialRaiseRecordsGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMaterialRaiseRecordsGetGet(advertiserId: number, projectIds: number[], status: ToolsMaterialRaiseRecordsGetV30Status[], page: number, pageSize: number): Promise<ToolsMaterialRaiseRecordsGetV30Response> {
    const response = await this.openApiV30ToolsMaterialRaiseRecordsGetGetWithHttpInfo(advertiserId, projectIds, status, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsMaterialRaiseRecordsGetGetWithHttpInfo(advertiserId: number, projectIds: number[], status: ToolsMaterialRaiseRecordsGetV30Status[], page: number, pageSize: number): Promise<ApiResponse<ToolsMaterialRaiseRecordsGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsMaterialRaiseRecordsGetGet");
    }

    if (projectIds == null) {
      throw new ApiException("Missing the required parameter 'projectIds' when calling openApiV30ToolsMaterialRaiseRecordsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsMaterialRaiseRecordsGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/material_raise_records/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "project_ids", value: projectIds, collectionFormat: "csv" },
        { name: "status", value: status, collectionFormat: "csv" }
      ]
    });
  }
}


