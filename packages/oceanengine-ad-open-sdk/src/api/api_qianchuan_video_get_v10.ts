// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_video_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanVideoGetV10Filtering, QianchuanVideoGetV10Response } from "../models/index";


export interface QianchuanVideoGetV10ApiOpenApiV10QianchuanVideoGetGetRequest {
  advertiserId: number | string;
  filtering?: QianchuanVideoGetV10Filtering;
  page?: number;
  pageSize?: number;
}

export class QianchuanVideoGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanVideoGetGet(request: QianchuanVideoGetV10ApiOpenApiV10QianchuanVideoGetGetRequest): Promise<QianchuanVideoGetV10Response> {
    const response = await this.openApiV10QianchuanVideoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanVideoGetGetWithHttpInfo(request: QianchuanVideoGetV10ApiOpenApiV10QianchuanVideoGetGetRequest): Promise<ApiResponse<QianchuanVideoGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanVideoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanVideoGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/video/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


