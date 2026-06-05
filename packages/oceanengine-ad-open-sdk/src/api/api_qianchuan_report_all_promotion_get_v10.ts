// 由 oceanengine/ad_open_sdk_go api/api_qianchuan_report_all_promotion_get_v10.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportAllPromotionGetV10AdlabScene, QianchuanReportAllPromotionGetV10DataPeriod, QianchuanReportAllPromotionGetV10MarketingGoal, QianchuanReportAllPromotionGetV10OrderPlatform, QianchuanReportAllPromotionGetV10Response } from "../models/index";


export interface QianchuanReportAllPromotionGetV10ApiOpenApiV10QianchuanReportAllPromotionGetGetRequest {
  advertiserId: number | string;
  startTime: string;
  endTime: string;
  adlabScene: QianchuanReportAllPromotionGetV10AdlabScene;
  fields: string[];
  dataPeriod?: QianchuanReportAllPromotionGetV10DataPeriod;
  marketingGoal?: QianchuanReportAllPromotionGetV10MarketingGoal;
  orderPlatform?: QianchuanReportAllPromotionGetV10OrderPlatform;
}

export class QianchuanReportAllPromotionGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportAllPromotionGetGet(request: QianchuanReportAllPromotionGetV10ApiOpenApiV10QianchuanReportAllPromotionGetGetRequest): Promise<QianchuanReportAllPromotionGetV10Response> {
    const response = await this.openApiV10QianchuanReportAllPromotionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportAllPromotionGetGetWithHttpInfo(request: QianchuanReportAllPromotionGetV10ApiOpenApiV10QianchuanReportAllPromotionGetGetRequest): Promise<ApiResponse<QianchuanReportAllPromotionGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.startTime == null) {
      throw new ApiException("startTime is required and must be specified");
    }

    if (request.endTime == null) {
      throw new ApiException("endTime is required and must be specified");
    }

    if (request.adlabScene == null) {
      throw new ApiException("adlabScene is required and must be specified");
    }

    if (request.fields == null) {
      throw new ApiException("fields is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportAllPromotionGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/all_promotion/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "adlab_scene", value: request.adlabScene },
        { name: "data_period", value: request.dataPeriod },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "order_platform", value: request.orderPlatform },
        { name: "fields", value: request.fields }
      ]
    });
  }
}


