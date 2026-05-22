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
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.advertiserId != null && Number(request.advertiserId) > 9223372036854775807) {
      throw new ApiException("advertiserId must be less than 9223372036854775807");
    }

    if (request.assetId == null) {
      throw new ApiException("assetId is required and must be specified");
    }

    if (request.assetId != null && Number(request.assetId) < 1) {
      throw new ApiException("assetId must be greater than 1");
    }

    if (request.assetId != null && Number(request.assetId) > 9223372036854775807) {
      throw new ApiException("assetId must be less than 9223372036854775807");
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


