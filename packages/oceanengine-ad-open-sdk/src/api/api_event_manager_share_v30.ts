// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_share_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerShareV30Request, EventManagerShareV30Response } from "../models/index";


export interface EventManagerShareV30ApiOpenApiV30EventManagerSharePostRequest {
  eventManagerShareV30Request?: EventManagerShareV30Request;
}

export class EventManagerShareV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30EventManagerSharePost(request: EventManagerShareV30ApiOpenApiV30EventManagerSharePostRequest): Promise<EventManagerShareV30Response> {
    const response = await this.openApiV30EventManagerSharePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30EventManagerSharePostWithHttpInfo(request: EventManagerShareV30ApiOpenApiV30EventManagerSharePostRequest): Promise<ApiResponse<EventManagerShareV30Response>> {

    return this.apiClient.requestWithHttpInfo<EventManagerShareV30Response>({
      method: "POST",
      path: "/open_api/v3.0/event_manager/share/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.eventManagerShareV30Request
    });
  }
}


