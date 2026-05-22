// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_qianchuan_video_star_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanQianchuanVideoStarGetV10Filtering, QianchuanQianchuanVideoStarGetV10OrderField, QianchuanQianchuanVideoStarGetV10Response } from "../models/index";


export interface QianchuanQianchuanVideoStarGetV10ApiOpenApiV10QianchuanQianchuanVideoStarGetGetRequest {
  advertiserId: number | string;
  filtering?: QianchuanQianchuanVideoStarGetV10Filtering;
  orderField?: QianchuanQianchuanVideoStarGetV10OrderField;
  cursor?: number;
  count?: number;
}

export class QianchuanQianchuanVideoStarGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanQianchuanVideoStarGetGet(request: QianchuanQianchuanVideoStarGetV10ApiOpenApiV10QianchuanQianchuanVideoStarGetGetRequest): Promise<QianchuanQianchuanVideoStarGetV10Response> {
    const response = await this.openApiV10QianchuanQianchuanVideoStarGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanQianchuanVideoStarGetGetWithHttpInfo(request: QianchuanQianchuanVideoStarGetV10ApiOpenApiV10QianchuanQianchuanVideoStarGetGetRequest): Promise<ApiResponse<QianchuanQianchuanVideoStarGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanQianchuanVideoStarGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanQianchuanVideoStarGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/qianchuan/video/star/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "order_field", value: request.orderField },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count }
      ]
    });
  }
}


