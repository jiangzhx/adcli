// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanToolsShopAuthV10Request, QianchuanToolsShopAuthV10Response } from "../models";


export class QianchuanToolsShopAuthV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsShopAuthPost(qianchuanToolsShopAuthV10Request: QianchuanToolsShopAuthV10Request): Promise<QianchuanToolsShopAuthV10Response> {
    const response = await this.openApiV10QianchuanToolsShopAuthPostWithHttpInfo(qianchuanToolsShopAuthV10Request);
    return response.data;
  }

  async openApiV10QianchuanToolsShopAuthPostWithHttpInfo(qianchuanToolsShopAuthV10Request: QianchuanToolsShopAuthV10Request): Promise<ApiResponse<QianchuanToolsShopAuthV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanToolsShopAuthV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/tools/shop_auth/",
      queryParams: [

      ],
      body: qianchuanToolsShopAuthV10Request
    });
  }
}


