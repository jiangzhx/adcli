// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerTrackUrlUpdateV2Request, EventManagerTrackUrlUpdateV2Response } from "../models";


export interface OpenApi2EventManagerTrackUrlUpdatePostRequest {
  eventManagerTrackUrlUpdateV2Request?: EventManagerTrackUrlUpdateV2Request;
}

export class EventManagerTrackUrlUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerTrackUrlUpdatePost(request: OpenApi2EventManagerTrackUrlUpdatePostRequest): Promise<EventManagerTrackUrlUpdateV2Response> {
    const response = await this.openApi2EventManagerTrackUrlUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerTrackUrlUpdatePostWithHttpInfo(request: OpenApi2EventManagerTrackUrlUpdatePostRequest): Promise<ApiResponse<EventManagerTrackUrlUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<EventManagerTrackUrlUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/event_manager/track_url/update/",
      queryParams: [

      ],
      body: request.eventManagerTrackUrlUpdateV2Request
    });
  }
}


