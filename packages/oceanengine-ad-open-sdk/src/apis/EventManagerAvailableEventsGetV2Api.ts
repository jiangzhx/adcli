// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerAvailableEventsGetV2Response } from "../models";


export class EventManagerAvailableEventsGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerAvailableEventsGetGet(advertiserId: number, assetId: number): Promise<EventManagerAvailableEventsGetV2Response> {
    const response = await this.openApi2EventManagerAvailableEventsGetGetWithHttpInfo(advertiserId, assetId);
    return response.data;
  }

  async openApi2EventManagerAvailableEventsGetGetWithHttpInfo(advertiserId: number, assetId: number): Promise<ApiResponse<EventManagerAvailableEventsGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2EventManagerAvailableEventsGetGet");
    }

    if (assetId == null) {
      throw new ApiException("Missing the required parameter 'assetId' when calling openApi2EventManagerAvailableEventsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerAvailableEventsGetV2Response>({
      method: "GET",
      path: "/open_api/2/event_manager/available_events/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "asset_id", value: assetId }
      ]
    });
  }
}


