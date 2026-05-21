// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanUniPromotionListV10AdlabScene, QianchuanUniPromotionListV10Fields, QianchuanUniPromotionListV10Filtering, QianchuanUniPromotionListV10MarketingGoal, QianchuanUniPromotionListV10OrderField, QianchuanUniPromotionListV10OrderType, QianchuanUniPromotionListV10PageSize, QianchuanUniPromotionListV10Response } from "../models";


export class QianchuanUniPromotionListV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionListGet(advertiserId: number, startTime: string, endTime: string, marketingGoal: QianchuanUniPromotionListV10MarketingGoal, fields: QianchuanUniPromotionListV10Fields[], filtering: QianchuanUniPromotionListV10Filtering, needCompensateInfo: boolean, orderType: QianchuanUniPromotionListV10OrderType, orderField: QianchuanUniPromotionListV10OrderField, page: number, pageSize: QianchuanUniPromotionListV10PageSize, adlabScene: QianchuanUniPromotionListV10AdlabScene): Promise<QianchuanUniPromotionListV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionListGetWithHttpInfo(advertiserId, startTime, endTime, marketingGoal, fields, filtering, needCompensateInfo, orderType, orderField, page, pageSize, adlabScene);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionListGetWithHttpInfo(advertiserId: number, startTime: string, endTime: string, marketingGoal: QianchuanUniPromotionListV10MarketingGoal, fields: QianchuanUniPromotionListV10Fields[], filtering: QianchuanUniPromotionListV10Filtering, needCompensateInfo: boolean, orderType: QianchuanUniPromotionListV10OrderType, orderField: QianchuanUniPromotionListV10OrderField, page: number, pageSize: QianchuanUniPromotionListV10PageSize, adlabScene: QianchuanUniPromotionListV10AdlabScene): Promise<ApiResponse<QianchuanUniPromotionListV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionListGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanUniPromotionListGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanUniPromotionListGet");
    }

    if (marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanUniPromotionListGet");
    }

    if (fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanUniPromotionListGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionListV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "marketing_goal", value: marketingGoal },
        { name: "filtering", value: filtering },
        { name: "need_compensate_info", value: needCompensateInfo },
        { name: "order_type", value: orderType },
        { name: "order_field", value: orderField },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "adlab_scene", value: adlabScene },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


