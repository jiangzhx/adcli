// Generated from oceanengine/ad_open_sdk_go api/api_clue_smartphone_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueSmartphoneGetV2IsDel, ClueSmartphoneGetV2Response } from "../models/index";


export interface ClueSmartphoneGetV2ApiOpenApi2ClueSmartphoneGetGetRequest {
  advertiserId?: number | string;
  endTime?: string;
  instanceIds?: number | string[];
  isDel?: ClueSmartphoneGetV2IsDel;
  page?: number;
  pageSize?: number;
  startTime?: string;
}

export class ClueSmartphoneGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueSmartphoneGetGet(request: ClueSmartphoneGetV2ApiOpenApi2ClueSmartphoneGetGetRequest): Promise<ClueSmartphoneGetV2Response> {
    const response = await this.openApi2ClueSmartphoneGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueSmartphoneGetGetWithHttpInfo(request: ClueSmartphoneGetV2ApiOpenApi2ClueSmartphoneGetGetRequest): Promise<ApiResponse<ClueSmartphoneGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueSmartphoneGetV2Response>({
      method: "GET",
      path: "/open_api/2/clue/smartphone/get/",
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


