// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_video_user_lose_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportVideoUserLoseGetV10Filtering, QianchuanReportVideoUserLoseGetV10Response } from "../models/index";


export interface QianchuanReportVideoUserLoseGetV10ApiOpenApiV10QianchuanReportVideoUserLoseGetGetRequest {
  fields: string[];
  startDate: string;
  endDate: string;
  filtering: QianchuanReportVideoUserLoseGetV10Filtering;
  advertiserId: number | string;
}

export class QianchuanReportVideoUserLoseGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportVideoUserLoseGetGet(request: QianchuanReportVideoUserLoseGetV10ApiOpenApiV10QianchuanReportVideoUserLoseGetGetRequest): Promise<QianchuanReportVideoUserLoseGetV10Response> {
    const response = await this.openApiV10QianchuanReportVideoUserLoseGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportVideoUserLoseGetGetWithHttpInfo(request: QianchuanReportVideoUserLoseGetV10ApiOpenApiV10QianchuanReportVideoUserLoseGetGetRequest): Promise<ApiResponse<QianchuanReportVideoUserLoseGetV10Response>> {
    if (request.fields == null) {
      throw new ApiException("fields is required and must be specified");
    }

    if (request.startDate == null) {
      throw new ApiException("startDate is required and must be specified");
    }

    if (request.endDate == null) {
      throw new ApiException("endDate is required and must be specified");
    }

    if (request.filtering == null) {
      throw new ApiException("filtering is required and must be specified");
    }

    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportVideoUserLoseGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/video_user_lose/get/",
      queryParams: [
        { name: "fields", value: request.fields },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "filtering", value: request.filtering },
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


