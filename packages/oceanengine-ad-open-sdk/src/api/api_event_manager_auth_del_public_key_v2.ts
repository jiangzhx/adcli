// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_auth_del_public_key_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerAuthDelPublicKeyV2Request, EventManagerAuthDelPublicKeyV2Response } from "../models/index";


export interface EventManagerAuthDelPublicKeyV2ApiOpenApi2EventManagerAuthDelPublicKeyPostRequest {
  eventManagerAuthDelPublicKeyV2Request?: EventManagerAuthDelPublicKeyV2Request;
}

export class EventManagerAuthDelPublicKeyV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerAuthDelPublicKeyPost(request: EventManagerAuthDelPublicKeyV2ApiOpenApi2EventManagerAuthDelPublicKeyPostRequest): Promise<EventManagerAuthDelPublicKeyV2Response> {
    const response = await this.openApi2EventManagerAuthDelPublicKeyPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerAuthDelPublicKeyPostWithHttpInfo(request: EventManagerAuthDelPublicKeyV2ApiOpenApi2EventManagerAuthDelPublicKeyPostRequest): Promise<ApiResponse<EventManagerAuthDelPublicKeyV2Response>> {

    return this.apiClient.requestWithHttpInfo<EventManagerAuthDelPublicKeyV2Response>({
      method: "POST",
      path: "/open_api/2/event_manager/auth/del_public_key/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.eventManagerAuthDelPublicKeyV2Request
    });
  }
}


