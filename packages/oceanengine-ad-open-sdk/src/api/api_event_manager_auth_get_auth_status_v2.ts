// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_auth_get_auth_status_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerAuthGetAuthStatusV2Response } from "../models/index";


export interface EventManagerAuthGetAuthStatusV2ApiOpenApi2EventManagerAuthGetAuthStatusGetRequest {
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

  async openApi2EventManagerAuthGetAuthStatusGet(request: EventManagerAuthGetAuthStatusV2ApiOpenApi2EventManagerAuthGetAuthStatusGetRequest): Promise<EventManagerAuthGetAuthStatusV2Response> {
    const response = await this.openApi2EventManagerAuthGetAuthStatusGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerAuthGetAuthStatusGetWithHttpInfo(request: EventManagerAuthGetAuthStatusV2ApiOpenApi2EventManagerAuthGetAuthStatusGetRequest): Promise<ApiResponse<EventManagerAuthGetAuthStatusV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


