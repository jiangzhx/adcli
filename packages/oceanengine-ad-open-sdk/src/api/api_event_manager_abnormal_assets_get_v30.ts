// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_abnormal_assets_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerAbnormalAssetsGetV30PageInfo, EventManagerAbnormalAssetsGetV30Response } from "../models/index";


export interface EventManagerAbnormalAssetsGetV30ApiOpenApiV30EventManagerAbnormalAssetsGetGetRequest {
  advertiserId: string;
  pageInfo?: EventManagerAbnormalAssetsGetV30PageInfo;
}

export class EventManagerAbnormalAssetsGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30EventManagerAbnormalAssetsGetGet(request: EventManagerAbnormalAssetsGetV30ApiOpenApiV30EventManagerAbnormalAssetsGetGetRequest): Promise<EventManagerAbnormalAssetsGetV30Response> {
    const response = await this.openApiV30EventManagerAbnormalAssetsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30EventManagerAbnormalAssetsGetGetWithHttpInfo(request: EventManagerAbnormalAssetsGetV30ApiOpenApiV30EventManagerAbnormalAssetsGetGetRequest): Promise<ApiResponse<EventManagerAbnormalAssetsGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30EventManagerAbnormalAssetsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerAbnormalAssetsGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/event_manager/abnormal_assets/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page_info", value: request.pageInfo }
      ]
    });
  }
}


