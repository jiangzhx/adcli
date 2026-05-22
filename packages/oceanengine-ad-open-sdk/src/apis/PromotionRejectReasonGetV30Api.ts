// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionRejectReasonGetV30DeliveryMode, PromotionRejectReasonGetV30Response } from "../models";


export interface OpenApiV30PromotionRejectReasonGetGetRequest {
  advertiserId: number;
  promotionIds: number[];
  deliveryMode?: PromotionRejectReasonGetV30DeliveryMode;
  needMaterialLegoMid?: boolean;
}

export class PromotionRejectReasonGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionRejectReasonGetGet(request: OpenApiV30PromotionRejectReasonGetGetRequest): Promise<PromotionRejectReasonGetV30Response> {
    const response = await this.openApiV30PromotionRejectReasonGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionRejectReasonGetGetWithHttpInfo(request: OpenApiV30PromotionRejectReasonGetGetRequest): Promise<ApiResponse<PromotionRejectReasonGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30PromotionRejectReasonGetGet");
    }

    if (request.promotionIds == null) {
      throw new ApiException("Missing the required parameter 'promotionIds' when calling openApiV30PromotionRejectReasonGetGet");
    }
    return this.apiClient.requestWithHttpInfo<PromotionRejectReasonGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/promotion/reject_reason/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "promotion_ids", value: request.promotionIds, collectionFormat: "csv" },
        { name: "delivery_mode", value: request.deliveryMode },
        { name: "need_material_lego_mid", value: request.needMaterialLegoMid }
      ]
    });
  }
}


