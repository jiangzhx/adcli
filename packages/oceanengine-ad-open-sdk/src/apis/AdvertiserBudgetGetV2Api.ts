// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserBudgetGetV2Response } from "../models";


export class AdvertiserBudgetGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserBudgetGetGet(advertiserIds: number[]): Promise<AdvertiserBudgetGetV2Response> {
    const response = await this.openApi2AdvertiserBudgetGetGetWithHttpInfo(advertiserIds);
    return response.data;
  }

  async openApi2AdvertiserBudgetGetGetWithHttpInfo(advertiserIds: number[]): Promise<ApiResponse<AdvertiserBudgetGetV2Response>> {
    if (advertiserIds == null) {
      throw new ApiException("Missing the required parameter 'advertiserIds' when calling openApi2AdvertiserBudgetGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserBudgetGetV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/budget/get/",
      queryParams: [
        { name: "advertiser_ids", value: advertiserIds, collectionFormat: "csv" }
      ]
    });
  }
}


