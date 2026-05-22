// Generated from oceanengine/ad_open_sdk_go api/api_star_report_custom_data_topic_report_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarReportCustomDataTopicReportV2Response, StarReportCustomDataTopicReportV2Topics } from "../models/index";


export interface StarReportCustomDataTopicReportV2ApiOpenApi2StarReportCustomDataTopicReportGetRequest {
  starId: number | string;
  workId: number | string;
  demandId: number | string;
  topics: StarReportCustomDataTopicReportV2Topics[];
}

export class StarReportCustomDataTopicReportV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarReportCustomDataTopicReportGet(request: StarReportCustomDataTopicReportV2ApiOpenApi2StarReportCustomDataTopicReportGetRequest): Promise<StarReportCustomDataTopicReportV2Response> {
    const response = await this.openApi2StarReportCustomDataTopicReportGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarReportCustomDataTopicReportGetWithHttpInfo(request: StarReportCustomDataTopicReportV2ApiOpenApi2StarReportCustomDataTopicReportGetRequest): Promise<ApiResponse<StarReportCustomDataTopicReportV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarReportCustomDataTopicReportGet");
    }

    if (request.workId == null) {
      throw new ApiException("Missing the required parameter 'workId' when calling openApi2StarReportCustomDataTopicReportGet");
    }

    if (request.demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarReportCustomDataTopicReportGet");
    }

    if (request.topics == null) {
      throw new ApiException("Missing the required parameter 'topics' when calling openApi2StarReportCustomDataTopicReportGet");
    }
    return this.apiClient.requestWithHttpInfo<StarReportCustomDataTopicReportV2Response>({
      method: "GET",
      path: "/open_api/2/star/report/custom_data_topic_report/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "work_id", value: request.workId },
        { name: "demand_id", value: request.demandId },
        { name: "topics", value: request.topics }
      ]
    });
  }
}


