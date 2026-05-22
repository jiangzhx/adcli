// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_aweme_suggest_roi_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniAwemeSuggestRoiV10DeepExternalAction, QianchuanUniAwemeSuggestRoiV10MarketingGoal, QianchuanUniAwemeSuggestRoiV10Response, QianchuanUniAwemeSuggestRoiV10Scene } from "../models/index";


export interface QianchuanUniAwemeSuggestRoiV10ApiOpenApiV10QianchuanUniAwemeSuggestRoiGetRequest {
  advertiserId: number | string;
  marketingGoal: QianchuanUniAwemeSuggestRoiV10MarketingGoal;
  awemeId: number | string;
  deepExternalAction: QianchuanUniAwemeSuggestRoiV10DeepExternalAction;
  productIds?: (number | string)[];
  adId?: number | string;
  taskId?: number | string;
  scene?: QianchuanUniAwemeSuggestRoiV10Scene;
}

export class QianchuanUniAwemeSuggestRoiV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniAwemeSuggestRoiGet(request: QianchuanUniAwemeSuggestRoiV10ApiOpenApiV10QianchuanUniAwemeSuggestRoiGetRequest): Promise<QianchuanUniAwemeSuggestRoiV10Response> {
    const response = await this.openApiV10QianchuanUniAwemeSuggestRoiGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniAwemeSuggestRoiGetWithHttpInfo(request: QianchuanUniAwemeSuggestRoiV10ApiOpenApiV10QianchuanUniAwemeSuggestRoiGetRequest): Promise<ApiResponse<QianchuanUniAwemeSuggestRoiV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("marketingGoal is required and must be specified");
    }

    if (request.awemeId == null) {
      throw new ApiException("awemeId is required and must be specified");
    }

    if (request.awemeId != null && Number(request.awemeId) < 1) {
      throw new ApiException("awemeId must be greater than 1");
    }

    if (request.deepExternalAction == null) {
      throw new ApiException("deepExternalAction is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniAwemeSuggestRoiV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_aweme/suggest/roi/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "aweme_id", value: request.awemeId },
        { name: "deep_external_action", value: request.deepExternalAction },
        { name: "product_ids", value: request.productIds },
        { name: "ad_id", value: request.adId },
        { name: "task_id", value: request.taskId },
        { name: "scene", value: request.scene }
      ]
    });
  }
}


