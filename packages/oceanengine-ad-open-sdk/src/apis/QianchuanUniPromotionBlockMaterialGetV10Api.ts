// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionBlockMaterialGetV10Filtering, QianchuanUniPromotionBlockMaterialGetV10MarketingGoal, QianchuanUniPromotionBlockMaterialGetV10MediaType, QianchuanUniPromotionBlockMaterialGetV10OrderField, QianchuanUniPromotionBlockMaterialGetV10Response } from "../models";


export class QianchuanUniPromotionBlockMaterialGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionBlockMaterialGetGet(advertiserId: number, awemeId: number, marketingGoal: QianchuanUniPromotionBlockMaterialGetV10MarketingGoal, mediaType: QianchuanUniPromotionBlockMaterialGetV10MediaType, productId: number[], filtering: QianchuanUniPromotionBlockMaterialGetV10Filtering, orderField: QianchuanUniPromotionBlockMaterialGetV10OrderField, cursor: number): Promise<QianchuanUniPromotionBlockMaterialGetV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionBlockMaterialGetGetWithHttpInfo(advertiserId, awemeId, marketingGoal, mediaType, productId, filtering, orderField, cursor);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionBlockMaterialGetGetWithHttpInfo(advertiserId: number, awemeId: number, marketingGoal: QianchuanUniPromotionBlockMaterialGetV10MarketingGoal, mediaType: QianchuanUniPromotionBlockMaterialGetV10MediaType, productId: number[], filtering: QianchuanUniPromotionBlockMaterialGetV10Filtering, orderField: QianchuanUniPromotionBlockMaterialGetV10OrderField, cursor: number): Promise<ApiResponse<QianchuanUniPromotionBlockMaterialGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionBlockMaterialGetGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanUniPromotionBlockMaterialGetGet");
    }

    if (marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanUniPromotionBlockMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionBlockMaterialGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/block_material/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "marketing_goal", value: marketingGoal },
        { name: "media_type", value: mediaType },
        { name: "filtering", value: filtering },
        { name: "order_field", value: orderField },
        { name: "cursor", value: cursor },
        { name: "product_id", value: productId, collectionFormat: "csv" }
      ]
    });
  }
}


