// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanQianchuanVideoStarGetV10Filtering, QianchuanQianchuanVideoStarGetV10OrderField, QianchuanQianchuanVideoStarGetV10Response } from "../models";


export class QianchuanQianchuanVideoStarGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanQianchuanVideoStarGetGet(advertiserId: number, filtering: QianchuanQianchuanVideoStarGetV10Filtering, orderField: QianchuanQianchuanVideoStarGetV10OrderField, cursor: number, count: number): Promise<QianchuanQianchuanVideoStarGetV10Response> {
    const response = await this.openApiV10QianchuanQianchuanVideoStarGetGetWithHttpInfo(advertiserId, filtering, orderField, cursor, count);
    return response.data;
  }

  async openApiV10QianchuanQianchuanVideoStarGetGetWithHttpInfo(advertiserId: number, filtering: QianchuanQianchuanVideoStarGetV10Filtering, orderField: QianchuanQianchuanVideoStarGetV10OrderField, cursor: number, count: number): Promise<ApiResponse<QianchuanQianchuanVideoStarGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanQianchuanVideoStarGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanQianchuanVideoStarGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/qianchuan/video/star/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "order_field", value: orderField },
        { name: "cursor", value: cursor },
        { name: "count", value: count }
      ]
    });
  }
}


