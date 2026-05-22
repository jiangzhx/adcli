// Generated from oceanengine/ad_open_sdk_go api/api_brand_order_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandOrderCreateV30Request, BrandOrderCreateV30Response } from "../models/index";


export interface BrandOrderCreateV30ApiOpenApiV30BrandOrderCreatePostRequest {
  brandOrderCreateV30Request?: BrandOrderCreateV30Request;
}

export class BrandOrderCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandOrderCreatePost(request: BrandOrderCreateV30ApiOpenApiV30BrandOrderCreatePostRequest): Promise<BrandOrderCreateV30Response> {
    const response = await this.openApiV30BrandOrderCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandOrderCreatePostWithHttpInfo(request: BrandOrderCreateV30ApiOpenApiV30BrandOrderCreatePostRequest): Promise<ApiResponse<BrandOrderCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandOrderCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/order/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandOrderCreateV30Request
    });
  }
}


