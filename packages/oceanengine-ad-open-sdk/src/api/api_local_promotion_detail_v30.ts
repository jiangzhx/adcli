// Generated from oceanengine/ad_open_sdk_go api/api_local_promotion_detail_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalPromotionDetailV30Response } from "../models/index";


export interface LocalPromotionDetailV30ApiOpenApiV30LocalPromotionDetailGetRequest {
  localAccountId: number | string;
  promotionId: number | string;
}

export class LocalPromotionDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPromotionDetailGet(request: LocalPromotionDetailV30ApiOpenApiV30LocalPromotionDetailGetRequest): Promise<LocalPromotionDetailV30Response> {
    const response = await this.openApiV30LocalPromotionDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalPromotionDetailGetWithHttpInfo(request: LocalPromotionDetailV30ApiOpenApiV30LocalPromotionDetailGetRequest): Promise<ApiResponse<LocalPromotionDetailV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("localAccountId is required and must be specified");
    }

    if (request.localAccountId != null && Number(request.localAccountId) < 1) {
      throw new ApiException("localAccountId must be greater than 1");
    }

    if (request.promotionId == null) {
      throw new ApiException("promotionId is required and must be specified");
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


