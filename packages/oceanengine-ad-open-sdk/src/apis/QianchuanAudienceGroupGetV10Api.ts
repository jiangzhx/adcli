// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAudienceGroupGetV10Filtering, QianchuanAudienceGroupGetV10Response } from "../models";


export class QianchuanAudienceGroupGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAudienceGroupGetGet(advertiserId: number, filtering: QianchuanAudienceGroupGetV10Filtering): Promise<QianchuanAudienceGroupGetV10Response> {
    const response = await this.openApiV10QianchuanAudienceGroupGetGetWithHttpInfo(advertiserId, filtering);
    return response.data;
  }

  async openApiV10QianchuanAudienceGroupGetGetWithHttpInfo(advertiserId: number, filtering: QianchuanAudienceGroupGetV10Filtering): Promise<ApiResponse<QianchuanAudienceGroupGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAudienceGroupGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAudienceGroupGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/audience_group/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


