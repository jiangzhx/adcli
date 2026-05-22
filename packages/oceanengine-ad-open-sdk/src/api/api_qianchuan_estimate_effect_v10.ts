// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_estimate_effect_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanEstimateEffectV10BudgetMode, QianchuanEstimateEffectV10DeepBidType, QianchuanEstimateEffectV10DeepExternalAction, QianchuanEstimateEffectV10ExternalAction, QianchuanEstimateEffectV10LiveScheduleType, QianchuanEstimateEffectV10Response } from "../models/index";


export interface QianchuanEstimateEffectV10ApiOpenApiV10QianchuanEstimateEffectGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
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

  async openApiV10QianchuanEstimateEffectGet(request: QianchuanEstimateEffectV10ApiOpenApiV10QianchuanEstimateEffectGetRequest): Promise<QianchuanEstimateEffectV10Response> {
    const response = await this.openApiV10QianchuanEstimateEffectGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanEstimateEffectGetWithHttpInfo(request: QianchuanEstimateEffectV10ApiOpenApiV10QianchuanEstimateEffectGetRequest): Promise<ApiResponse<QianchuanEstimateEffectV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.awemeId == null) {
      throw new ApiException("awemeId is required and must be specified");
    }

    if (request.externalAction == null) {
      throw new ApiException("externalAction is required and must be specified");
    }

    if (request.budgetMode == null) {
      throw new ApiException("budgetMode is required and must be specified");
    }

    if (request.budget == null) {
      throw new ApiException("budget is required and must be specified");
    }

    if (request.budget != null && Number(request.budget) < 300.0) {
      throw new ApiException("budget must be greater than 300.0");
    }

    if (request.budget != null && Number(request.budget) > 9999999.99) {
      throw new ApiException("budget must be less than 9999999.99");
    }

    if (request.liveScheduleType == null) {
      throw new ApiException("liveScheduleType is required and must be specified");
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


