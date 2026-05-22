// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserUpdateBudgetV2Request, AdvertiserUpdateBudgetV2Response } from "../models";


export class AdvertiserUpdateBudgetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserUpdateBudgetPost(request: AdvertiserUpdateBudgetV2Request): Promise<AdvertiserUpdateBudgetV2Response> {
    const response = await this.openApi2AdvertiserUpdateBudgetPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserUpdateBudgetPostWithHttpInfo(request: AdvertiserUpdateBudgetV2Request): Promise<ApiResponse<AdvertiserUpdateBudgetV2Response>> {
    return this.apiClient.requestWithHttpInfo<AdvertiserUpdateBudgetV2Response>({
      method: "POST",
      path: "/open_api/2/advertiser/update/budget/",
      queryParams: [

      ],
      body: request
    });
  }
}


