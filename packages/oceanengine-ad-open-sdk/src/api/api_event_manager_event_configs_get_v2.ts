// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_event_configs_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerEventConfigsGetV2Response, EventManagerEventConfigsGetV2SortType } from "../models/index";


export interface EventManagerEventConfigsGetV2ApiOpenApi2EventManagerEventConfigsGetGetRequest {
  advertiserId: number | string;
  assetId: number | string;
  sortType?: EventManagerEventConfigsGetV2SortType;
}

export class EventManagerEventConfigsGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerEventConfigsGetGet(request: EventManagerEventConfigsGetV2ApiOpenApi2EventManagerEventConfigsGetGetRequest): Promise<EventManagerEventConfigsGetV2Response> {
    const response = await this.openApi2EventManagerEventConfigsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerEventConfigsGetGetWithHttpInfo(request: EventManagerEventConfigsGetV2ApiOpenApi2EventManagerEventConfigsGetGetRequest): Promise<ApiResponse<EventManagerEventConfigsGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.assetId == null) {
      throw new ApiException("assetId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerEventConfigsGetV2Response>({
      method: "GET",
      path: "/open_api/2/event_manager/event_configs/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "asset_id", value: request.assetId },
        { name: "sort_type", value: request.sortType }
      ]
    });
  }
}


