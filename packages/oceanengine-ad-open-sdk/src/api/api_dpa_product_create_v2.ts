// Generated from oceanengine/ad_open_sdk_go api/api_dpa_product_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaProductCreateV2Request, DpaProductCreateV2Response } from "../models/index";


export interface DpaProductCreateV2ApiOpenApi2DpaProductCreatePostRequest {
  dpaProductCreateV2Request?: DpaProductCreateV2Request;
}

export class DpaProductCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaProductCreatePost(request: DpaProductCreateV2ApiOpenApi2DpaProductCreatePostRequest): Promise<DpaProductCreateV2Response> {
    const response = await this.openApi2DpaProductCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaProductCreatePostWithHttpInfo(request: DpaProductCreateV2ApiOpenApi2DpaProductCreatePostRequest): Promise<ApiResponse<DpaProductCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaProductCreateV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/product/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dpaProductCreateV2Request
    });
  }
}


