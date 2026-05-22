// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_audience_list_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAudienceListGetV10Filtering, QianchuanAudienceListGetV10Response } from "../models/index";


export interface QianchuanAudienceListGetV10ApiOpenApiV10QianchuanAudienceListGetGetRequest {
  advertiserId: number | string;
  filtering?: QianchuanAudienceListGetV10Filtering;
  page?: number;
  pageSize?: number;
}

export class QianchuanAudienceListGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAudienceListGetGet(request: QianchuanAudienceListGetV10ApiOpenApiV10QianchuanAudienceListGetGetRequest): Promise<QianchuanAudienceListGetV10Response> {
    const response = await this.openApiV10QianchuanAudienceListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAudienceListGetGetWithHttpInfo(request: QianchuanAudienceListGetV10ApiOpenApiV10QianchuanAudienceListGetGetRequest): Promise<ApiResponse<QianchuanAudienceListGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAudienceListGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/audience_list/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


