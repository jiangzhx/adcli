// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarReportCustomDataTopicDailyReportV2Response, StarReportCustomDataTopicDailyReportV2Topics } from "../models";


export interface OpenApi2StarReportCustomDataTopicDailyReportGetRequest {
  starId: number | string;
  workId: number | string;
  demandId: number | string;
  topics: StarReportCustomDataTopicDailyReportV2Topics[];
  startTime: string;
  endTime: string;
}

export class StarReportCustomDataTopicDailyReportV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarReportCustomDataTopicDailyReportGet(request: OpenApi2StarReportCustomDataTopicDailyReportGetRequest): Promise<StarReportCustomDataTopicDailyReportV2Response> {
    const response = await this.openApi2StarReportCustomDataTopicDailyReportGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarReportCustomDataTopicDailyReportGetWithHttpInfo(request: OpenApi2StarReportCustomDataTopicDailyReportGetRequest): Promise<ApiResponse<StarReportCustomDataTopicDailyReportV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarReportCustomDataTopicDailyReportGet");
    }

    if (request.workId == null) {
      throw new ApiException("Missing the required parameter 'workId' when calling openApi2StarReportCustomDataTopicDailyReportGet");
    }

    if (request.demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarReportCustomDataTopicDailyReportGet");
    }

    if (request.topics == null) {
      throw new ApiException("Missing the required parameter 'topics' when calling openApi2StarReportCustomDataTopicDailyReportGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApi2StarReportCustomDataTopicDailyReportGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApi2StarReportCustomDataTopicDailyReportGet");
    }
    return this.apiClient.requestWithHttpInfo<StarReportCustomDataTopicDailyReportV2Response>({
      method: "GET",
      path: "/open_api/2/star/report/custom_data_topic_daily_report/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "work_id", value: request.workId },
        { name: "demand_id", value: request.demandId },
        { name: "topics", value: request.topics, collectionFormat: "csv" },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime }
      ]
    });
  }
}


