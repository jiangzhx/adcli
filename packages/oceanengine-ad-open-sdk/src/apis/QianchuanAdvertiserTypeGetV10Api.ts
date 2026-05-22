// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdvertiserTypeGetV10Response } from "../models";


export class QianchuanAdvertiserTypeGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdvertiserTypeGetGet(advertiserIds: number[]): Promise<QianchuanAdvertiserTypeGetV10Response> {
    const response = await this.openApiV10QianchuanAdvertiserTypeGetGetWithHttpInfo(advertiserIds);
    return response.data;
  }

  async openApiV10QianchuanAdvertiserTypeGetGetWithHttpInfo(advertiserIds: number[]): Promise<ApiResponse<QianchuanAdvertiserTypeGetV10Response>> {
    if (advertiserIds == null) {
      throw new ApiException("Missing the required parameter 'advertiserIds' when calling openApiV10QianchuanAdvertiserTypeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdvertiserTypeGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/advertiser/type/get/",
      queryParams: [
        { name: "advertiser_ids", value: advertiserIds, collectionFormat: "csv" }
      ]
    });
  }
}


