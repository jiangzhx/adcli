// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { EventManagerTrackUrlCreateV2Request, EventManagerTrackUrlCreateV2Response } from "../models";


export class EventManagerTrackUrlCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerTrackUrlCreatePost(eventManagerTrackUrlCreateV2Request: EventManagerTrackUrlCreateV2Request): Promise<EventManagerTrackUrlCreateV2Response> {
    const response = await this.openApi2EventManagerTrackUrlCreatePostWithHttpInfo(eventManagerTrackUrlCreateV2Request);
    return response.data;
  }

  async openApi2EventManagerTrackUrlCreatePostWithHttpInfo(eventManagerTrackUrlCreateV2Request: EventManagerTrackUrlCreateV2Request): Promise<ApiResponse<EventManagerTrackUrlCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<EventManagerTrackUrlCreateV2Response>({
      method: "POST",
      path: "/open_api/2/event_manager/track_url/create/",
      queryParams: [

      ],
      body: eventManagerTrackUrlCreateV2Request
    });
  }
}


