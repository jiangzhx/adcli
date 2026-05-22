// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_roi_goal_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanRoiGoalUpdateV10Request, QianchuanRoiGoalUpdateV10Response } from "../models/index";


export interface QianchuanRoiGoalUpdateV10ApiOpenApiV10QianchuanRoiGoalUpdatePostRequest {
  qianchuanRoiGoalUpdateV10Request?: QianchuanRoiGoalUpdateV10Request;
}

export class QianchuanRoiGoalUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanRoiGoalUpdatePost(request: QianchuanRoiGoalUpdateV10ApiOpenApiV10QianchuanRoiGoalUpdatePostRequest): Promise<QianchuanRoiGoalUpdateV10Response> {
    const response = await this.openApiV10QianchuanRoiGoalUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanRoiGoalUpdatePostWithHttpInfo(request: QianchuanRoiGoalUpdateV10ApiOpenApiV10QianchuanRoiGoalUpdatePostRequest): Promise<ApiResponse<QianchuanRoiGoalUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanRoiGoalUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/roi/goal/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanRoiGoalUpdateV10Request
    });
  }
}


