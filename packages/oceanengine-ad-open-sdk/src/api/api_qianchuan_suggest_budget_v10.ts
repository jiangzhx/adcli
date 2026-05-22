// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_suggest_budget_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanSuggestBudgetV10LiveScheduleType, QianchuanSuggestBudgetV10Response } from "../models/index";


export interface QianchuanSuggestBudgetV10ApiOpenApiV10QianchuanSuggestBudgetGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
  liveScheduleType: QianchuanSuggestBudgetV10LiveScheduleType;
  startTime?: string;
  endTime?: string;
  scheduleTime?: string;
  scheduleFixedRange?: number;
}

export class QianchuanSuggestBudgetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanSuggestBudgetGet(request: QianchuanSuggestBudgetV10ApiOpenApiV10QianchuanSuggestBudgetGetRequest): Promise<QianchuanSuggestBudgetV10Response> {
    const response = await this.openApiV10QianchuanSuggestBudgetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanSuggestBudgetGetWithHttpInfo(request: QianchuanSuggestBudgetV10ApiOpenApiV10QianchuanSuggestBudgetGetRequest): Promise<ApiResponse<QianchuanSuggestBudgetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanSuggestBudgetGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanSuggestBudgetGet");
    }

    if (request.liveScheduleType == null) {
      throw new ApiException("Missing the required parameter 'liveScheduleType' when calling openApiV10QianchuanSuggestBudgetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanSuggestBudgetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/suggest/budget/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "live_schedule_type", value: request.liveScheduleType },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "schedule_time", value: request.scheduleTime },
        { name: "schedule_fixed_range", value: request.scheduleFixedRange }
      ]
    });
  }
}


