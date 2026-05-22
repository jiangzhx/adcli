// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanEstimateEffectV10BudgetMode, QianchuanEstimateEffectV10DeepBidType, QianchuanEstimateEffectV10DeepExternalAction, QianchuanEstimateEffectV10ExternalAction, QianchuanEstimateEffectV10LiveScheduleType, QianchuanEstimateEffectV10Response } from "../models";


export interface OpenApiV10QianchuanEstimateEffectGetRequest {
  advertiserId: number;
  awemeId: number;
  externalAction: QianchuanEstimateEffectV10ExternalAction;
  budgetMode: QianchuanEstimateEffectV10BudgetMode;
  budget: number;
  liveScheduleType: QianchuanEstimateEffectV10LiveScheduleType;
  deepExternalAction?: QianchuanEstimateEffectV10DeepExternalAction;
  deepBidType?: QianchuanEstimateEffectV10DeepBidType;
  startTime?: string;
  endTime?: string;
  scheduleTime?: string;
  scheduleFixedRange?: number;
}

export class QianchuanEstimateEffectV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanEstimateEffectGet(request: OpenApiV10QianchuanEstimateEffectGetRequest): Promise<QianchuanEstimateEffectV10Response> {
    const response = await this.openApiV10QianchuanEstimateEffectGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanEstimateEffectGetWithHttpInfo(request: OpenApiV10QianchuanEstimateEffectGetRequest): Promise<ApiResponse<QianchuanEstimateEffectV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanEstimateEffectGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanEstimateEffectGet");
    }

    if (request.externalAction == null) {
      throw new ApiException("Missing the required parameter 'externalAction' when calling openApiV10QianchuanEstimateEffectGet");
    }

    if (request.budgetMode == null) {
      throw new ApiException("Missing the required parameter 'budgetMode' when calling openApiV10QianchuanEstimateEffectGet");
    }

    if (request.budget == null) {
      throw new ApiException("Missing the required parameter 'budget' when calling openApiV10QianchuanEstimateEffectGet");
    }

    if (request.liveScheduleType == null) {
      throw new ApiException("Missing the required parameter 'liveScheduleType' when calling openApiV10QianchuanEstimateEffectGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanEstimateEffectV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/estimate/effect/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "external_action", value: request.externalAction },
        { name: "deep_external_action", value: request.deepExternalAction },
        { name: "deep_bid_type", value: request.deepBidType },
        { name: "budget_mode", value: request.budgetMode },
        { name: "budget", value: request.budget },
        { name: "live_schedule_type", value: request.liveScheduleType },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "schedule_time", value: request.scheduleTime },
        { name: "schedule_fixed_range", value: request.scheduleFixedRange }
      ]
    });
  }
}


