// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_budget_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserBudgetGetV2Response } from "../models/index";


export interface AdvertiserBudgetGetV2ApiOpenApi2AdvertiserBudgetGetGetRequest {
  advertiserIds: (number | string)[];
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
      throw new ApiException("advertiserIds is required and must be specified");
    }

    if (request.advertiserIds != null && request.advertiserIds.length < 1) {
      throw new ApiException("advertiserIds must have at least 1 elements");
    }

    if (request.advertiserIds != null && request.advertiserIds.length > 100) {
      throw new ApiException("advertiserIds must have less than 100 elements");
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


