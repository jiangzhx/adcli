// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalPromotionRejectReasonGetV30Response } from "../models";


export interface OpenApiV30LocalPromotionRejectReasonGetGetRequest {
  localAccountId: number;
  promotionIds: number[];
}

export class LocalPromotionRejectReasonGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPromotionRejectReasonGetGet(request: OpenApiV30LocalPromotionRejectReasonGetGetRequest): Promise<LocalPromotionRejectReasonGetV30Response> {
    const response = await this.openApiV30LocalPromotionRejectReasonGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalPromotionRejectReasonGetGetWithHttpInfo(request: OpenApiV30LocalPromotionRejectReasonGetGetRequest): Promise<ApiResponse<LocalPromotionRejectReasonGetV30Response>> {
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


