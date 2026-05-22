// Generated from oceanengine/ad_open_sdk_go api/api_serve_market_active_func_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ServeMarketActiveFuncGetV10Response } from "../models/index";


export interface ServeMarketActiveFuncGetV10ApiOpenApiV10ServeMarketActiveFuncGetGetRequest {
  useUid: number;
  appId: number | string;
  page: number;
  pageSize: number;
  funcKeys?: string[];
}

export class ServeMarketActiveFuncGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10ServeMarketActiveFuncGetGet(request: ServeMarketActiveFuncGetV10ApiOpenApiV10ServeMarketActiveFuncGetGetRequest): Promise<ServeMarketActiveFuncGetV10Response> {
    const response = await this.openApiV10ServeMarketActiveFuncGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10ServeMarketActiveFuncGetGetWithHttpInfo(request: ServeMarketActiveFuncGetV10ApiOpenApiV10ServeMarketActiveFuncGetGetRequest): Promise<ApiResponse<ServeMarketActiveFuncGetV10Response>> {
    if (request.useUid == null) {
      throw new ApiException("Missing the required parameter 'useUid' when calling openApiV10ServeMarketActiveFuncGetGet");
    }

    if (request.appId == null) {
      throw new ApiException("Missing the required parameter 'appId' when calling openApiV10ServeMarketActiveFuncGetGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV10ServeMarketActiveFuncGetGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV10ServeMarketActiveFuncGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ServeMarketActiveFuncGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/serve_market/active_func/get/",
      queryParams: [
        { name: "use_uid", value: request.useUid },
        { name: "app_id", value: request.appId },
        { name: "func_keys", value: request.funcKeys, collectionFormat: "csv" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


