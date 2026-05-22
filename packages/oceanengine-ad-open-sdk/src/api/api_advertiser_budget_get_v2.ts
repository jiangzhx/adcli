// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_budget_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserBudgetGetV2Response } from "../models/index";


export interface AdvertiserBudgetGetV2ApiOpenApi2AdvertiserBudgetGetGetRequest {
  advertiserIds: number | string[];
}

export class AdvertiserBudgetGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserBudgetGetGet(request: AdvertiserBudgetGetV2ApiOpenApi2AdvertiserBudgetGetGetRequest): Promise<AdvertiserBudgetGetV2Response> {
    const response = await this.openApi2AdvertiserBudgetGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserBudgetGetGetWithHttpInfo(request: AdvertiserBudgetGetV2ApiOpenApi2AdvertiserBudgetGetGetRequest): Promise<ApiResponse<AdvertiserBudgetGetV2Response>> {
    if (request.advertiserIds == null) {
      throw new ApiException("Missing the required parameter 'advertiserIds' when calling openApi2AdvertiserBudgetGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserBudgetGetV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/budget/get/",
      queryParams: [
        { name: "advertiser_ids", value: request.advertiserIds }
      ]
    });
  }
}


