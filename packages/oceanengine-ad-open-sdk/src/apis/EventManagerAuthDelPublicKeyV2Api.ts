// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerAuthDelPublicKeyV2Request, EventManagerAuthDelPublicKeyV2Response } from "../models";


export interface OpenApi2EventManagerAuthDelPublicKeyPostRequest {
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

  async openApi2EventManagerAuthDelPublicKeyPost(request: OpenApi2EventManagerAuthDelPublicKeyPostRequest): Promise<EventManagerAuthDelPublicKeyV2Response> {
    const response = await this.openApi2EventManagerAuthDelPublicKeyPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerAuthDelPublicKeyPostWithHttpInfo(request: OpenApi2EventManagerAuthDelPublicKeyPostRequest): Promise<ApiResponse<EventManagerAuthDelPublicKeyV2Response>> {

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


