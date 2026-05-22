// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_tools_gray_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanToolsGrayV10Response } from "../models/index";


export interface QianchuanToolsGrayV10ApiOpenApiV10QianchuanToolsGrayGetRequest {
  advertiserId: number | string;
  grayKeys: string[];
  awemeIds?: (number | string)[];
}

export class QianchuanToolsGrayV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsGrayGet(request: QianchuanToolsGrayV10ApiOpenApiV10QianchuanToolsGrayGetRequest): Promise<QianchuanToolsGrayV10Response> {
    const response = await this.openApiV10QianchuanToolsGrayGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanToolsGrayGetWithHttpInfo(request: QianchuanToolsGrayV10ApiOpenApiV10QianchuanToolsGrayGetRequest): Promise<ApiResponse<QianchuanToolsGrayV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.grayKeys == null) {
      throw new ApiException("grayKeys is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanToolsGrayV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/tools/gray/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "gray_keys", value: request.grayKeys },
        { name: "aweme_ids", value: request.awemeIds }
      ]
    });
  }
}


