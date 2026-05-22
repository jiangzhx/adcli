// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeProductAvailableGetV10Response } from "../models";


export interface OpenApiV10QianchuanAwemeProductAvailableGetGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
  cursor?: number;
}

export class QianchuanAwemeProductAvailableGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeProductAvailableGetGet(request: OpenApiV10QianchuanAwemeProductAvailableGetGetRequest): Promise<QianchuanAwemeProductAvailableGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeProductAvailableGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeProductAvailableGetGetWithHttpInfo(request: OpenApiV10QianchuanAwemeProductAvailableGetGetRequest): Promise<ApiResponse<QianchuanAwemeProductAvailableGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeProductAvailableGetGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanAwemeProductAvailableGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeProductAvailableGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/product/available/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "cursor", value: request.cursor }
      ]
    });
  }
}


