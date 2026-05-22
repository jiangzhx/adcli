// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_lq_ad_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanLqAdGetV10Filtering, QianchuanLqAdGetV10Response } from "../models/index";


export interface QianchuanLqAdGetV10ApiOpenApiV10QianchuanLqAdGetGetRequest {
  advertiserId: number | string;
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

  async openApiV10QianchuanLqAdGetGet(request: QianchuanLqAdGetV10ApiOpenApiV10QianchuanLqAdGetGetRequest): Promise<QianchuanLqAdGetV10Response> {
    const response = await this.openApiV10QianchuanLqAdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanLqAdGetGetWithHttpInfo(request: QianchuanLqAdGetV10ApiOpenApiV10QianchuanLqAdGetGetRequest): Promise<ApiResponse<QianchuanLqAdGetV10Response>> {
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


