// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsMaterialRaiseMaterialIdsGetV30Response } from "../models";


export interface OpenApiV30ToolsMaterialRaiseMaterialIdsGetGetRequest {
  advertiserId: number;
  scheduleId: number;
}

export class ToolsMaterialRaiseMaterialIdsGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMaterialRaiseMaterialIdsGetGet(request: OpenApiV30ToolsMaterialRaiseMaterialIdsGetGetRequest): Promise<ToolsMaterialRaiseMaterialIdsGetV30Response> {
    const response = await this.openApiV30ToolsMaterialRaiseMaterialIdsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMaterialRaiseMaterialIdsGetGetWithHttpInfo(request: OpenApiV30ToolsMaterialRaiseMaterialIdsGetGetRequest): Promise<ApiResponse<ToolsMaterialRaiseMaterialIdsGetV30Response>> {
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


