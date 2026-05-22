// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerAuthGetAllPublicKeysV2Response } from "../models";


export interface OpenApi2EventManagerAuthGetAllPublicKeysGetRequest {
  advertiserId: number | string;
}

export class EventManagerAuthGetAllPublicKeysV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerAuthGetAllPublicKeysGet(request: OpenApi2EventManagerAuthGetAllPublicKeysGetRequest): Promise<EventManagerAuthGetAllPublicKeysV2Response> {
    const response = await this.openApi2EventManagerAuthGetAllPublicKeysGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerAuthGetAllPublicKeysGetWithHttpInfo(request: OpenApi2EventManagerAuthGetAllPublicKeysGetRequest): Promise<ApiResponse<EventManagerAuthGetAllPublicKeysV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2EventManagerAuthGetAllPublicKeysGet");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerAuthGetAllPublicKeysV2Response>({
      method: "GET",
      path: "/open_api/2/event_manager/auth/get_all_public_keys/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


