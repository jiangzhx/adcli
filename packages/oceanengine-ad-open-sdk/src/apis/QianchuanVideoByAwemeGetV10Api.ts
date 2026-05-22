// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanVideoByAwemeGetV10Response } from "../models";


export class QianchuanVideoByAwemeGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanVideoByAwemeGetGet(advertiserId: number, awemeId: number, awemeItemUrl: string, awemeItemId: number): Promise<QianchuanVideoByAwemeGetV10Response> {
    const response = await this.openApiV10QianchuanVideoByAwemeGetGetWithHttpInfo(advertiserId, awemeId, awemeItemUrl, awemeItemId);
    return response.data;
  }

  async openApiV10QianchuanVideoByAwemeGetGetWithHttpInfo(advertiserId: number, awemeId: number, awemeItemUrl: string, awemeItemId: number): Promise<ApiResponse<QianchuanVideoByAwemeGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanVideoByAwemeGetGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanVideoByAwemeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanVideoByAwemeGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/video/by_aweme/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "aweme_item_url", value: awemeItemUrl },
        { name: "aweme_item_id", value: awemeItemId }
      ]
    });
  }
}


