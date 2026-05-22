// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ServeMarketCidVerifyTokenV10Response } from "../models";


export interface OpenApiV10ServeMarketCidVerifyTokenGetRequest {

}

export class ServeMarketCidVerifyTokenV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10ServeMarketCidVerifyTokenGet(request: OpenApiV10ServeMarketCidVerifyTokenGetRequest): Promise<ServeMarketCidVerifyTokenV10Response> {
    const response = await this.openApiV10ServeMarketCidVerifyTokenGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10ServeMarketCidVerifyTokenGetWithHttpInfo(request: OpenApiV10ServeMarketCidVerifyTokenGetRequest): Promise<ApiResponse<ServeMarketCidVerifyTokenV10Response>> {

    return this.apiClient.requestWithHttpInfo<ServeMarketCidVerifyTokenV10Response>({
      method: "GET",
      path: "/open_api/v1.0/serve_market/cid/verify_token/",
      queryParams: [

      ]
    });
  }
}


