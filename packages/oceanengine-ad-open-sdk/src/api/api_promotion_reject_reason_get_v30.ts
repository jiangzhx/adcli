// Generated from oceanengine/ad_open_sdk_go api/api_promotion_reject_reason_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionRejectReasonGetV30DeliveryMode, PromotionRejectReasonGetV30Response } from "../models/index";


export interface PromotionRejectReasonGetV30ApiOpenApiV30PromotionRejectReasonGetGetRequest {
  advertiserId: number | string;
  promotionIds: (number | string)[];
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

  async openApiV30PromotionRejectReasonGetGet(request: PromotionRejectReasonGetV30ApiOpenApiV30PromotionRejectReasonGetGetRequest): Promise<PromotionRejectReasonGetV30Response> {
    const response = await this.openApiV30PromotionRejectReasonGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionRejectReasonGetGetWithHttpInfo(request: PromotionRejectReasonGetV30ApiOpenApiV30PromotionRejectReasonGetGetRequest): Promise<ApiResponse<PromotionRejectReasonGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.promotionIds == null) {
      throw new ApiException("promotionIds is required and must be specified");
    }

    if (request.promotionIds != null && request.promotionIds.length < 1) {
      throw new ApiException("promotionIds must have at least 1 elements");
    }

    if (request.promotionIds != null && request.promotionIds.length > 10) {
      throw new ApiException("promotionIds must have less than 10 elements");
    }
    return this.apiClient.requestWithHttpInfo<PromotionRejectReasonGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/promotion/reject_reason/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "promotion_ids", value: request.promotionIds },
        { name: "delivery_mode", value: request.deliveryMode },
        { name: "need_material_lego_mid", value: request.needMaterialLegoMid }
      ]
    });
  }
}


