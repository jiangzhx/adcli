// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { EventManagerAuthAddPublicKeyV2Request, EventManagerAuthAddPublicKeyV2Response } from "../models";


export class EventManagerAuthAddPublicKeyV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerAuthAddPublicKeyPost(eventManagerAuthAddPublicKeyV2Request: EventManagerAuthAddPublicKeyV2Request): Promise<EventManagerAuthAddPublicKeyV2Response> {
    const response = await this.openApi2EventManagerAuthAddPublicKeyPostWithHttpInfo(eventManagerAuthAddPublicKeyV2Request);
    return response.data;
  }

  async openApi2EventManagerAuthAddPublicKeyPostWithHttpInfo(eventManagerAuthAddPublicKeyV2Request: EventManagerAuthAddPublicKeyV2Request): Promise<ApiResponse<EventManagerAuthAddPublicKeyV2Response>> {

    return this.apiClient.requestWithHttpInfo<EventManagerAuthAddPublicKeyV2Response>({
      method: "POST",
      path: "/open_api/2/event_manager/auth/add_public_key/",
      queryParams: [

      ],
      body: eventManagerAuthAddPublicKeyV2Request
    });
  }
}


