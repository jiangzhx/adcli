// Generated from oceanengine/ad_open_sdk_go api/api_local_promotion_reject_reason_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalPromotionRejectReasonGetV30Response } from "../models/index";


export interface LocalPromotionRejectReasonGetV30ApiOpenApiV30LocalPromotionRejectReasonGetGetRequest {
  localAccountId: number | string;
  promotionIds: number | string[];
}

export class LocalPromotionRejectReasonGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPromotionRejectReasonGetGet(request: LocalPromotionRejectReasonGetV30ApiOpenApiV30LocalPromotionRejectReasonGetGetRequest): Promise<LocalPromotionRejectReasonGetV30Response> {
    const response = await this.openApiV30LocalPromotionRejectReasonGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalPromotionRejectReasonGetGetWithHttpInfo(request: LocalPromotionRejectReasonGetV30ApiOpenApiV30LocalPromotionRejectReasonGetGetRequest): Promise<ApiResponse<LocalPromotionRejectReasonGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalPromotionRejectReasonGetGet");
    }

    if (request.promotionIds == null) {
      throw new ApiException("Missing the required parameter 'promotionIds' when calling openApiV30LocalPromotionRejectReasonGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalPromotionRejectReasonGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/promotion/reject_reason/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "promotion_ids", value: request.promotionIds, collectionFormat: "csv" }
      ]
    });
  }
}


