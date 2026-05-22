// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_auth_get_all_public_keys_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerAuthGetAllPublicKeysV2Response } from "../models/index";


export interface EventManagerAuthGetAllPublicKeysV2ApiOpenApi2EventManagerAuthGetAllPublicKeysGetRequest {
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

  async openApi2EventManagerAuthGetAllPublicKeysGet(request: EventManagerAuthGetAllPublicKeysV2ApiOpenApi2EventManagerAuthGetAllPublicKeysGetRequest): Promise<EventManagerAuthGetAllPublicKeysV2Response> {
    const response = await this.openApi2EventManagerAuthGetAllPublicKeysGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerAuthGetAllPublicKeysGetWithHttpInfo(request: EventManagerAuthGetAllPublicKeysV2ApiOpenApi2EventManagerAuthGetAllPublicKeysGetRequest): Promise<ApiResponse<EventManagerAuthGetAllPublicKeysV2Response>> {
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


