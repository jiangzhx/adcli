// Generated from oceanengine/ad_open_sdk_go api/api_report_custom_config_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportCustomConfigGetV30DataTopics, ReportCustomConfigGetV30Response } from "../models/index";


export interface ReportCustomConfigGetV30ApiOpenApiV30ReportCustomConfigGetGetRequest {
  advertiserId: number | string;
  dataTopics: ReportCustomConfigGetV30DataTopics[];
}

export class ReportCustomConfigGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportCustomConfigGetGet(request: ReportCustomConfigGetV30ApiOpenApiV30ReportCustomConfigGetGetRequest): Promise<ReportCustomConfigGetV30Response> {
    const response = await this.openApiV30ReportCustomConfigGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ReportCustomConfigGetGetWithHttpInfo(request: ReportCustomConfigGetV30ApiOpenApiV30ReportCustomConfigGetGetRequest): Promise<ApiResponse<ReportCustomConfigGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.dataTopics == null) {
      throw new ApiException("dataTopics is required and must be specified");
    }

    if (request.dataTopics != null && request.dataTopics.length < 1) {
      throw new ApiException("dataTopics must have at least 1 elements");
    }

    if (request.dataTopics != null && request.dataTopics.length > 10) {
      throw new ApiException("dataTopics must have less than 10 elements");
    }
    return this.apiClient.requestWithHttpInfo<ReportCustomConfigGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/custom/config/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "data_topics", value: request.dataTopics }
      ]
    });
  }
}


