// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueFormListV2IsDel, ClueFormListV2Response } from "../models";


export interface OpenApi2ClueFormListGetRequest {
  advertiserId?: number;
  endTime?: string;
  instanceIds?: number[];
  isDel?: ClueFormListV2IsDel;
  page?: number;
  pageSize?: number;
  startTime?: string;
}

export class ClueFormListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueFormListGet(request: OpenApi2ClueFormListGetRequest): Promise<ClueFormListV2Response> {
    const response = await this.openApi2ClueFormListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueFormListGetWithHttpInfo(request: OpenApi2ClueFormListGetRequest): Promise<ApiResponse<ClueFormListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueFormListV2Response>({
      method: "GET",
      path: "/open_api/2/clue/form/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "end_time", value: request.endTime },
        { name: "instance_ids", value: request.instanceIds, collectionFormat: "csv" },
        { name: "is_del", value: request.isDel },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "start_time", value: request.startTime }
      ]
    });
  }
}


