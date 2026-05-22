// Generated from oceanengine/ad_open_sdk_go api/api_brand_creative_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandCreativeUpdateV30Request, BrandCreativeUpdateV30Response } from "../models/index";


export interface BrandCreativeUpdateV30ApiOpenApiV30BrandCreativeUpdatePostRequest {
  brandCreativeUpdateV30Request?: BrandCreativeUpdateV30Request;
}

export class BrandCreativeUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCreativeUpdatePost(request: BrandCreativeUpdateV30ApiOpenApiV30BrandCreativeUpdatePostRequest): Promise<BrandCreativeUpdateV30Response> {
    const response = await this.openApiV30BrandCreativeUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCreativeUpdatePostWithHttpInfo(request: BrandCreativeUpdateV30ApiOpenApiV30BrandCreativeUpdatePostRequest): Promise<ApiResponse<BrandCreativeUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCreativeUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/creative/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandCreativeUpdateV30Request
    });
  }
}


