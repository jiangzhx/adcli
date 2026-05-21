// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { EventManagerAuthDisableV2Request, EventManagerAuthDisableV2Response } from "../models";


export class EventManagerAuthDisableV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerAuthDisablePost(eventManagerAuthDisableV2Request: EventManagerAuthDisableV2Request): Promise<EventManagerAuthDisableV2Response> {
    const response = await this.openApi2EventManagerAuthDisablePostWithHttpInfo(eventManagerAuthDisableV2Request);
    return response.data;
  }

  async openApi2EventManagerAuthDisablePostWithHttpInfo(eventManagerAuthDisableV2Request: EventManagerAuthDisableV2Request): Promise<ApiResponse<EventManagerAuthDisableV2Response>> {

    return this.apiClient.requestWithHttpInfo<EventManagerAuthDisableV2Response>({
      method: "POST",
      path: "/open_api/2/event_manager/auth/disable/",
      queryParams: [

      ],
      body: eventManagerAuthDisableV2Request
    });
  }
}


