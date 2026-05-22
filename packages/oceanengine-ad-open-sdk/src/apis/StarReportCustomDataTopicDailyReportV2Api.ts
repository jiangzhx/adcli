// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarReportCustomDataTopicDailyReportV2Response, StarReportCustomDataTopicDailyReportV2Topics } from "../models";


export class StarReportCustomDataTopicDailyReportV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarReportCustomDataTopicDailyReportGet(starId: number, workId: number, demandId: number, topics: StarReportCustomDataTopicDailyReportV2Topics[], startTime: string, endTime: string): Promise<StarReportCustomDataTopicDailyReportV2Response> {
    const response = await this.openApi2StarReportCustomDataTopicDailyReportGetWithHttpInfo(starId, workId, demandId, topics, startTime, endTime);
    return response.data;
  }

  async openApi2StarReportCustomDataTopicDailyReportGetWithHttpInfo(starId: number, workId: number, demandId: number, topics: StarReportCustomDataTopicDailyReportV2Topics[], startTime: string, endTime: string): Promise<ApiResponse<StarReportCustomDataTopicDailyReportV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarReportCustomDataTopicDailyReportGet");
    }

    if (workId == null) {
      throw new ApiException("Missing the required parameter 'workId' when calling openApi2StarReportCustomDataTopicDailyReportGet");
    }

    if (demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarReportCustomDataTopicDailyReportGet");
    }

    if (topics == null) {
      throw new ApiException("Missing the required parameter 'topics' when calling openApi2StarReportCustomDataTopicDailyReportGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApi2StarReportCustomDataTopicDailyReportGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApi2StarReportCustomDataTopicDailyReportGet");
    }
    return this.apiClient.requestWithHttpInfo<StarReportCustomDataTopicDailyReportV2Response>({
      method: "GET",
      path: "/open_api/2/star/report/custom_data_topic_daily_report/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "work_id", value: workId },
        { name: "demand_id", value: demandId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "topics", value: topics, collectionFormat: "csv" }
      ]
    });
  }
}


