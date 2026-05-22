// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_product_available_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeProductAvailableGetV10Response } from "../models/index";


export interface QianchuanAwemeProductAvailableGetV10ApiOpenApiV10QianchuanAwemeProductAvailableGetGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
  cursor?: number;
}

export class QianchuanAwemeProductAvailableGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeProductAvailableGetGet(request: QianchuanAwemeProductAvailableGetV10ApiOpenApiV10QianchuanAwemeProductAvailableGetGetRequest): Promise<QianchuanAwemeProductAvailableGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeProductAvailableGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeProductAvailableGetGetWithHttpInfo(request: QianchuanAwemeProductAvailableGetV10ApiOpenApiV10QianchuanAwemeProductAvailableGetGetRequest): Promise<ApiResponse<QianchuanAwemeProductAvailableGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.awemeId == null) {
      throw new ApiException("awemeId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeProductAvailableGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/product/available/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "cursor", value: request.cursor }
      ]
    });
  }
}


