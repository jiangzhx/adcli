// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniPromotionListV10AdlabScene, QianchuanUniPromotionListV10Fields, QianchuanUniPromotionListV10Filtering, QianchuanUniPromotionListV10MarketingGoal, QianchuanUniPromotionListV10OrderField, QianchuanUniPromotionListV10OrderType, QianchuanUniPromotionListV10PageSize, QianchuanUniPromotionListV10Response } from "../models";


export interface OpenApiV10QianchuanUniPromotionListGetRequest {
  advertiserId: number;
  startTime: string;
  endTime: string;
  marketingGoal: QianchuanUniPromotionListV10MarketingGoal;
  fields: QianchuanUniPromotionListV10Fields[];
  filtering?: QianchuanUniPromotionListV10Filtering;
  needCompensateInfo?: boolean;
  orderType?: QianchuanUniPromotionListV10OrderType;
  orderField?: QianchuanUniPromotionListV10OrderField;
  page?: number;
  pageSize?: QianchuanUniPromotionListV10PageSize;
  adlabScene?: QianchuanUniPromotionListV10AdlabScene;
}

export class QianchuanUniPromotionListV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniPromotionListGet(request: OpenApiV10QianchuanUniPromotionListGetRequest): Promise<QianchuanUniPromotionListV10Response> {
    const response = await this.openApiV10QianchuanUniPromotionListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniPromotionListGetWithHttpInfo(request: OpenApiV10QianchuanUniPromotionListGetRequest): Promise<ApiResponse<QianchuanUniPromotionListV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniPromotionListGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanUniPromotionListGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanUniPromotionListGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanUniPromotionListGet");
    }

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanUniPromotionListGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniPromotionListV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_promotion/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "filtering", value: request.filtering },
        { name: "need_compensate_info", value: request.needCompensateInfo },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "order_type", value: request.orderType },
        { name: "order_field", value: request.orderField },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "adlab_scene", value: request.adlabScene }
      ]
    });
  }
}


