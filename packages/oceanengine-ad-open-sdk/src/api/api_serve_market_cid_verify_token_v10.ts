// Generated from oceanengine/ad_open_sdk_go api/api_serve_market_cid_verify_token_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ServeMarketCidVerifyTokenV10Response } from "../models/index";


export interface ServeMarketCidVerifyTokenV10ApiOpenApiV10ServeMarketCidVerifyTokenGetRequest {

}

export class ServeMarketCidVerifyTokenV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10ServeMarketCidVerifyTokenGet(request: ServeMarketCidVerifyTokenV10ApiOpenApiV10ServeMarketCidVerifyTokenGetRequest): Promise<ServeMarketCidVerifyTokenV10Response> {
    const response = await this.openApiV10ServeMarketCidVerifyTokenGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10ServeMarketCidVerifyTokenGetWithHttpInfo(request: ServeMarketCidVerifyTokenV10ApiOpenApiV10ServeMarketCidVerifyTokenGetRequest): Promise<ApiResponse<ServeMarketCidVerifyTokenV10Response>> {

    return this.apiClient.requestWithHttpInfo<ServeMarketCidVerifyTokenV10Response>({
      method: "GET",
      path: "/open_api/v1.0/serve_market/cid/verify_token/",
      queryParams: [

      ]
    });
  }
}


