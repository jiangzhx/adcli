// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_image_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanImageGetV10Filtering, QianchuanImageGetV10Response } from "../models/index";


export interface QianchuanImageGetV10ApiOpenApiV10QianchuanImageGetGetRequest {
  advertiserId: number | string;
  filtering?: QianchuanImageGetV10Filtering;
  page?: number;
  pageSize?: number;
}

export class QianchuanImageGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanImageGetGet(request: QianchuanImageGetV10ApiOpenApiV10QianchuanImageGetGetRequest): Promise<QianchuanImageGetV10Response> {
    const response = await this.openApiV10QianchuanImageGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanImageGetGetWithHttpInfo(request: QianchuanImageGetV10ApiOpenApiV10QianchuanImageGetGetRequest): Promise<ApiResponse<QianchuanImageGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanImageGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/image/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


