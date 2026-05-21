// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanUniAwemeSuggestRoiV10DeepExternalAction, QianchuanUniAwemeSuggestRoiV10MarketingGoal, QianchuanUniAwemeSuggestRoiV10Response, QianchuanUniAwemeSuggestRoiV10Scene } from "../models";


export class QianchuanUniAwemeSuggestRoiV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniAwemeSuggestRoiGet(advertiserId: number, marketingGoal: QianchuanUniAwemeSuggestRoiV10MarketingGoal, awemeId: number, deepExternalAction: QianchuanUniAwemeSuggestRoiV10DeepExternalAction, productIds: number[], adId: number, taskId: number, scene: QianchuanUniAwemeSuggestRoiV10Scene): Promise<QianchuanUniAwemeSuggestRoiV10Response> {
    const response = await this.openApiV10QianchuanUniAwemeSuggestRoiGetWithHttpInfo(advertiserId, marketingGoal, awemeId, deepExternalAction, productIds, adId, taskId, scene);
    return response.data;
  }

  async openApiV10QianchuanUniAwemeSuggestRoiGetWithHttpInfo(advertiserId: number, marketingGoal: QianchuanUniAwemeSuggestRoiV10MarketingGoal, awemeId: number, deepExternalAction: QianchuanUniAwemeSuggestRoiV10DeepExternalAction, productIds: number[], adId: number, taskId: number, scene: QianchuanUniAwemeSuggestRoiV10Scene): Promise<ApiResponse<QianchuanUniAwemeSuggestRoiV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanUniAwemeSuggestRoiGet");
    }

    if (marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanUniAwemeSuggestRoiGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanUniAwemeSuggestRoiGet");
    }

    if (deepExternalAction == null) {
      throw new ApiException("Missing the required parameter 'deepExternalAction' when calling openApiV10QianchuanUniAwemeSuggestRoiGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanUniAwemeSuggestRoiV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/uni_aweme/suggest/roi/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "marketing_goal", value: marketingGoal },
        { name: "aweme_id", value: awemeId },
        { name: "deep_external_action", value: deepExternalAction },
        { name: "ad_id", value: adId },
        { name: "task_id", value: taskId },
        { name: "scene", value: scene },
        { name: "product_ids", value: productIds, collectionFormat: "csv" }
      ]
    });
  }
}


