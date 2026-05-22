// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserVerifyInfoGetV30Response } from "../models";


export interface OpenApiV30AdvertiserVerifyInfoGetGetRequest {
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

  async openApiV30AdvertiserVerifyInfoGetGet(request: OpenApiV30AdvertiserVerifyInfoGetGetRequest): Promise<AdvertiserVerifyInfoGetV30Response> {
    const response = await this.openApiV30AdvertiserVerifyInfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserVerifyInfoGetGetWithHttpInfo(request: OpenApiV30AdvertiserVerifyInfoGetGetRequest): Promise<ApiResponse<AdvertiserVerifyInfoGetV30Response>> {
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


