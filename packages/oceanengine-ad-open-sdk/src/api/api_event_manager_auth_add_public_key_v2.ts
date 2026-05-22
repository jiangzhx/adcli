// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_auth_add_public_key_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerAuthAddPublicKeyV2Request, EventManagerAuthAddPublicKeyV2Response } from "../models/index";


export interface EventManagerAuthAddPublicKeyV2ApiOpenApi2EventManagerAuthAddPublicKeyPostRequest {
  eventManagerAuthAddPublicKeyV2Request?: EventManagerAuthAddPublicKeyV2Request;
}

export class EventManagerAuthAddPublicKeyV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerAuthAddPublicKeyPost(request: EventManagerAuthAddPublicKeyV2ApiOpenApi2EventManagerAuthAddPublicKeyPostRequest): Promise<EventManagerAuthAddPublicKeyV2Response> {
    const response = await this.openApi2EventManagerAuthAddPublicKeyPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerAuthAddPublicKeyPostWithHttpInfo(request: EventManagerAuthAddPublicKeyV2ApiOpenApi2EventManagerAuthAddPublicKeyPostRequest): Promise<ApiResponse<EventManagerAuthAddPublicKeyV2Response>> {

    return this.apiClient.requestWithHttpInfo<EventManagerAuthAddPublicKeyV2Response>({
      method: "POST",
      path: "/open_api/2/event_manager/auth/add_public_key/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.eventManagerAuthAddPublicKeyV2Request
    });
  }
}


