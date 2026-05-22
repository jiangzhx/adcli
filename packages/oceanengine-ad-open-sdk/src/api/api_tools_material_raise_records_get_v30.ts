// Generated from oceanengine/ad_open_sdk_go api/api_tools_material_raise_records_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsMaterialRaiseRecordsGetV30Response, ToolsMaterialRaiseRecordsGetV30Status } from "../models/index";


export interface ToolsMaterialRaiseRecordsGetV30ApiOpenApiV30ToolsMaterialRaiseRecordsGetGetRequest {
  advertiserId: number | string;
  projectIds: number | string[];
  status?: ToolsMaterialRaiseRecordsGetV30Status[];
  page?: number;
  pageSize?: number;
}

export class ToolsMaterialRaiseRecordsGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMaterialRaiseRecordsGetGet(request: ToolsMaterialRaiseRecordsGetV30ApiOpenApiV30ToolsMaterialRaiseRecordsGetGetRequest): Promise<ToolsMaterialRaiseRecordsGetV30Response> {
    const response = await this.openApiV30ToolsMaterialRaiseRecordsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMaterialRaiseRecordsGetGetWithHttpInfo(request: ToolsMaterialRaiseRecordsGetV30ApiOpenApiV30ToolsMaterialRaiseRecordsGetGetRequest): Promise<ApiResponse<ToolsMaterialRaiseRecordsGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsMaterialRaiseRecordsGetGet");
    }

    if (request.projectIds == null) {
      throw new ApiException("Missing the required parameter 'projectIds' when calling openApiV30ToolsMaterialRaiseRecordsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsMaterialRaiseRecordsGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/material_raise_records/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "project_ids", value: request.projectIds, collectionFormat: "csv" },
        { name: "status", value: request.status, collectionFormat: "csv" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


