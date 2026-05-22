// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdScheduleFixedRangeUpdateV10Request, QianchuanAdScheduleFixedRangeUpdateV10Response } from "../models";


export interface OpenApiV10QianchuanAdScheduleFixedRangeUpdatePostRequest {
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

  async openApiV10QianchuanAdScheduleFixedRangeUpdatePost(request: OpenApiV10QianchuanAdScheduleFixedRangeUpdatePostRequest): Promise<QianchuanAdScheduleFixedRangeUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdScheduleFixedRangeUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdScheduleFixedRangeUpdatePostWithHttpInfo(request: OpenApiV10QianchuanAdScheduleFixedRangeUpdatePostRequest): Promise<ApiResponse<QianchuanAdScheduleFixedRangeUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdScheduleFixedRangeUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/schedule_fixed_range/update/",
      queryParams: [

      ],
      body: request.qianchuanAdScheduleFixedRangeUpdateV10Request
    });
  }
}


