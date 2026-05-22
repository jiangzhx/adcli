// Generated from oceanengine/ad_open_sdk_go api/api_star_report_data_topic_config_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarReportDataTopicConfigV2Response, StarReportDataTopicConfigV2Topics } from "../models/index";


export interface StarReportDataTopicConfigV2ApiOpenApi2StarReportDataTopicConfigGetRequest {
  starId: number | string;
  workId: number | string;
  demandId: number | string;
  topics: StarReportDataTopicConfigV2Topics[];
}

export class StarReportDataTopicConfigV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarReportDataTopicConfigGet(request: StarReportDataTopicConfigV2ApiOpenApi2StarReportDataTopicConfigGetRequest): Promise<StarReportDataTopicConfigV2Response> {
    const response = await this.openApi2StarReportDataTopicConfigGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarReportDataTopicConfigGetWithHttpInfo(request: StarReportDataTopicConfigV2ApiOpenApi2StarReportDataTopicConfigGetRequest): Promise<ApiResponse<StarReportDataTopicConfigV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.workId == null) {
      throw new ApiException("workId is required and must be specified");
    }

    if (request.demandId == null) {
      throw new ApiException("demandId is required and must be specified");
    }

    if (request.topics == null) {
      throw new ApiException("topics is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<StarReportDataTopicConfigV2Response>({
      method: "GET",
      path: "/open_api/2/star/report/data_topic_config/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "work_id", value: request.workId },
        { name: "demand_id", value: request.demandId },
        { name: "topics", value: request.topics }
      ]
    });
  }
}


