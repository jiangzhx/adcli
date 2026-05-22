// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerAssetsCreateV2Request, EventManagerAssetsCreateV2Response } from "../models";


export interface OpenApi2EventManagerAssetsCreatePostRequest {
  eventManagerAssetsCreateV2Request?: EventManagerAssetsCreateV2Request;
}

export class EventManagerAssetsCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerAssetsCreatePost(request: OpenApi2EventManagerAssetsCreatePostRequest): Promise<EventManagerAssetsCreateV2Response> {
    const response = await this.openApi2EventManagerAssetsCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerAssetsCreatePostWithHttpInfo(request: OpenApi2EventManagerAssetsCreatePostRequest): Promise<ApiResponse<EventManagerAssetsCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<EventManagerAssetsCreateV2Response>({
      method: "POST",
      path: "/open_api/2/event_manager/assets/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.eventManagerAssetsCreateV2Request
    });
  }
}


