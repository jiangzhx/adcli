// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_track_url_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerTrackUrlUpdateV2Request, EventManagerTrackUrlUpdateV2Response } from "../models/index";


export interface EventManagerTrackUrlUpdateV2ApiOpenApi2EventManagerTrackUrlUpdatePostRequest {
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

  async openApi2EventManagerTrackUrlUpdatePost(request: EventManagerTrackUrlUpdateV2ApiOpenApi2EventManagerTrackUrlUpdatePostRequest): Promise<EventManagerTrackUrlUpdateV2Response> {
    const response = await this.openApi2EventManagerTrackUrlUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerTrackUrlUpdatePostWithHttpInfo(request: EventManagerTrackUrlUpdateV2ApiOpenApi2EventManagerTrackUrlUpdatePostRequest): Promise<ApiResponse<EventManagerTrackUrlUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<EventManagerTrackUrlUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/event_manager/track_url/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.eventManagerTrackUrlUpdateV2Request
    });
  }
}


