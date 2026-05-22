// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_auth_enable_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerAuthEnableV2Request, EventManagerAuthEnableV2Response } from "../models/index";


export interface EventManagerAuthEnableV2ApiOpenApi2EventManagerAuthEnablePostRequest {
  eventManagerAuthEnableV2Request?: EventManagerAuthEnableV2Request;
}

export class EventManagerAuthEnableV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerAuthEnablePost(request: EventManagerAuthEnableV2ApiOpenApi2EventManagerAuthEnablePostRequest): Promise<EventManagerAuthEnableV2Response> {
    const response = await this.openApi2EventManagerAuthEnablePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerAuthEnablePostWithHttpInfo(request: EventManagerAuthEnableV2ApiOpenApi2EventManagerAuthEnablePostRequest): Promise<ApiResponse<EventManagerAuthEnableV2Response>> {

    return this.apiClient.requestWithHttpInfo<EventManagerAuthEnableV2Response>({
      method: "POST",
      path: "/open_api/2/event_manager/auth/enable/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.eventManagerAuthEnableV2Request
    });
  }
}


