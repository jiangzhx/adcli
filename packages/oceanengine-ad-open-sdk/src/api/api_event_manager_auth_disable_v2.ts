// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_auth_disable_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerAuthDisableV2Request, EventManagerAuthDisableV2Response } from "../models/index";


export interface EventManagerAuthDisableV2ApiOpenApi2EventManagerAuthDisablePostRequest {
  eventManagerAuthDisableV2Request?: EventManagerAuthDisableV2Request;
}

export class EventManagerAuthDisableV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerAuthDisablePost(request: EventManagerAuthDisableV2ApiOpenApi2EventManagerAuthDisablePostRequest): Promise<EventManagerAuthDisableV2Response> {
    const response = await this.openApi2EventManagerAuthDisablePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerAuthDisablePostWithHttpInfo(request: EventManagerAuthDisableV2ApiOpenApi2EventManagerAuthDisablePostRequest): Promise<ApiResponse<EventManagerAuthDisableV2Response>> {

    return this.apiClient.requestWithHttpInfo<EventManagerAuthDisableV2Response>({
      method: "POST",
      path: "/open_api/2/event_manager/auth/disable/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.eventManagerAuthDisableV2Request
    });
  }
}


