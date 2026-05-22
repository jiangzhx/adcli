// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ServeMarketOrderGetV10Filtering, ServeMarketOrderGetV10Response } from "../models";


export interface OpenApiV10ServeMarketOrderGetGetRequest {
  appId?: number | string;
  filtering?: ServeMarketOrderGetV10Filtering;
  page?: number;
  pageSize?: number;
}

export class ServeMarketOrderGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10ServeMarketOrderGetGet(request: OpenApiV10ServeMarketOrderGetGetRequest): Promise<ServeMarketOrderGetV10Response> {
    const response = await this.openApiV10ServeMarketOrderGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10ServeMarketOrderGetGetWithHttpInfo(request: OpenApiV10ServeMarketOrderGetGetRequest): Promise<ApiResponse<ServeMarketOrderGetV10Response>> {

    return this.apiClient.requestWithHttpInfo<ServeMarketOrderGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/serve_market/order/get/",
      queryParams: [
        { name: "app_id", value: request.appId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


