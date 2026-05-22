// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_tools_smart_boost_ad_boost_status_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanToolsSmartBoostAdBoostStatusGetV10Response } from "../models/index";


export interface QianchuanToolsSmartBoostAdBoostStatusGetV10ApiOpenApiV10QianchuanToolsSmartBoostAdBoostStatusGetGetRequest {
  advertiserId: number | string;
  adIds: number | string[];
}

export class QianchuanToolsSmartBoostAdBoostStatusGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostStatusGetGet(request: QianchuanToolsSmartBoostAdBoostStatusGetV10ApiOpenApiV10QianchuanToolsSmartBoostAdBoostStatusGetGetRequest): Promise<QianchuanToolsSmartBoostAdBoostStatusGetV10Response> {
    const response = await this.openApiV10QianchuanToolsSmartBoostAdBoostStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanToolsSmartBoostAdBoostStatusGetGetWithHttpInfo(request: QianchuanToolsSmartBoostAdBoostStatusGetV10ApiOpenApiV10QianchuanToolsSmartBoostAdBoostStatusGetGetRequest): Promise<ApiResponse<QianchuanToolsSmartBoostAdBoostStatusGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanToolsSmartBoostAdBoostStatusGetGet");
    }

    if (request.adIds == null) {
      throw new ApiException("Missing the required parameter 'adIds' when calling openApiV10QianchuanToolsSmartBoostAdBoostStatusGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanToolsSmartBoostAdBoostStatusGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/status/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_ids", value: request.adIds }
      ]
    });
  }
}


