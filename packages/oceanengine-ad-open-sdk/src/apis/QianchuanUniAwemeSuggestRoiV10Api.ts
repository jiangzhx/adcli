// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanUniAwemeSuggestRoiV10DeepExternalAction, QianchuanUniAwemeSuggestRoiV10MarketingGoal, QianchuanUniAwemeSuggestRoiV10Response, QianchuanUniAwemeSuggestRoiV10Scene } from "../models";


export interface OpenApiV10QianchuanUniAwemeSuggestRoiGetRequest {
  advertiserId: number | string;
  marketingGoal: QianchuanUniAwemeSuggestRoiV10MarketingGoal;
  awemeId: number | string;
  deepExternalAction: QianchuanUniAwemeSuggestRoiV10DeepExternalAction;
  productIds?: number | string[];
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

  async openApiV10QianchuanUniAwemeSuggestRoiGet(request: OpenApiV10QianchuanUniAwemeSuggestRoiGetRequest): Promise<QianchuanUniAwemeSuggestRoiV10Response> {
    const response = await this.openApiV10QianchuanUniAwemeSuggestRoiGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniAwemeSuggestRoiGetWithHttpInfo(request: OpenApiV10QianchuanUniAwemeSuggestRoiGetRequest): Promise<ApiResponse<QianchuanUniAwemeSuggestRoiV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniAwemeSuggestRoiGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanUniAwemeSuggestRoiGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanUniAwemeSuggestRoiGet");
    }

    if (request.deepExternalAction == null) {
      throw new ApiException("Missing the required parameter 'deepExternalAction' when calling openApiV10QianchuanUniAwemeSuggestRoiGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniAwemeSuggestRoiV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_aweme/suggest/roi/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "aweme_id", value: request.awemeId },
        { name: "deep_external_action", value: request.deepExternalAction },
        { name: "product_ids", value: request.productIds, collectionFormat: "csv" },
        { name: "ad_id", value: request.adId },
        { name: "task_id", value: request.taskId },
        { name: "scene", value: request.scene }
      ]
    });
  }
}


