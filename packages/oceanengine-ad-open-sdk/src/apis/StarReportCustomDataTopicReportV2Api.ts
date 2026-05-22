// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarReportCustomDataTopicReportV2Response, StarReportCustomDataTopicReportV2Topics } from "../models";


export interface OpenApi2StarReportCustomDataTopicReportGetRequest {
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

  async openApi2StarReportCustomDataTopicReportGet(request: OpenApi2StarReportCustomDataTopicReportGetRequest): Promise<StarReportCustomDataTopicReportV2Response> {
    const response = await this.openApi2StarReportCustomDataTopicReportGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarReportCustomDataTopicReportGetWithHttpInfo(request: OpenApi2StarReportCustomDataTopicReportGetRequest): Promise<ApiResponse<StarReportCustomDataTopicReportV2Response>> {
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
        { name: "topics", value: request.topics, collectionFormat: "csv" }
      ]
    });
  }
}


