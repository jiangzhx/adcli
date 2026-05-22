// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_info_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserInfoV2Response } from "../models/index";


export interface AdvertiserInfoV2ApiOpenApi2AdvertiserInfoGetRequest {
  advertiserIds?: (number | string)[];
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

  async openApi2AdvertiserInfoGet(request: AdvertiserInfoV2ApiOpenApi2AdvertiserInfoGetRequest): Promise<AdvertiserInfoV2Response> {
    const response = await this.openApi2AdvertiserInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserInfoGetWithHttpInfo(request: AdvertiserInfoV2ApiOpenApi2AdvertiserInfoGetRequest): Promise<ApiResponse<AdvertiserInfoV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserInfoV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/info/",
      queryParams: [
        { name: "advertiser_ids", value: request.advertiserIds },
        { name: "fields", value: request.fields }
      ]
    });
  }
}


