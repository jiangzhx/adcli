// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_schedule_fixed_range_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdScheduleFixedRangeUpdateV10Request, QianchuanAdScheduleFixedRangeUpdateV10Response } from "../models/index";


export interface QianchuanAdScheduleFixedRangeUpdateV10ApiOpenApiV10QianchuanAdScheduleFixedRangeUpdatePostRequest {
  qianchuanAdScheduleFixedRangeUpdateV10Request?: QianchuanAdScheduleFixedRangeUpdateV10Request;
}

export class QianchuanAdScheduleFixedRangeUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdScheduleFixedRangeUpdatePost(request: QianchuanAdScheduleFixedRangeUpdateV10ApiOpenApiV10QianchuanAdScheduleFixedRangeUpdatePostRequest): Promise<QianchuanAdScheduleFixedRangeUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdScheduleFixedRangeUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdScheduleFixedRangeUpdatePostWithHttpInfo(request: QianchuanAdScheduleFixedRangeUpdateV10ApiOpenApiV10QianchuanAdScheduleFixedRangeUpdatePostRequest): Promise<ApiResponse<QianchuanAdScheduleFixedRangeUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdScheduleFixedRangeUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/schedule_fixed_range/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAdScheduleFixedRangeUpdateV10Request
    });
  }
}


