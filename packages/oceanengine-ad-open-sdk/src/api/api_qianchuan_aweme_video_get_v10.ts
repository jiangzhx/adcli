// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_video_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeVideoGetV10MarketingGoal, QianchuanAwemeVideoGetV10Response } from "../models/index";


export interface QianchuanAwemeVideoGetV10ApiOpenApiV10QianchuanAwemeVideoGetGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
  marketingGoal: QianchuanAwemeVideoGetV10MarketingGoal;
  cursor?: number;
  count?: number;
}

export class QianchuanAwemeVideoGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeVideoGetGet(request: QianchuanAwemeVideoGetV10ApiOpenApiV10QianchuanAwemeVideoGetGetRequest): Promise<QianchuanAwemeVideoGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeVideoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeVideoGetGetWithHttpInfo(request: QianchuanAwemeVideoGetV10ApiOpenApiV10QianchuanAwemeVideoGetGetRequest): Promise<ApiResponse<QianchuanAwemeVideoGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeVideoGetGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanAwemeVideoGetGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV10QianchuanAwemeVideoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeVideoGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/video/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count }
      ]
    });
  }
}


