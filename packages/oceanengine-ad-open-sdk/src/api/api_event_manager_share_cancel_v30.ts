// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_share_cancel_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerShareCancelV30Request, EventManagerShareCancelV30Response } from "../models/index";


export interface EventManagerShareCancelV30ApiOpenApiV30EventManagerShareCancelPostRequest {
  eventManagerShareCancelV30Request?: EventManagerShareCancelV30Request;
}

export class EventManagerShareCancelV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30EventManagerShareCancelPost(request: EventManagerShareCancelV30ApiOpenApiV30EventManagerShareCancelPostRequest): Promise<EventManagerShareCancelV30Response> {
    const response = await this.openApiV30EventManagerShareCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30EventManagerShareCancelPostWithHttpInfo(request: EventManagerShareCancelV30ApiOpenApiV30EventManagerShareCancelPostRequest): Promise<ApiResponse<EventManagerShareCancelV30Response>> {

    return this.apiClient.requestWithHttpInfo<EventManagerShareCancelV30Response>({
      method: "POST",
      path: "/open_api/v3.0/event_manager/share/cancel/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.eventManagerShareCancelV30Request
    });
  }
}


