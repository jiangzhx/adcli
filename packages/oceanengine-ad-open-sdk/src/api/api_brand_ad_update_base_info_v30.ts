// Generated from oceanengine/ad_open_sdk_go api/api_brand_ad_update_base_info_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandAdUpdateBaseInfoV30Request, BrandAdUpdateBaseInfoV30Response } from "../models/index";


export interface BrandAdUpdateBaseInfoV30ApiOpenApiV30BrandAdUpdateBaseInfoPostRequest {
  brandAdUpdateBaseInfoV30Request?: BrandAdUpdateBaseInfoV30Request;
}

export class BrandAdUpdateBaseInfoV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandAdUpdateBaseInfoPost(request: BrandAdUpdateBaseInfoV30ApiOpenApiV30BrandAdUpdateBaseInfoPostRequest): Promise<BrandAdUpdateBaseInfoV30Response> {
    const response = await this.openApiV30BrandAdUpdateBaseInfoPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandAdUpdateBaseInfoPostWithHttpInfo(request: BrandAdUpdateBaseInfoV30ApiOpenApiV30BrandAdUpdateBaseInfoPostRequest): Promise<ApiResponse<BrandAdUpdateBaseInfoV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandAdUpdateBaseInfoV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/ad/update_base_info/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandAdUpdateBaseInfoV30Request
    });
  }
}


