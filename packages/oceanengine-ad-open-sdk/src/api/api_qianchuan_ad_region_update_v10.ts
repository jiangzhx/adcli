// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_region_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdRegionUpdateV10Request, QianchuanAdRegionUpdateV10Response } from "../models/index";


export interface QianchuanAdRegionUpdateV10ApiOpenApiV10QianchuanAdRegionUpdatePostRequest {
  qianchuanAdRegionUpdateV10Request?: QianchuanAdRegionUpdateV10Request;
}

export class QianchuanAdRegionUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdRegionUpdatePost(request: QianchuanAdRegionUpdateV10ApiOpenApiV10QianchuanAdRegionUpdatePostRequest): Promise<QianchuanAdRegionUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdRegionUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdRegionUpdatePostWithHttpInfo(request: QianchuanAdRegionUpdateV10ApiOpenApiV10QianchuanAdRegionUpdatePostRequest): Promise<ApiResponse<QianchuanAdRegionUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdRegionUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/region/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAdRegionUpdateV10Request
    });
  }
}


