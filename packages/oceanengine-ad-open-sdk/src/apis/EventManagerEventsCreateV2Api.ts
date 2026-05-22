// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerEventsCreateV2Request, EventManagerEventsCreateV2Response } from "../models";


export class EventManagerEventsCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerEventsCreatePost(request: EventManagerEventsCreateV2Request): Promise<EventManagerEventsCreateV2Response> {
    const response = await this.openApi2EventManagerEventsCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerEventsCreatePostWithHttpInfo(request: EventManagerEventsCreateV2Request): Promise<ApiResponse<EventManagerEventsCreateV2Response>> {
    return this.apiClient.requestWithHttpInfo<EventManagerEventsCreateV2Response>({
      method: "POST",
      path: "/open_api/2/event_manager/events/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


