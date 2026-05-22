// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdCompensateStatusGetV10Response } from "../models";


export interface OpenApiV10QianchuanAdCompensateStatusGetGetRequest {
  advertiserId: number | string;
  adIds: number | string[];
}

export class QianchuanAdCompensateStatusGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdCompensateStatusGetGet(request: OpenApiV10QianchuanAdCompensateStatusGetGetRequest): Promise<QianchuanAdCompensateStatusGetV10Response> {
    const response = await this.openApiV10QianchuanAdCompensateStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdCompensateStatusGetGetWithHttpInfo(request: OpenApiV10QianchuanAdCompensateStatusGetGetRequest): Promise<ApiResponse<QianchuanAdCompensateStatusGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAdCompensateStatusGetGet");
    }

    if (request.adIds == null) {
      throw new ApiException("Missing the required parameter 'adIds' when calling openApiV10QianchuanAdCompensateStatusGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdCompensateStatusGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/compensate_status/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_ids", value: request.adIds, collectionFormat: "csv" }
      ]
    });
  }
}


