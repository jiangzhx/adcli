// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserInfoV2Response } from "../models";


export interface OpenApi2AdvertiserInfoGetRequest {
  advertiserIds?: number[];
  fields?: string[];
}

export class AdvertiserInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserInfoGet(request: OpenApi2AdvertiserInfoGetRequest): Promise<AdvertiserInfoV2Response> {
    const response = await this.openApi2AdvertiserInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserInfoGetWithHttpInfo(request: OpenApi2AdvertiserInfoGetRequest): Promise<ApiResponse<AdvertiserInfoV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserInfoV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/info/",
      queryParams: [
        { name: "advertiser_ids", value: request.advertiserIds, collectionFormat: "csv" },
        { name: "fields", value: request.fields, collectionFormat: "csv" }
      ]
    });
  }
}


