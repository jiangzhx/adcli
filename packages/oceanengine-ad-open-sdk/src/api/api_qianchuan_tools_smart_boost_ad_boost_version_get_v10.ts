// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_tools_smart_boost_ad_boost_version_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanToolsSmartBoostAdBoostVersionGetV10Response } from "../models/index";


export interface QianchuanToolsSmartBoostAdBoostVersionGetV10ApiOpenApiV10QianchuanToolsSmartBoostAdBoostVersionGetGetRequest {
  advertiserId: number | string;
  adId: number | string;
  cursor?: number;
  count?: number;
}

export class QianchuanToolsSmartBoostAdBoostVersionGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostVersionGetGet(request: QianchuanToolsSmartBoostAdBoostVersionGetV10ApiOpenApiV10QianchuanToolsSmartBoostAdBoostVersionGetGetRequest): Promise<QianchuanToolsSmartBoostAdBoostVersionGetV10Response> {
    const response = await this.openApiV10QianchuanToolsSmartBoostAdBoostVersionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostVersionGetGetWithHttpInfo(request: QianchuanToolsSmartBoostAdBoostVersionGetV10ApiOpenApiV10QianchuanToolsSmartBoostAdBoostVersionGetGetRequest): Promise<ApiResponse<QianchuanToolsSmartBoostAdBoostVersionGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanToolsSmartBoostAdBoostVersionGetGet");
    }

    if (request.adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling openApiV10QianchuanToolsSmartBoostAdBoostVersionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanToolsSmartBoostAdBoostVersionGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/version/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_id", value: request.adId },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count }
      ]
    });
  }
}


