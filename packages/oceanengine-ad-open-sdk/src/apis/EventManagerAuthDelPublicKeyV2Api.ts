// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerAuthDelPublicKeyV2Request, EventManagerAuthDelPublicKeyV2Response } from "../models";


export class EventManagerAuthDelPublicKeyV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerAuthDelPublicKeyPost(request: EventManagerAuthDelPublicKeyV2Request): Promise<EventManagerAuthDelPublicKeyV2Response> {
    const response = await this.openApi2EventManagerAuthDelPublicKeyPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerAuthDelPublicKeyPostWithHttpInfo(request: EventManagerAuthDelPublicKeyV2Request): Promise<ApiResponse<EventManagerAuthDelPublicKeyV2Response>> {
    return this.apiClient.requestWithHttpInfo<EventManagerAuthDelPublicKeyV2Response>({
      method: "POST",
      path: "/open_api/2/event_manager/auth/del_public_key/",
      queryParams: [

      ],
      body: request
    });
  }
}


