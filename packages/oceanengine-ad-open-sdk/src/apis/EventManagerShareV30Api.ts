// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerShareV30Request, EventManagerShareV30Response } from "../models";


export class EventManagerShareV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30EventManagerSharePost(eventManagerShareV30Request: EventManagerShareV30Request): Promise<EventManagerShareV30Response> {
    const response = await this.openApiV30EventManagerSharePostWithHttpInfo(eventManagerShareV30Request);
    return response.data;
  }

  async openApiV30EventManagerSharePostWithHttpInfo(eventManagerShareV30Request: EventManagerShareV30Request): Promise<ApiResponse<EventManagerShareV30Response>> {

    return this.apiClient.requestWithHttpInfo<EventManagerShareV30Response>({
      method: "POST",
      path: "/open_api/v3.0/event_manager/share/",
      queryParams: [

      ],
      body: eventManagerShareV30Request
    });
  }
}


