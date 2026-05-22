// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanToolsGrayV10Response } from "../models";


export interface OpenApiV10QianchuanToolsGrayGetRequest {
  advertiserId: number;
  grayKeys: string[];
  awemeIds?: number[];
}

export class QianchuanToolsGrayV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsGrayGet(request: OpenApiV10QianchuanToolsGrayGetRequest): Promise<QianchuanToolsGrayV10Response> {
    const response = await this.openApiV10QianchuanToolsGrayGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanToolsGrayGetWithHttpInfo(request: OpenApiV10QianchuanToolsGrayGetRequest): Promise<ApiResponse<QianchuanToolsGrayV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanToolsGrayGet");
    }

    if (request.grayKeys == null) {
      throw new ApiException("Missing the required parameter 'grayKeys' when calling openApiV10QianchuanToolsGrayGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanToolsGrayV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/tools/gray/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "gray_keys", value: request.grayKeys, collectionFormat: "csv" },
        { name: "aweme_ids", value: request.awemeIds, collectionFormat: "csv" }
      ]
    });
  }
}


