// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ClueSmartphoneRecordV2Response } from "../models";


export class ClueSmartphoneRecordV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueSmartphoneRecordGet(advertiserId: number, instanceIds: number[], clueIds: number[], siteIds: number[], adIds: number[], startTime: string, endTime: string, page: number, pageSize: number): Promise<ClueSmartphoneRecordV2Response> {
    const response = await this.openApi2ClueSmartphoneRecordGetWithHttpInfo(advertiserId, instanceIds, clueIds, siteIds, adIds, startTime, endTime, page, pageSize);
    return response.data;
  }

  async openApi2ClueSmartphoneRecordGetWithHttpInfo(advertiserId: number, instanceIds: number[], clueIds: number[], siteIds: number[], adIds: number[], startTime: string, endTime: string, page: number, pageSize: number): Promise<ApiResponse<ClueSmartphoneRecordV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ClueSmartphoneRecordGet");
    }
    return this.apiClient.requestWithHttpInfo<ClueSmartphoneRecordV2Response>({
      method: "GET",
      path: "/open_api/2/clue/smartphone/record/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "instance_ids", value: instanceIds, collectionFormat: "csv" },
        { name: "clue_ids", value: clueIds, collectionFormat: "csv" },
        { name: "site_ids", value: siteIds, collectionFormat: "csv" },
        { name: "ad_ids", value: adIds, collectionFormat: "csv" }
      ]
    });
  }
}


