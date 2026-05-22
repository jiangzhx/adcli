// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerAvailableEventsGetV2Response } from "../models";


export interface OpenApi2EventManagerAvailableEventsGetGetRequest {
  advertiserId: number | string;
  assetId: number | string;
}

export class EventManagerAvailableEventsGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerAvailableEventsGetGet(request: OpenApi2EventManagerAvailableEventsGetGetRequest): Promise<EventManagerAvailableEventsGetV2Response> {
    const response = await this.openApi2EventManagerAvailableEventsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerAvailableEventsGetGetWithHttpInfo(request: OpenApi2EventManagerAvailableEventsGetGetRequest): Promise<ApiResponse<EventManagerAvailableEventsGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2EventManagerAvailableEventsGetGet");
    }

    if (request.assetId == null) {
      throw new ApiException("Missing the required parameter 'assetId' when calling openApi2EventManagerAvailableEventsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerAvailableEventsGetV2Response>({
      method: "GET",
      path: "/open_api/2/event_manager/available_events/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "asset_id", value: request.assetId }
      ]
    });
  }
}


