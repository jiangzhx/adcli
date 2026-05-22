// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_public_info_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserPublicInfoV2Response } from "../models/index";


export interface AdvertiserPublicInfoV2ApiOpenApi2AdvertiserPublicInfoGetRequest {
  advertiserIds?: number | string[];
}

export class AdvertiserPublicInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserPublicInfoGet(request: AdvertiserPublicInfoV2ApiOpenApi2AdvertiserPublicInfoGetRequest): Promise<AdvertiserPublicInfoV2Response> {
    const response = await this.openApi2AdvertiserPublicInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserPublicInfoGetWithHttpInfo(request: AdvertiserPublicInfoV2ApiOpenApi2AdvertiserPublicInfoGetRequest): Promise<ApiResponse<AdvertiserPublicInfoV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserPublicInfoV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/public_info/",
      queryParams: [
        { name: "advertiser_ids", value: request.advertiserIds, collectionFormat: "csv" }
      ]
    });
  }
}


