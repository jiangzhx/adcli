// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_audience_group_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAudienceGroupGetV10Filtering, QianchuanAudienceGroupGetV10Response } from "../models/index";


export interface QianchuanAudienceGroupGetV10ApiOpenApiV10QianchuanAudienceGroupGetGetRequest {
  advertiserId: number | string;
  filtering?: QianchuanAudienceGroupGetV10Filtering;
}

export class QianchuanAudienceGroupGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAudienceGroupGetGet(request: QianchuanAudienceGroupGetV10ApiOpenApiV10QianchuanAudienceGroupGetGetRequest): Promise<QianchuanAudienceGroupGetV10Response> {
    const response = await this.openApiV10QianchuanAudienceGroupGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAudienceGroupGetGetWithHttpInfo(request: QianchuanAudienceGroupGetV10ApiOpenApiV10QianchuanAudienceGroupGetGetRequest): Promise<ApiResponse<QianchuanAudienceGroupGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAudienceGroupGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAudienceGroupGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/audience_group/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


