// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerEventConfigsGetV2Response, EventManagerEventConfigsGetV2SortType } from "../models";


export class EventManagerEventConfigsGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerEventConfigsGetGet(advertiserId: number, assetId: number, sortType: EventManagerEventConfigsGetV2SortType): Promise<EventManagerEventConfigsGetV2Response> {
    const response = await this.openApi2EventManagerEventConfigsGetGetWithHttpInfo(advertiserId, assetId, sortType);
    return response.data;
  }

  async openApi2EventManagerEventConfigsGetGetWithHttpInfo(advertiserId: number, assetId: number, sortType: EventManagerEventConfigsGetV2SortType): Promise<ApiResponse<EventManagerEventConfigsGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2EventManagerEventConfigsGetGet");
    }

    if (assetId == null) {
      throw new ApiException("Missing the required parameter 'assetId' when calling openApi2EventManagerEventConfigsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerEventConfigsGetV2Response>({
      method: "GET",
      path: "/open_api/2/event_manager/event_configs/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "asset_id", value: assetId },
        { name: "sort_type", value: sortType }
      ]
    });
  }
}


