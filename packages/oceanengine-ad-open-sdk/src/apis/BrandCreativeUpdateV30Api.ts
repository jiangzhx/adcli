// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandCreativeUpdateV30Request, BrandCreativeUpdateV30Response } from "../models";


export interface OpenApiV30BrandCreativeUpdatePostRequest {
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

  async openApiV30BrandCreativeUpdatePost(request: OpenApiV30BrandCreativeUpdatePostRequest): Promise<BrandCreativeUpdateV30Response> {
    const response = await this.openApiV30BrandCreativeUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCreativeUpdatePostWithHttpInfo(request: OpenApiV30BrandCreativeUpdatePostRequest): Promise<ApiResponse<BrandCreativeUpdateV30Response>> {

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


