// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdDetailGetV10Response } from "../models";


export interface OpenApiV10QianchuanAdDetailGetGetRequest {
  advertiserId: number | string;
  adId: number | string;
  requestMaterialUrl?: boolean;
  version?: string;
}

export class QianchuanAdDetailGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdDetailGetGet(request: OpenApiV10QianchuanAdDetailGetGetRequest): Promise<QianchuanAdDetailGetV10Response> {
    const response = await this.openApiV10QianchuanAdDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdDetailGetGetWithHttpInfo(request: OpenApiV10QianchuanAdDetailGetGetRequest): Promise<ApiResponse<QianchuanAdDetailGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAdDetailGetGet");
    }

    if (request.adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanAdDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdDetailGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/detail/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_id", value: request.adId },
        { name: "request_material_url", value: request.requestMaterialUrl },
        { name: "version", value: request.version }
      ]
    });
  }
}


