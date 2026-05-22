// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanLqAdGetV10Filtering, QianchuanLqAdGetV10Response } from "../models";


export interface OpenApiV10QianchuanLqAdGetGetRequest {
  advertiserId: number;
  filtering?: QianchuanLqAdGetV10Filtering;
}

export class QianchuanLqAdGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanLqAdGetGet(request: OpenApiV10QianchuanLqAdGetGetRequest): Promise<QianchuanLqAdGetV10Response> {
    const response = await this.openApiV10QianchuanLqAdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanLqAdGetGetWithHttpInfo(request: OpenApiV10QianchuanLqAdGetGetRequest): Promise<ApiResponse<QianchuanLqAdGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanLqAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanLqAdGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/lq_ad/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


