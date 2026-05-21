// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AdvertiserVerifyInfoGetV30Response } from "../models";


export class AdvertiserVerifyInfoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserVerifyInfoGetGet(advertiserId: number): Promise<AdvertiserVerifyInfoGetV30Response> {
    const response = await this.openApiV30AdvertiserVerifyInfoGetGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApiV30AdvertiserVerifyInfoGetGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<AdvertiserVerifyInfoGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30AdvertiserVerifyInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserVerifyInfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/advertiser/verify_info/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


