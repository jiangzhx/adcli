// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BrandCreativeDeleteV30Request, BrandCreativeDeleteV30Response } from "../models";


export class BrandCreativeDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCreativeDeletePost(brandCreativeDeleteV30Request: BrandCreativeDeleteV30Request): Promise<BrandCreativeDeleteV30Response> {
    const response = await this.openApiV30BrandCreativeDeletePostWithHttpInfo(brandCreativeDeleteV30Request);
    return response.data;
  }

  async openApiV30BrandCreativeDeletePostWithHttpInfo(brandCreativeDeleteV30Request: BrandCreativeDeleteV30Request): Promise<ApiResponse<BrandCreativeDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCreativeDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/creative/delete/",
      queryParams: [

      ],
      body: brandCreativeDeleteV30Request
    });
  }
}


