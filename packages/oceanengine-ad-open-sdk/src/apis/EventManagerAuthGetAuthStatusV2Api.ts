// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerAuthGetAuthStatusV2Response } from "../models";


export interface OpenApi2EventManagerAuthGetAuthStatusGetRequest {
  advertiserId: number | string;
}

export class EventManagerAuthGetAuthStatusV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerAuthGetAuthStatusGet(request: OpenApi2EventManagerAuthGetAuthStatusGetRequest): Promise<EventManagerAuthGetAuthStatusV2Response> {
    const response = await this.openApi2EventManagerAuthGetAuthStatusGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerAuthGetAuthStatusGetWithHttpInfo(request: OpenApi2EventManagerAuthGetAuthStatusGetRequest): Promise<ApiResponse<EventManagerAuthGetAuthStatusV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2EventManagerAuthGetAuthStatusGet");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerAuthGetAuthStatusV2Response>({
      method: "GET",
      path: "/open_api/2/event_manager/auth/get_auth_status/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


