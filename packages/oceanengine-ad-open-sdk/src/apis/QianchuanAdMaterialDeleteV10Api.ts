// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdMaterialDeleteV10Request, QianchuanAdMaterialDeleteV10Response } from "../models";


export class QianchuanAdMaterialDeleteV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdMaterialDeletePost(qianchuanAdMaterialDeleteV10Request: QianchuanAdMaterialDeleteV10Request): Promise<QianchuanAdMaterialDeleteV10Response> {
    const response = await this.openApiV10QianchuanAdMaterialDeletePostWithHttpInfo(qianchuanAdMaterialDeleteV10Request);
    return response.data;
  }

  async openApiV10QianchuanAdMaterialDeletePostWithHttpInfo(qianchuanAdMaterialDeleteV10Request: QianchuanAdMaterialDeleteV10Request): Promise<ApiResponse<QianchuanAdMaterialDeleteV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdMaterialDeleteV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/material/delete/",
      queryParams: [

      ],
      body: qianchuanAdMaterialDeleteV10Request
    });
  }
}


