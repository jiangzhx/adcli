// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerAbnormalAssetsGetV30PageInfo, EventManagerAbnormalAssetsGetV30Response } from "../models";


export class EventManagerAbnormalAssetsGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30EventManagerAbnormalAssetsGetGet(advertiserId: string, pageInfo: EventManagerAbnormalAssetsGetV30PageInfo): Promise<EventManagerAbnormalAssetsGetV30Response> {
    const response = await this.openApiV30EventManagerAbnormalAssetsGetGetWithHttpInfo(advertiserId, pageInfo);
    return response.data;
  }

  async openApiV30EventManagerAbnormalAssetsGetGetWithHttpInfo(advertiserId: string, pageInfo: EventManagerAbnormalAssetsGetV30PageInfo): Promise<ApiResponse<EventManagerAbnormalAssetsGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30EventManagerAbnormalAssetsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerAbnormalAssetsGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/event_manager/abnormal_assets/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page_info", value: pageInfo }
      ]
    });
  }
}


