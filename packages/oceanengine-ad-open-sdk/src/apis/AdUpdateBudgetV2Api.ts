// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdUpdateBudgetV2Request, AdUpdateBudgetV2Response } from "../models";


export class AdUpdateBudgetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdUpdateBudgetPost(adUpdateBudgetV2Request: AdUpdateBudgetV2Request): Promise<AdUpdateBudgetV2Response> {
    const response = await this.openApi2AdUpdateBudgetPostWithHttpInfo(adUpdateBudgetV2Request);
    return response.data;
  }

  async openApi2AdUpdateBudgetPostWithHttpInfo(adUpdateBudgetV2Request: AdUpdateBudgetV2Request): Promise<ApiResponse<AdUpdateBudgetV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdUpdateBudgetV2Response>({
      method: "POST",
      path: "/open_api/2/ad/update/budget/",
      queryParams: [

      ],
      body: adUpdateBudgetV2Request
    });
  }
}


