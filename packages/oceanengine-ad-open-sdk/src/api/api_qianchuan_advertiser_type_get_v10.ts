// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_advertiser_type_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdvertiserTypeGetV10Response } from "../models/index";


export interface QianchuanAdvertiserTypeGetV10ApiOpenApiV10QianchuanAdvertiserTypeGetGetRequest {
  advertiserIds: number | string[];
}

export class QianchuanAdvertiserTypeGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdvertiserTypeGetGet(request: QianchuanAdvertiserTypeGetV10ApiOpenApiV10QianchuanAdvertiserTypeGetGetRequest): Promise<QianchuanAdvertiserTypeGetV10Response> {
    const response = await this.openApiV10QianchuanAdvertiserTypeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdvertiserTypeGetGetWithHttpInfo(request: QianchuanAdvertiserTypeGetV10ApiOpenApiV10QianchuanAdvertiserTypeGetGetRequest): Promise<ApiResponse<QianchuanAdvertiserTypeGetV10Response>> {
    if (request.advertiserIds == null) {
      throw new ApiException("Missing the required parameter 'advertiserIds' when calling openApiV10QianchuanAdvertiserTypeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdvertiserTypeGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/advertiser/type/get/",
      queryParams: [
        { name: "advertiser_ids", value: request.advertiserIds }
      ]
    });
  }
}


