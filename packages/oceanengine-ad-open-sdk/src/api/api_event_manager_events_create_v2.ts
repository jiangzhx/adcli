// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_events_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerEventsCreateV2Request, EventManagerEventsCreateV2Response } from "../models/index";


export interface EventManagerEventsCreateV2ApiOpenApi2EventManagerEventsCreatePostRequest {
  eventManagerEventsCreateV2Request?: EventManagerEventsCreateV2Request;
}

export class EventManagerEventsCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerEventsCreatePost(request: EventManagerEventsCreateV2ApiOpenApi2EventManagerEventsCreatePostRequest): Promise<EventManagerEventsCreateV2Response> {
    const response = await this.openApi2EventManagerEventsCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerEventsCreatePostWithHttpInfo(request: EventManagerEventsCreateV2ApiOpenApi2EventManagerEventsCreatePostRequest): Promise<ApiResponse<EventManagerEventsCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<EventManagerEventsCreateV2Response>({
      method: "POST",
      path: "/open_api/2/event_manager/events/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.eventManagerEventsCreateV2Request
    });
  }
}


