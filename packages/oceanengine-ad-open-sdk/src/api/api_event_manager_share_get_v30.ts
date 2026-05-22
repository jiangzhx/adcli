// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_share_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerShareGetV30Response } from "../models/index";


export interface EventManagerShareGetV30ApiOpenApiV30EventManagerShareGetGetRequest {
  organizationId: number | string;
  assetId: number | string;
  page?: number;
  pageSize?: number;
}

export class EventManagerShareGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30EventManagerShareGetGet(request: EventManagerShareGetV30ApiOpenApiV30EventManagerShareGetGetRequest): Promise<EventManagerShareGetV30Response> {
    const response = await this.openApiV30EventManagerShareGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30EventManagerShareGetGetWithHttpInfo(request: EventManagerShareGetV30ApiOpenApiV30EventManagerShareGetGetRequest): Promise<ApiResponse<EventManagerShareGetV30Response>> {
    if (request.organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling openApiV30EventManagerShareGetGet");
    }

    if (request.assetId == null) {
      throw new ApiException("Missing the required parameter 'assetId' when calling openApiV30EventManagerShareGetGet");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerShareGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/event_manager/share/get/",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
        { name: "asset_id", value: request.assetId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


