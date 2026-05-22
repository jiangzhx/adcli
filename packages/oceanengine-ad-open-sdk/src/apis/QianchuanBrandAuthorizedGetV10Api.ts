// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanBrandAuthorizedGetV10Response } from "../models";


export interface OpenApiV10QianchuanBrandAuthorizedGetGetRequest {
  advertiserId: number | string;
}

export class QianchuanBrandAuthorizedGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanBrandAuthorizedGetGet(request: OpenApiV10QianchuanBrandAuthorizedGetGetRequest): Promise<QianchuanBrandAuthorizedGetV10Response> {
    const response = await this.openApiV10QianchuanBrandAuthorizedGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanBrandAuthorizedGetGetWithHttpInfo(request: OpenApiV10QianchuanBrandAuthorizedGetGetRequest): Promise<ApiResponse<QianchuanBrandAuthorizedGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanBrandAuthorizedGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanBrandAuthorizedGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/brand/authorized/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


