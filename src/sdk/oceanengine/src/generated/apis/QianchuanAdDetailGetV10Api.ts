// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAdDetailGetV10Response } from "../models";


export class QianchuanAdDetailGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdDetailGetGet(advertiserId: number, adId: number, requestMaterialUrl: boolean, version: string): Promise<QianchuanAdDetailGetV10Response> {
    const response = await this.openApiV10QianchuanAdDetailGetGetWithHttpInfo(advertiserId, adId, requestMaterialUrl, version);
    return response.data;
  }

  async openApiV10QianchuanAdDetailGetGetWithHttpInfo(advertiserId: number, adId: number, requestMaterialUrl: boolean, version: string): Promise<ApiResponse<QianchuanAdDetailGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAdDetailGetGet");
    }

    if (adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanAdDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdDetailGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/detail/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_id", value: adId },
        { name: "request_material_url", value: requestMaterialUrl },
        { name: "version", value: version }
      ]
    });
  }
}


