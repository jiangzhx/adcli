// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerAuthEnableV2Request, EventManagerAuthEnableV2Response } from "../models";


export class EventManagerAuthEnableV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerAuthEnablePost(request: EventManagerAuthEnableV2Request): Promise<EventManagerAuthEnableV2Response> {
    const response = await this.openApi2EventManagerAuthEnablePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerAuthEnablePostWithHttpInfo(request: EventManagerAuthEnableV2Request): Promise<ApiResponse<EventManagerAuthEnableV2Response>> {
    return this.apiClient.requestWithHttpInfo<EventManagerAuthEnableV2Response>({
      method: "POST",
      path: "/open_api/2/event_manager/auth/enable/",
      queryParams: [

      ],
      body: request
    });
  }
}


