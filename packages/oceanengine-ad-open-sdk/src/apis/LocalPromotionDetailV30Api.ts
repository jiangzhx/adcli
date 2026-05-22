// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalPromotionDetailV30Response } from "../models";


export interface OpenApiV30LocalPromotionDetailGetRequest {
  localAccountId: number;
  promotionId: number;
}

export class LocalPromotionDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPromotionDetailGet(request: OpenApiV30LocalPromotionDetailGetRequest): Promise<LocalPromotionDetailV30Response> {
    const response = await this.openApiV30LocalPromotionDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalPromotionDetailGetWithHttpInfo(request: OpenApiV30LocalPromotionDetailGetRequest): Promise<ApiResponse<LocalPromotionDetailV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalPromotionDetailGet");
    }

    if (request.promotionId == null) {
      throw new ApiException("Missing the required parameter 'promotionId' when calling openApiV30LocalPromotionDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalPromotionDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/promotion/detail/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "promotion_id", value: request.promotionId }
      ]
    });
  }
}


