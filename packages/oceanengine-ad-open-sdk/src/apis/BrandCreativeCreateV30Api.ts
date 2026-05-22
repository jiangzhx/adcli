// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandCreativeCreateV30Request, BrandCreativeCreateV30Response } from "../models";


export class BrandCreativeCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCreativeCreatePost(request: BrandCreativeCreateV30Request): Promise<BrandCreativeCreateV30Response> {
    const response = await this.openApiV30BrandCreativeCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCreativeCreatePostWithHttpInfo(request: BrandCreativeCreateV30Request): Promise<ApiResponse<BrandCreativeCreateV30Response>> {
    return this.apiClient.requestWithHttpInfo<BrandCreativeCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/creative/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


