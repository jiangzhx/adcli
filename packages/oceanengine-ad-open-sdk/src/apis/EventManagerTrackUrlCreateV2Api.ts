// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerTrackUrlCreateV2Request, EventManagerTrackUrlCreateV2Response } from "../models";


export interface OpenApi2EventManagerTrackUrlCreatePostRequest {
  eventManagerTrackUrlCreateV2Request?: EventManagerTrackUrlCreateV2Request;
}

export class EventManagerTrackUrlCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerTrackUrlCreatePost(request: OpenApi2EventManagerTrackUrlCreatePostRequest): Promise<EventManagerTrackUrlCreateV2Response> {
    const response = await this.openApi2EventManagerTrackUrlCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerTrackUrlCreatePostWithHttpInfo(request: OpenApi2EventManagerTrackUrlCreatePostRequest): Promise<ApiResponse<EventManagerTrackUrlCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<EventManagerTrackUrlCreateV2Response>({
      method: "POST",
      path: "/open_api/2/event_manager/track_url/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.eventManagerTrackUrlCreateV2Request
    });
  }
}


