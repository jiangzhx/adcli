// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { EventManagerTrackUrlGetV2Response } from "../models";


export class EventManagerTrackUrlGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EventManagerTrackUrlGetGet(advertiserId: number, assetId: number, downloadUrl: string, trackUrlGroupName: string, trackUrlGroupId: number, page: number, pageSize: number): Promise<EventManagerTrackUrlGetV2Response> {
    const response = await this.openApi2EventManagerTrackUrlGetGetWithHttpInfo(advertiserId, assetId, downloadUrl, trackUrlGroupName, trackUrlGroupId, page, pageSize);
    return response.data;
  }

  async openApi2EventManagerTrackUrlGetGetWithHttpInfo(advertiserId: number, assetId: number, downloadUrl: string, trackUrlGroupName: string, trackUrlGroupId: number, page: number, pageSize: number): Promise<ApiResponse<EventManagerTrackUrlGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2EventManagerTrackUrlGetGet");
    }

    if (assetId == null) {
      throw new ApiException("Missing the required parameter 'assetId' when calling openApi2EventManagerTrackUrlGetGet");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerTrackUrlGetV2Response>({
      method: "GET",
      path: "/open_api/2/event_manager/track_url/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "asset_id", value: assetId },
        { name: "download_url", value: downloadUrl },
        { name: "track_url_group_name", value: trackUrlGroupName },
        { name: "track_url_group_id", value: trackUrlGroupId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


