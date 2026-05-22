// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalPromotionDetailV30Response } from "../models";


export class LocalPromotionDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPromotionDetailGet(localAccountId: number, promotionId: number): Promise<LocalPromotionDetailV30Response> {
    const response = await this.openApiV30LocalPromotionDetailGetWithHttpInfo(localAccountId, promotionId);
    return response.data;
  }

  async openApiV30LocalPromotionDetailGetWithHttpInfo(localAccountId: number, promotionId: number): Promise<ApiResponse<LocalPromotionDetailV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalPromotionDetailGet");
    }

    if (promotionId == null) {
      throw new ApiException("Missing the required parameter 'promotionId' when calling openApiV30LocalPromotionDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalPromotionDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/promotion/detail/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "promotion_id", value: promotionId }
      ]
    });
  }
}


