// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_verify_info_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserVerifyInfoGetV30Response } from "../models/index";


export interface AdvertiserVerifyInfoGetV30ApiOpenApiV30AdvertiserVerifyInfoGetGetRequest {
  advertiserId: number | string;
}

export class AdvertiserVerifyInfoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserVerifyInfoGetGet(request: AdvertiserVerifyInfoGetV30ApiOpenApiV30AdvertiserVerifyInfoGetGetRequest): Promise<AdvertiserVerifyInfoGetV30Response> {
    const response = await this.openApiV30AdvertiserVerifyInfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserVerifyInfoGetGetWithHttpInfo(request: AdvertiserVerifyInfoGetV30ApiOpenApiV30AdvertiserVerifyInfoGetGetRequest): Promise<ApiResponse<AdvertiserVerifyInfoGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30AdvertiserVerifyInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserVerifyInfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/advertiser/verify_info/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


