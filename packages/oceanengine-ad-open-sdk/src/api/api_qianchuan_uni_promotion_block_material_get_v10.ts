// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_block_material_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionBlockMaterialGetV10Filtering, QianchuanUniPromotionBlockMaterialGetV10MarketingGoal, QianchuanUniPromotionBlockMaterialGetV10MediaType, QianchuanUniPromotionBlockMaterialGetV10OrderField, QianchuanUniPromotionBlockMaterialGetV10Response } from "../models/index";


export interface QianchuanUniPromotionBlockMaterialGetV10ApiOpenApiV10QianchuanUniPromotionBlockMaterialGetGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
  marketingGoal: QianchuanUniPromotionBlockMaterialGetV10MarketingGoal;
  mediaType?: QianchuanUniPromotionBlockMaterialGetV10MediaType;
  productId?: number | string[];
  filtering?: QianchuanUniPromotionBlockMaterialGetV10Filtering;
  orderField?: QianchuanUniPromotionBlockMaterialGetV10OrderField;
  cursor?: number;
}

export class QianchuanUniPromotionBlockMaterialGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionBlockMaterialGetGet(request: QianchuanUniPromotionBlockMaterialGetV10ApiOpenApiV10QianchuanUniPromotionBlockMaterialGetGetRequest): Promise<QianchuanUniPromotionBlockMaterialGetV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionBlockMaterialGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionBlockMaterialGetGetWithHttpInfo(request: QianchuanUniPromotionBlockMaterialGetV10ApiOpenApiV10QianchuanUniPromotionBlockMaterialGetGetRequest): Promise<ApiResponse<QianchuanUniPromotionBlockMaterialGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionBlockMaterialGetGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanUniPromotionBlockMaterialGetGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanUniPromotionBlockMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionBlockMaterialGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/block_material/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "media_type", value: request.mediaType },
        { name: "product_id", value: request.productId },
        { name: "filtering", value: request.filtering },
        { name: "order_field", value: request.orderField },
        { name: "cursor", value: request.cursor }
      ]
    });
  }
}


