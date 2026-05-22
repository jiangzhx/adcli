// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_tools_shop_auth_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanToolsShopAuthV10Request, QianchuanToolsShopAuthV10Response } from "../models/index";


export interface QianchuanToolsShopAuthV10ApiOpenApiV10QianchuanToolsShopAuthPostRequest {
  qianchuanToolsShopAuthV10Request?: QianchuanToolsShopAuthV10Request;
}

export class QianchuanToolsShopAuthV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanToolsShopAuthPost(request: QianchuanToolsShopAuthV10ApiOpenApiV10QianchuanToolsShopAuthPostRequest): Promise<QianchuanToolsShopAuthV10Response> {
    const response = await this.openApiV10QianchuanToolsShopAuthPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanToolsShopAuthPostWithHttpInfo(request: QianchuanToolsShopAuthV10ApiOpenApiV10QianchuanToolsShopAuthPostRequest): Promise<ApiResponse<QianchuanToolsShopAuthV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanToolsShopAuthV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/tools/shop_auth/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanToolsShopAuthV10Request
    });
  }
}


