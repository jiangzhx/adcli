// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_auth_get_public_key_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerAuthGetPublicKeyV2Response } from "../models/index";


export interface EventManagerAuthGetPublicKeyV2ApiOpenApi2EventManagerAuthGetPublicKeyGetRequest {
  advertiserId: number | string;
  credential: string;
}

export class EventManagerAuthGetPublicKeyV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerAuthGetPublicKeyGet(request: EventManagerAuthGetPublicKeyV2ApiOpenApi2EventManagerAuthGetPublicKeyGetRequest): Promise<EventManagerAuthGetPublicKeyV2Response> {
    const response = await this.openApi2EventManagerAuthGetPublicKeyGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerAuthGetPublicKeyGetWithHttpInfo(request: EventManagerAuthGetPublicKeyV2ApiOpenApi2EventManagerAuthGetPublicKeyGetRequest): Promise<ApiResponse<EventManagerAuthGetPublicKeyV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2EventManagerAuthGetPublicKeyGet");
    }

    if (request.credential == null) {
      throw new ApiException("Missing the required parameter 'credential' when calling openApi2EventManagerAuthGetPublicKeyGet");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerAuthGetPublicKeyV2Response>({
      method: "GET",
      path: "/open_api/2/event_manager/auth/get_public_key/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "credential", value: request.credential }
      ]
    });
  }
}


