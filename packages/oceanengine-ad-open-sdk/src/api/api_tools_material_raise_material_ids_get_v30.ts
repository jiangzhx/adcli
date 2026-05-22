// Generated from oceanengine/ad_open_sdk_go api/api_tools_material_raise_material_ids_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsMaterialRaiseMaterialIdsGetV30Response } from "../models/index";


export interface ToolsMaterialRaiseMaterialIdsGetV30ApiOpenApiV30ToolsMaterialRaiseMaterialIdsGetGetRequest {
  advertiserId: number | string;
  scheduleId: number | string;
}

export class ToolsMaterialRaiseMaterialIdsGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMaterialRaiseMaterialIdsGetGet(request: ToolsMaterialRaiseMaterialIdsGetV30ApiOpenApiV30ToolsMaterialRaiseMaterialIdsGetGetRequest): Promise<ToolsMaterialRaiseMaterialIdsGetV30Response> {
    const response = await this.openApiV30ToolsMaterialRaiseMaterialIdsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMaterialRaiseMaterialIdsGetGetWithHttpInfo(request: ToolsMaterialRaiseMaterialIdsGetV30ApiOpenApiV30ToolsMaterialRaiseMaterialIdsGetGetRequest): Promise<ApiResponse<ToolsMaterialRaiseMaterialIdsGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsMaterialRaiseMaterialIdsGetGet");
    }

    if (request.scheduleId == null) {
      throw new ApiException("Missing the required parameter 'scheduleId' when calling openApiV30ToolsMaterialRaiseMaterialIdsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsMaterialRaiseMaterialIdsGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/material_raise/material_ids/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "schedule_id", value: request.scheduleId }
      ]
    });
  }
}


