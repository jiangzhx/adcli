// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanRoiGoalUpdateV10Request, QianchuanRoiGoalUpdateV10Response } from "../models";


export class QianchuanRoiGoalUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanRoiGoalUpdatePost(request: QianchuanRoiGoalUpdateV10Request): Promise<QianchuanRoiGoalUpdateV10Response> {
    const response = await this.openApiV10QianchuanRoiGoalUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanRoiGoalUpdatePostWithHttpInfo(request: QianchuanRoiGoalUpdateV10Request): Promise<ApiResponse<QianchuanRoiGoalUpdateV10Response>> {
    return this.apiClient.requestWithHttpInfo<QianchuanRoiGoalUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/roi/goal/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


