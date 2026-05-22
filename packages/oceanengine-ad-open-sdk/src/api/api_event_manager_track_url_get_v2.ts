// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_track_url_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerTrackUrlGetV2Response } from "../models/index";


export interface EventManagerTrackUrlGetV2ApiOpenApi2EventManagerTrackUrlGetGetRequest {
  advertiserId: number | string;
  assetId: number | string;
  downloadUrl?: string;
  trackUrlGroupName?: string;
  trackUrlGroupId?: number | string;
  page?: number;
  pageSize?: number;
}

export class EventManagerTrackUrlGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerTrackUrlGetGet(request: EventManagerTrackUrlGetV2ApiOpenApi2EventManagerTrackUrlGetGetRequest): Promise<EventManagerTrackUrlGetV2Response> {
    const response = await this.openApi2EventManagerTrackUrlGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2EventManagerTrackUrlGetGetWithHttpInfo(request: EventManagerTrackUrlGetV2ApiOpenApi2EventManagerTrackUrlGetGetRequest): Promise<ApiResponse<EventManagerTrackUrlGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2EventManagerTrackUrlGetGet");
    }

    if (request.assetId == null) {
      throw new ApiException("Missing the required parameter 'assetId' when calling openApi2EventManagerTrackUrlGetGet");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerTrackUrlGetV2Response>({
      method: "GET",
      path: "/open_api/2/event_manager/track_url/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "asset_id", value: request.assetId },
        { name: "download_url", value: request.downloadUrl },
        { name: "track_url_group_name", value: request.trackUrlGroupName },
        { name: "track_url_group_id", value: request.trackUrlGroupId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


