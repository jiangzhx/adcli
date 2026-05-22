// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_keyword_package_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanKeywordPackageGetV10Response } from "../models/index";


export interface QianchuanKeywordPackageGetV10ApiOpenApiV10QianchuanKeywordPackageGetGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
  productId?: number | string;
}

export class QianchuanKeywordPackageGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanKeywordPackageGetGet(request: QianchuanKeywordPackageGetV10ApiOpenApiV10QianchuanKeywordPackageGetGetRequest): Promise<QianchuanKeywordPackageGetV10Response> {
    const response = await this.openApiV10QianchuanKeywordPackageGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanKeywordPackageGetGetWithHttpInfo(request: QianchuanKeywordPackageGetV10ApiOpenApiV10QianchuanKeywordPackageGetGetRequest): Promise<ApiResponse<QianchuanKeywordPackageGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanKeywordPackageGetGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanKeywordPackageGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanKeywordPackageGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/keyword_package/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "product_id", value: request.productId }
      ]
    });
  }
}


