// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAwemeUniPromotionOrderGetV10Count, QianchuanAwemeUniPromotionOrderGetV10Filtering, QianchuanAwemeUniPromotionOrderGetV10MarketingGoal, QianchuanAwemeUniPromotionOrderGetV10OrderField, QianchuanAwemeUniPromotionOrderGetV10Response } from "../models";


export class QianchuanAwemeUniPromotionOrderGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderGetGet(advertiserId: number, marketingGoal: QianchuanAwemeUniPromotionOrderGetV10MarketingGoal, filtering: QianchuanAwemeUniPromotionOrderGetV10Filtering, orderField: QianchuanAwemeUniPromotionOrderGetV10OrderField, cursor: number, count: QianchuanAwemeUniPromotionOrderGetV10Count): Promise<QianchuanAwemeUniPromotionOrderGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionOrderGetGetWithHttpInfo(advertiserId, marketingGoal, filtering, orderField, cursor, count);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderGetGetWithHttpInfo(advertiserId: number, marketingGoal: QianchuanAwemeUniPromotionOrderGetV10MarketingGoal, filtering: QianchuanAwemeUniPromotionOrderGetV10Filtering, orderField: QianchuanAwemeUniPromotionOrderGetV10OrderField, cursor: number, count: QianchuanAwemeUniPromotionOrderGetV10Count): Promise<ApiResponse<QianchuanAwemeUniPromotionOrderGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeUniPromotionOrderGetGet");
    }

    if (marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanAwemeUniPromotionOrderGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionOrderGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "marketing_goal", value: marketingGoal },
        { name: "filtering", value: filtering },
        { name: "order_field", value: orderField },
        { name: "cursor", value: cursor },
        { name: "count", value: count }
      ]
    });
  }
}


