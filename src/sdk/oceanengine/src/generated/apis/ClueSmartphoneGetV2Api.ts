// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ClueSmartphoneGetV2IsDel, ClueSmartphoneGetV2Response } from "../models";


export class ClueSmartphoneGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueSmartphoneGetGet(advertiserId: number, endTime: string, instanceIds: number[], isDel: ClueSmartphoneGetV2IsDel, page: number, pageSize: number, startTime: string): Promise<ClueSmartphoneGetV2Response> {
    const response = await this.openApi2ClueSmartphoneGetGetWithHttpInfo(advertiserId, endTime, instanceIds, isDel, page, pageSize, startTime);
    return response.data;
  }

  async openApi2ClueSmartphoneGetGetWithHttpInfo(advertiserId: number, endTime: string, instanceIds: number[], isDel: ClueSmartphoneGetV2IsDel, page: number, pageSize: number, startTime: string): Promise<ApiResponse<ClueSmartphoneGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueSmartphoneGetV2Response>({
      method: "GET",
      path: "/open_api/2/clue/smartphone/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "end_time", value: endTime },
        { name: "is_del", value: isDel },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "start_time", value: startTime },
        { name: "instance_ids", value: instanceIds, collectionFormat: "multi" }
      ]
    });
  }
}


