// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandAdUpdateBaseInfoV30Request, BrandAdUpdateBaseInfoV30Response } from "../models";


export interface OpenApiV30BrandAdUpdateBaseInfoPostRequest {
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

  async openApiV30BrandAdUpdateBaseInfoPost(request: OpenApiV30BrandAdUpdateBaseInfoPostRequest): Promise<BrandAdUpdateBaseInfoV30Response> {
    const response = await this.openApiV30BrandAdUpdateBaseInfoPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandAdUpdateBaseInfoPostWithHttpInfo(request: OpenApiV30BrandAdUpdateBaseInfoPostRequest): Promise<ApiResponse<BrandAdUpdateBaseInfoV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandAdUpdateBaseInfoV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/ad/update_base_info/",
      queryParams: [

      ],
      body: request.brandAdUpdateBaseInfoV30Request
    });
  }
}


