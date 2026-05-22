// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_brand_authorized_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanBrandAuthorizedGetV10Response } from "../models/index";


export interface QianchuanBrandAuthorizedGetV10ApiOpenApiV10QianchuanBrandAuthorizedGetGetRequest {
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

  async openApiV10QianchuanBrandAuthorizedGetGet(request: QianchuanBrandAuthorizedGetV10ApiOpenApiV10QianchuanBrandAuthorizedGetGetRequest): Promise<QianchuanBrandAuthorizedGetV10Response> {
    const response = await this.openApiV10QianchuanBrandAuthorizedGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanBrandAuthorizedGetGetWithHttpInfo(request: QianchuanBrandAuthorizedGetV10ApiOpenApiV10QianchuanBrandAuthorizedGetGetRequest): Promise<ApiResponse<QianchuanBrandAuthorizedGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


