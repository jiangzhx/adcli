// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanVideoGetV10Filtering, QianchuanVideoGetV10Response } from "../models";


export class QianchuanVideoGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanVideoGetGet(advertiserId: number, filtering: QianchuanVideoGetV10Filtering, page: number, pageSize: number): Promise<QianchuanVideoGetV10Response> {
    const response = await this.openApiV10QianchuanVideoGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanVideoGetGetWithHttpInfo(advertiserId: number, filtering: QianchuanVideoGetV10Filtering, page: number, pageSize: number): Promise<ApiResponse<QianchuanVideoGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanVideoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanVideoGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/video/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


