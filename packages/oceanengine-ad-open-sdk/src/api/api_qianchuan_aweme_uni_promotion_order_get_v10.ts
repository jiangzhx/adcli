// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_uni_promotion_order_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeUniPromotionOrderGetV10Count, QianchuanAwemeUniPromotionOrderGetV10Filtering, QianchuanAwemeUniPromotionOrderGetV10MarketingGoal, QianchuanAwemeUniPromotionOrderGetV10OrderField, QianchuanAwemeUniPromotionOrderGetV10Response } from "../models/index";


export interface QianchuanAwemeUniPromotionOrderGetV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderGetGetRequest {
  advertiserId: number | string;
  marketingGoal: QianchuanAwemeUniPromotionOrderGetV10MarketingGoal;
  filtering?: QianchuanAwemeUniPromotionOrderGetV10Filtering;
  orderField?: QianchuanAwemeUniPromotionOrderGetV10OrderField;
  cursor?: number;
  count?: QianchuanAwemeUniPromotionOrderGetV10Count;
}

export class QianchuanAwemeUniPromotionOrderGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderGetGet(request: QianchuanAwemeUniPromotionOrderGetV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderGetGetRequest): Promise<QianchuanAwemeUniPromotionOrderGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionOrderGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderGetGetWithHttpInfo(request: QianchuanAwemeUniPromotionOrderGetV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderGetGetRequest): Promise<ApiResponse<QianchuanAwemeUniPromotionOrderGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeUniPromotionOrderGetGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanAwemeUniPromotionOrderGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionOrderGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "filtering", value: request.filtering },
        { name: "order_field", value: request.orderField },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count }
      ]
    });
  }
}


