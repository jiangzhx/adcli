// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_detail_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdDetailGetV10Response } from "../models/index";


export interface QianchuanAdDetailGetV10ApiOpenApiV10QianchuanAdDetailGetGetRequest {
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

  async openApiV10QianchuanAdDetailGetGet(request: QianchuanAdDetailGetV10ApiOpenApiV10QianchuanAdDetailGetGetRequest): Promise<QianchuanAdDetailGetV10Response> {
    const response = await this.openApiV10QianchuanAdDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdDetailGetGetWithHttpInfo(request: QianchuanAdDetailGetV10ApiOpenApiV10QianchuanAdDetailGetGetRequest): Promise<ApiResponse<QianchuanAdDetailGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.adId == null) {
      throw new ApiException("adId is required and must be specified");
    }

    if (request.adId != null && Number(request.adId) < 1) {
      throw new ApiException("adId must be greater than 1");
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


