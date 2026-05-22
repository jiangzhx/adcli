// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_track_url_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerTrackUrlCreateV2Request, EventManagerTrackUrlCreateV2Response } from "../models/index";


export interface EventManagerTrackUrlCreateV2ApiOpenApi2EventManagerTrackUrlCreatePostRequest {
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

  async openApi2EventManagerTrackUrlCreatePost(request: EventManagerTrackUrlCreateV2ApiOpenApi2EventManagerTrackUrlCreatePostRequest): Promise<EventManagerTrackUrlCreateV2Response> {
    const response = await this.openApi2EventManagerTrackUrlCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerTrackUrlCreatePostWithHttpInfo(request: EventManagerTrackUrlCreateV2ApiOpenApi2EventManagerTrackUrlCreatePostRequest): Promise<ApiResponse<EventManagerTrackUrlCreateV2Response>> {

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


