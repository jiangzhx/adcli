// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanOrientationPackageGetV10Filtering, QianchuanOrientationPackageGetV10Response } from "../models";


export class QianchuanOrientationPackageGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanOrientationPackageGetGet(advertiserId: number, filtering: QianchuanOrientationPackageGetV10Filtering, page: number, pageSize: number): Promise<QianchuanOrientationPackageGetV10Response> {
    const response = await this.openApiV10QianchuanOrientationPackageGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanOrientationPackageGetGetWithHttpInfo(advertiserId: number, filtering: QianchuanOrientationPackageGetV10Filtering, page: number, pageSize: number): Promise<ApiResponse<QianchuanOrientationPackageGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanOrientationPackageGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanOrientationPackageGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/orientation_package/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


