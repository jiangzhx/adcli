// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_promotion_ad_control_task_list_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniPromotionAdControlTaskListV10Fields, QianchuanUniPromotionAdControlTaskListV10Filtering, QianchuanUniPromotionAdControlTaskListV10MarketingGoal, QianchuanUniPromotionAdControlTaskListV10OrderType, QianchuanUniPromotionAdControlTaskListV10Response, QianchuanUniPromotionAdControlTaskListV10Scene } from "../models/index";


export interface QianchuanUniPromotionAdControlTaskListV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskListGetRequest {
  advertiserId: number | string;
  marketingGoal: QianchuanUniPromotionAdControlTaskListV10MarketingGoal;
  adId: number | string;
  startTime: string;
  endTime: string;
  scene: QianchuanUniPromotionAdControlTaskListV10Scene;
  fields?: QianchuanUniPromotionAdControlTaskListV10Fields[];
  filtering?: QianchuanUniPromotionAdControlTaskListV10Filtering;
  orderType?: QianchuanUniPromotionAdControlTaskListV10OrderType;
  orderField?: string;
  page?: number;
  pageSize?: number;
}

export class QianchuanUniPromotionAdControlTaskListV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskListGet(request: QianchuanUniPromotionAdControlTaskListV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskListGetRequest): Promise<QianchuanUniPromotionAdControlTaskListV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionAdControlTaskListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionAdControlTaskListGetWithHttpInfo(request: QianchuanUniPromotionAdControlTaskListV10ApiOpenApiV10QianchuanUniPromotionAdControlTaskListGetRequest): Promise<ApiResponse<QianchuanUniPromotionAdControlTaskListV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionAdControlTaskListGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanUniPromotionAdControlTaskListGet");
    }

    if (request.adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanUniPromotionAdControlTaskListGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanUniPromotionAdControlTaskListGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanUniPromotionAdControlTaskListGet");
    }

    if (request.scene == null) {
      throw new ApiException("Missing the required parameter 'scene' when calling openApiV10QianchuanUniPromotionAdControlTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionAdControlTaskListV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "ad_id", value: request.adId },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "scene", value: request.scene },
        { name: "filtering", value: request.filtering },
        { name: "order_type", value: request.orderType },
        { name: "order_field", value: request.orderField },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


