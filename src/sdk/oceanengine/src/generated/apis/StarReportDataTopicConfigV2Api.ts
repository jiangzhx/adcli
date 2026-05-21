// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarReportDataTopicConfigV2Response, StarReportDataTopicConfigV2Topics } from "../models";


export class StarReportDataTopicConfigV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarReportDataTopicConfigGet(starId: number, workId: number, demandId: number, topics: StarReportDataTopicConfigV2Topics[]): Promise<StarReportDataTopicConfigV2Response> {
    const response = await this.openApi2StarReportDataTopicConfigGetWithHttpInfo(starId, workId, demandId, topics);
    return response.data;
  }

  async openApi2StarReportDataTopicConfigGetWithHttpInfo(starId: number, workId: number, demandId: number, topics: StarReportDataTopicConfigV2Topics[]): Promise<ApiResponse<StarReportDataTopicConfigV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarReportDataTopicConfigGet");
    }

    if (workId == null) {
      throw new ApiException("Missing the required parameter 'workId' when calling openApi2StarReportDataTopicConfigGet");
    }

    if (demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarReportDataTopicConfigGet");
    }

    if (topics == null) {
      throw new ApiException("Missing the required parameter 'topics' when calling openApi2StarReportDataTopicConfigGet");
    }
    return this.apiClient.requestWithHttpInfo<StarReportDataTopicConfigV2Response>({
      method: "GET",
      path: "/open_api/2/star/report/data_topic_config/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "work_id", value: workId },
        { name: "demand_id", value: demandId },
        { name: "topics", value: topics, collectionFormat: "csv" }
      ]
    });
  }
}


