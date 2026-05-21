// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportCustomConfigGetV30DataTopics, ReportCustomConfigGetV30Response } from "../models";


export class ReportCustomConfigGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ReportCustomConfigGetGet(advertiserId: number, dataTopics: ReportCustomConfigGetV30DataTopics[]): Promise<ReportCustomConfigGetV30Response> {
    const response = await this.openApiV30ReportCustomConfigGetGetWithHttpInfo(advertiserId, dataTopics);
    return response.data;
  }

  async openApiV30ReportCustomConfigGetGetWithHttpInfo(advertiserId: number, dataTopics: ReportCustomConfigGetV30DataTopics[]): Promise<ApiResponse<ReportCustomConfigGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ReportCustomConfigGetGet");
    }

    if (dataTopics == null) {
      throw new ApiException("Missing the required parameter 'dataTopics' when calling openApiV30ReportCustomConfigGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ReportCustomConfigGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/report/custom/config/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "data_topics", value: dataTopics, collectionFormat: "csv" }
      ]
    });
  }
}


