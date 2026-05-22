// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ServeMarketOrderGetV10Filtering, ServeMarketOrderGetV10Response } from "../models";


export class ServeMarketOrderGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10ServeMarketOrderGetGet(appId: number, filtering: ServeMarketOrderGetV10Filtering, page: number, pageSize: number): Promise<ServeMarketOrderGetV10Response> {
    const response = await this.openApiV10ServeMarketOrderGetGetWithHttpInfo(appId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV10ServeMarketOrderGetGetWithHttpInfo(appId: number, filtering: ServeMarketOrderGetV10Filtering, page: number, pageSize: number): Promise<ApiResponse<ServeMarketOrderGetV10Response>> {

    return this.apiClient.requestWithHttpInfo<ServeMarketOrderGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/serve_market/order/get/",
      queryParams: [
        { name: "app_id", value: appId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


