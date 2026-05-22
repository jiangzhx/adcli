// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAudienceListGetV10Filtering, QianchuanAudienceListGetV10Response } from "../models";


export class QianchuanAudienceListGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAudienceListGetGet(advertiserId: number, filtering: QianchuanAudienceListGetV10Filtering, page: number, pageSize: number): Promise<QianchuanAudienceListGetV10Response> {
    const response = await this.openApiV10QianchuanAudienceListGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanAudienceListGetGetWithHttpInfo(advertiserId: number, filtering: QianchuanAudienceListGetV10Filtering, page: number, pageSize: number): Promise<ApiResponse<QianchuanAudienceListGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAudienceListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAudienceListGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/audience_list/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


