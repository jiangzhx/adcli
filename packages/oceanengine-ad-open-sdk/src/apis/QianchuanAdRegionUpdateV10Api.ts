// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdRegionUpdateV10Request, QianchuanAdRegionUpdateV10Response } from "../models";


export class QianchuanAdRegionUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdRegionUpdatePost(request: QianchuanAdRegionUpdateV10Request): Promise<QianchuanAdRegionUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdRegionUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdRegionUpdatePostWithHttpInfo(request: QianchuanAdRegionUpdateV10Request): Promise<ApiResponse<QianchuanAdRegionUpdateV10Response>> {
    return this.apiClient.requestWithHttpInfo<QianchuanAdRegionUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/region/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


