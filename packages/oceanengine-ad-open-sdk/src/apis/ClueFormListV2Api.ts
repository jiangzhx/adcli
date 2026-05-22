// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueFormListV2IsDel, ClueFormListV2Response } from "../models";


export class ClueFormListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueFormListGet(advertiserId: number, endTime: string, instanceIds: number[], isDel: ClueFormListV2IsDel, page: number, pageSize: number, startTime: string): Promise<ClueFormListV2Response> {
    const response = await this.openApi2ClueFormListGetWithHttpInfo(advertiserId, endTime, instanceIds, isDel, page, pageSize, startTime);
    return response.data;
  }

  async openApi2ClueFormListGetWithHttpInfo(advertiserId: number, endTime: string, instanceIds: number[], isDel: ClueFormListV2IsDel, page: number, pageSize: number, startTime: string): Promise<ApiResponse<ClueFormListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueFormListV2Response>({
      method: "GET",
      path: "/open_api/2/clue/form/list/",
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


