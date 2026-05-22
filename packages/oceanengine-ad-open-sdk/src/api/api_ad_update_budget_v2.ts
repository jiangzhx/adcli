// Generated from oceanengine/ad_open_sdk_go api/api_ad_update_budget_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdUpdateBudgetV2Request, AdUpdateBudgetV2Response } from "../models/index";


export interface AdUpdateBudgetV2ApiOpenApi2AdUpdateBudgetPostRequest {
  adUpdateBudgetV2Request?: AdUpdateBudgetV2Request;
}

export class AdUpdateBudgetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdUpdateBudgetPost(request: AdUpdateBudgetV2ApiOpenApi2AdUpdateBudgetPostRequest): Promise<AdUpdateBudgetV2Response> {
    const response = await this.openApi2AdUpdateBudgetPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdUpdateBudgetPostWithHttpInfo(request: AdUpdateBudgetV2ApiOpenApi2AdUpdateBudgetPostRequest): Promise<ApiResponse<AdUpdateBudgetV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdUpdateBudgetV2Response>({
      method: "POST",
      path: "/open_api/2/ad/update/budget/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.adUpdateBudgetV2Request
    });
  }
}


