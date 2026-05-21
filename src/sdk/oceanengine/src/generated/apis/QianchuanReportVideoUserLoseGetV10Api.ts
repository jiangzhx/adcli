// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanReportVideoUserLoseGetV10Filtering, QianchuanReportVideoUserLoseGetV10Response } from "../models";


export class QianchuanReportVideoUserLoseGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportVideoUserLoseGetGet(fields: string[], startDate: string, endDate: string, filtering: QianchuanReportVideoUserLoseGetV10Filtering, advertiserId: number): Promise<QianchuanReportVideoUserLoseGetV10Response> {
    const response = await this.openApiV10QianchuanReportVideoUserLoseGetGetWithHttpInfo(fields, startDate, endDate, filtering, advertiserId);
    return response.data;
  }

  async openApiV10QianchuanReportVideoUserLoseGetGetWithHttpInfo(fields: string[], startDate: string, endDate: string, filtering: QianchuanReportVideoUserLoseGetV10Filtering, advertiserId: number): Promise<ApiResponse<QianchuanReportVideoUserLoseGetV10Response>> {
    if (fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanReportVideoUserLoseGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanReportVideoUserLoseGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanReportVideoUserLoseGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanReportVideoUserLoseGetGet");
    }

    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportVideoUserLoseGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportVideoUserLoseGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/video_user_lose/get/",
      queryParams: [
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "filtering", value: filtering },
        { name: "advertiser_id", value: advertiserId },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


