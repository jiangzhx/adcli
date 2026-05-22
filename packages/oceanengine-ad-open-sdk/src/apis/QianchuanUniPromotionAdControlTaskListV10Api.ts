// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionAdControlTaskListV10Fields, QianchuanUniPromotionAdControlTaskListV10Filtering, QianchuanUniPromotionAdControlTaskListV10MarketingGoal, QianchuanUniPromotionAdControlTaskListV10OrderType, QianchuanUniPromotionAdControlTaskListV10Response, QianchuanUniPromotionAdControlTaskListV10Scene } from "../models";


export class QianchuanUniPromotionAdControlTaskListV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskListGet(advertiserId: number, marketingGoal: QianchuanUniPromotionAdControlTaskListV10MarketingGoal, adId: number, startTime: string, endTime: string, scene: QianchuanUniPromotionAdControlTaskListV10Scene, fields: QianchuanUniPromotionAdControlTaskListV10Fields[], filtering: QianchuanUniPromotionAdControlTaskListV10Filtering, orderType: QianchuanUniPromotionAdControlTaskListV10OrderType, orderField: string, page: number, pageSize: number): Promise<QianchuanUniPromotionAdControlTaskListV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskListGetWithHttpInfo(advertiserId, marketingGoal, adId, startTime, endTime, scene, fields, filtering, orderType, orderField, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskListGetWithHttpInfo(advertiserId: number, marketingGoal: QianchuanUniPromotionAdControlTaskListV10MarketingGoal, adId: number, startTime: string, endTime: string, scene: QianchuanUniPromotionAdControlTaskListV10Scene, fields: QianchuanUniPromotionAdControlTaskListV10Fields[], filtering: QianchuanUniPromotionAdControlTaskListV10Filtering, orderType: QianchuanUniPromotionAdControlTaskListV10OrderType, orderField: string, page: number, pageSize: number): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskListV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionAdControlTaskListGet");
    }

    if (marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanUniPromotionAdControlTaskListGet");
    }

    if (adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanUniPromotionAdControlTaskListGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanUniPromotionAdControlTaskListGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanUniPromotionAdControlTaskListGet");
    }

    if (scene == null) {
      throw new ApiException("Missing the required parameter 'scene' when calling openApiV10QianchuanUniPromotionAdControlTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskListV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "marketing_goal", value: marketingGoal },
        { name: "ad_id", value: adId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "scene", value: scene },
        { name: "filtering", value: filtering },
        { name: "order_type", value: orderType },
        { name: "order_field", value: orderField },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


