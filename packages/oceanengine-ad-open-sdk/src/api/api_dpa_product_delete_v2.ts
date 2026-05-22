// Generated from oceanengine/ad_open_sdk_go api/api_dpa_product_delete_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaProductDeleteV2Request, DpaProductDeleteV2Response } from "../models/index";


export interface DpaProductDeleteV2ApiOpenApi2DpaProductDeletePostRequest {
  dpaProductDeleteV2Request?: DpaProductDeleteV2Request;
}

export class DpaProductDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaProductDeletePost(request: DpaProductDeleteV2ApiOpenApi2DpaProductDeletePostRequest): Promise<DpaProductDeleteV2Response> {
    const response = await this.openApi2DpaProductDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaProductDeletePostWithHttpInfo(request: DpaProductDeleteV2ApiOpenApi2DpaProductDeletePostRequest): Promise<ApiResponse<DpaProductDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaProductDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/product/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dpaProductDeleteV2Request
    });
  }
}


