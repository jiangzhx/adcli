// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_learing_status_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdLearingStatusGetV10Response } from "../models/index";


export interface QianchuanAdLearingStatusGetV10ApiOpenApiV10QianchuanAdLearingStatusGetGetRequest {
  advertiserId: number | string;
  adIds: (number | string)[];
}

export class QianchuanAdLearingStatusGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdLearingStatusGetGet(request: QianchuanAdLearingStatusGetV10ApiOpenApiV10QianchuanAdLearingStatusGetGetRequest): Promise<QianchuanAdLearingStatusGetV10Response> {
    const response = await this.openApiV10QianchuanAdLearingStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdLearingStatusGetGetWithHttpInfo(request: QianchuanAdLearingStatusGetV10ApiOpenApiV10QianchuanAdLearingStatusGetGetRequest): Promise<ApiResponse<QianchuanAdLearingStatusGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.adIds == null) {
      throw new ApiException("adIds is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdLearingStatusGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/learing_status/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_ids", value: request.adIds }
      ]
    });
  }
}


