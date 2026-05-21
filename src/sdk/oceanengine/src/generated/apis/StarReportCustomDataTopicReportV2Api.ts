// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarReportCustomDataTopicReportV2Response, StarReportCustomDataTopicReportV2Topics } from "../models";


export class StarReportCustomDataTopicReportV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarReportCustomDataTopicReportGet(starId: number, workId: number, demandId: number, topics: StarReportCustomDataTopicReportV2Topics[]): Promise<StarReportCustomDataTopicReportV2Response> {
    const response = await this.openApi2StarReportCustomDataTopicReportGetWithHttpInfo(starId, workId, demandId, topics);
    return response.data;
  }

  async openApi2StarReportCustomDataTopicReportGetWithHttpInfo(starId: number, workId: number, demandId: number, topics: StarReportCustomDataTopicReportV2Topics[]): Promise<ApiResponse<StarReportCustomDataTopicReportV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarReportCustomDataTopicReportGet");
    }

    if (workId == null) {
      throw new ApiException("Missing the required parameter 'workId' when calling openApi2StarReportCustomDataTopicReportGet");
    }

    if (demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarReportCustomDataTopicReportGet");
    }

    if (topics == null) {
      throw new ApiException("Missing the required parameter 'topics' when calling openApi2StarReportCustomDataTopicReportGet");
    }
    return this.apiClient.requestWithHttpInfo<StarReportCustomDataTopicReportV2Response>({
      method: "GET",
      path: "/open_api/2/star/report/custom_data_topic_report/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "work_id", value: workId },
        { name: "demand_id", value: demandId },
        { name: "topics", value: topics, collectionFormat: "csv" }
      ]
    });
  }
}


