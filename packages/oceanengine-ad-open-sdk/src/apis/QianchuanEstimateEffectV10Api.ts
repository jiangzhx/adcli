// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanEstimateEffectV10BudgetMode, QianchuanEstimateEffectV10DeepBidType, QianchuanEstimateEffectV10DeepExternalAction, QianchuanEstimateEffectV10ExternalAction, QianchuanEstimateEffectV10LiveScheduleType, QianchuanEstimateEffectV10Response } from "../models";


export class QianchuanEstimateEffectV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanEstimateEffectGet(advertiserId: number, awemeId: number, externalAction: QianchuanEstimateEffectV10ExternalAction, budgetMode: QianchuanEstimateEffectV10BudgetMode, budget: number, liveScheduleType: QianchuanEstimateEffectV10LiveScheduleType, deepExternalAction: QianchuanEstimateEffectV10DeepExternalAction, deepBidType: QianchuanEstimateEffectV10DeepBidType, startTime: string, endTime: string, scheduleTime: string, scheduleFixedRange: number): Promise<QianchuanEstimateEffectV10Response> {
    const response = await this.openApiV10QianchuanEstimateEffectGetWithHttpInfo(advertiserId, awemeId, externalAction, budgetMode, budget, liveScheduleType, deepExternalAction, deepBidType, startTime, endTime, scheduleTime, scheduleFixedRange);
    return response.data;
  }

  async openApiV10QianchuanEstimateEffectGetWithHttpInfo(advertiserId: number, awemeId: number, externalAction: QianchuanEstimateEffectV10ExternalAction, budgetMode: QianchuanEstimateEffectV10BudgetMode, budget: number, liveScheduleType: QianchuanEstimateEffectV10LiveScheduleType, deepExternalAction: QianchuanEstimateEffectV10DeepExternalAction, deepBidType: QianchuanEstimateEffectV10DeepBidType, startTime: string, endTime: string, scheduleTime: string, scheduleFixedRange: number): Promise<ApiResponse<QianchuanEstimateEffectV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanEstimateEffectGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanEstimateEffectGet");
    }

    if (externalAction == null) {
      throw new ApiException("Missing the required parameter 'externalAction' when calling openApiV10QianchuanEstimateEffectGet");
    }

    if (budgetMode == null) {
      throw new ApiException("Missing the required parameter 'budgetMode' when calling openApiV10QianchuanEstimateEffectGet");
    }

    if (budget == null) {
      throw new ApiException("Missing the required parameter 'budget' when calling openApiV10QianchuanEstimateEffectGet");
    }

    if (liveScheduleType == null) {
      throw new ApiException("Missing the required parameter 'liveScheduleType' when calling openApiV10QianchuanEstimateEffectGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanEstimateEffectV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/estimate/effect/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "external_action", value: externalAction },
        { name: "deep_external_action", value: deepExternalAction },
        { name: "deep_bid_type", value: deepBidType },
        { name: "budget_mode", value: budgetMode },
        { name: "budget", value: budget },
        { name: "live_schedule_type", value: liveScheduleType },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "schedule_time", value: scheduleTime },
        { name: "schedule_fixed_range", value: scheduleFixedRange }
      ]
    });
  }
}


