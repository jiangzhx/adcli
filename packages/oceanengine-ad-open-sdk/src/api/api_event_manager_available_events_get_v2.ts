// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_available_events_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerAvailableEventsGetV2Response } from "../models/index";


export interface EventManagerAvailableEventsGetV2ApiOpenApi2EventManagerAvailableEventsGetGetRequest {
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

  async openApi2EventManagerAvailableEventsGetGet(request: EventManagerAvailableEventsGetV2ApiOpenApi2EventManagerAvailableEventsGetGetRequest): Promise<EventManagerAvailableEventsGetV2Response> {
    const response = await this.openApi2EventManagerAvailableEventsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerAvailableEventsGetGetWithHttpInfo(request: EventManagerAvailableEventsGetV2ApiOpenApi2EventManagerAvailableEventsGetGetRequest): Promise<ApiResponse<EventManagerAvailableEventsGetV2Response>> {
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


