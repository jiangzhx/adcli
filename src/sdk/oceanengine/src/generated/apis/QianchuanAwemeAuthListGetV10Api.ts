// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAwemeAuthListGetV10Filtering, QianchuanAwemeAuthListGetV10PageSize, QianchuanAwemeAuthListGetV10Response } from "../models";


export class QianchuanAwemeAuthListGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeAuthListGetGet(advertiserId: number, filtering: QianchuanAwemeAuthListGetV10Filtering, page: number, pageSize: QianchuanAwemeAuthListGetV10PageSize): Promise<QianchuanAwemeAuthListGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeAuthListGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanAwemeAuthListGetGetWithHttpInfo(advertiserId: number, filtering: QianchuanAwemeAuthListGetV10Filtering, page: number, pageSize: QianchuanAwemeAuthListGetV10PageSize): Promise<ApiResponse<QianchuanAwemeAuthListGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeAuthListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeAuthListGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme_auth_list/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


