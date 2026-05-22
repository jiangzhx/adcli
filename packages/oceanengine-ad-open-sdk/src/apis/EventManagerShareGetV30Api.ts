// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerShareGetV30Response } from "../models";


export class EventManagerShareGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30EventManagerShareGetGet(organizationId: number, assetId: number, page: number, pageSize: number): Promise<EventManagerShareGetV30Response> {
    const response = await this.openApiV30EventManagerShareGetGetWithHttpInfo(organizationId, assetId, page, pageSize);
    return response.data;
  }

  async openApiV30EventManagerShareGetGetWithHttpInfo(organizationId: number, assetId: number, page: number, pageSize: number): Promise<ApiResponse<EventManagerShareGetV30Response>> {
    if (organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling openApiV30EventManagerShareGetGet");
    }

    if (assetId == null) {
      throw new ApiException("Missing the required parameter 'assetId' when calling openApiV30EventManagerShareGetGet");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerShareGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/event_manager/share/get/",
      queryParams: [
        { name: "organization_id", value: organizationId },
        { name: "asset_id", value: assetId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


