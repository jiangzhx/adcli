// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanSuggestBudgetV10LiveScheduleType, QianchuanSuggestBudgetV10Response } from "../models";


export class QianchuanSuggestBudgetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanSuggestBudgetGet(advertiserId: number, awemeId: number, liveScheduleType: QianchuanSuggestBudgetV10LiveScheduleType, startTime: string, endTime: string, scheduleTime: string, scheduleFixedRange: number): Promise<QianchuanSuggestBudgetV10Response> {
    const response = await this.openApiV10QianchuanSuggestBudgetGetWithHttpInfo(advertiserId, awemeId, liveScheduleType, startTime, endTime, scheduleTime, scheduleFixedRange);
    return response.data;
  }

  async openApiV10QianchuanSuggestBudgetGetWithHttpInfo(advertiserId: number, awemeId: number, liveScheduleType: QianchuanSuggestBudgetV10LiveScheduleType, startTime: string, endTime: string, scheduleTime: string, scheduleFixedRange: number): Promise<ApiResponse<QianchuanSuggestBudgetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanSuggestBudgetGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanSuggestBudgetGet");
    }

    if (liveScheduleType == null) {
      throw new ApiException("Missing the required parameter 'liveScheduleType' when calling openApiV10QianchuanSuggestBudgetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanSuggestBudgetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/suggest/budget/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "live_schedule_type", value: liveScheduleType },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "schedule_time", value: scheduleTime },
        { name: "schedule_fixed_range", value: scheduleFixedRange }
      ]
    });
  }
}


