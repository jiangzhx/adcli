// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerShareCancelV30Request, EventManagerShareCancelV30Response } from "../models";


export class EventManagerShareCancelV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30EventManagerShareCancelPost(eventManagerShareCancelV30Request: EventManagerShareCancelV30Request): Promise<EventManagerShareCancelV30Response> {
    const response = await this.openApiV30EventManagerShareCancelPostWithHttpInfo(eventManagerShareCancelV30Request);
    return response.data;
  }

  async openApiV30EventManagerShareCancelPostWithHttpInfo(eventManagerShareCancelV30Request: EventManagerShareCancelV30Request): Promise<ApiResponse<EventManagerShareCancelV30Response>> {

    return this.apiClient.requestWithHttpInfo<EventManagerShareCancelV30Response>({
      method: "POST",
      path: "/open_api/v3.0/event_manager/share/cancel/",
      queryParams: [

      ],
      body: eventManagerShareCancelV30Request
    });
  }
}


