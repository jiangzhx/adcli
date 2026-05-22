// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_orientation_package_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanOrientationPackageGetV10Filtering, QianchuanOrientationPackageGetV10Response } from "../models/index";


export interface QianchuanOrientationPackageGetV10ApiOpenApiV10QianchuanOrientationPackageGetGetRequest {
  advertiserId: number | string;
  filtering?: QianchuanOrientationPackageGetV10Filtering;
  page?: number;
  pageSize?: number;
}

export class QianchuanOrientationPackageGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanOrientationPackageGetGet(request: QianchuanOrientationPackageGetV10ApiOpenApiV10QianchuanOrientationPackageGetGetRequest): Promise<QianchuanOrientationPackageGetV10Response> {
    const response = await this.openApiV10QianchuanOrientationPackageGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanOrientationPackageGetGetWithHttpInfo(request: QianchuanOrientationPackageGetV10ApiOpenApiV10QianchuanOrientationPackageGetGetRequest): Promise<ApiResponse<QianchuanOrientationPackageGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanOrientationPackageGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanOrientationPackageGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/orientation_package/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


