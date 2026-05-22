// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_update_budget_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserUpdateBudgetV2Request, AdvertiserUpdateBudgetV2Response } from "../models/index";


export interface AdvertiserUpdateBudgetV2ApiOpenApi2AdvertiserUpdateBudgetPostRequest {
  advertiserUpdateBudgetV2Request?: AdvertiserUpdateBudgetV2Request;
}

export class AdvertiserUpdateBudgetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserUpdateBudgetPost(request: AdvertiserUpdateBudgetV2ApiOpenApi2AdvertiserUpdateBudgetPostRequest): Promise<AdvertiserUpdateBudgetV2Response> {
    const response = await this.openApi2AdvertiserUpdateBudgetPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserUpdateBudgetPostWithHttpInfo(request: AdvertiserUpdateBudgetV2ApiOpenApi2AdvertiserUpdateBudgetPostRequest): Promise<ApiResponse<AdvertiserUpdateBudgetV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserUpdateBudgetV2Response>({
      method: "POST",
      path: "/open_api/2/advertiser/update/budget/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.advertiserUpdateBudgetV2Request
    });
  }
}


