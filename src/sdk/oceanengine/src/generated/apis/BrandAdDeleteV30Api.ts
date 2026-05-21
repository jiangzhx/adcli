// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BrandAdDeleteV30Request, BrandAdDeleteV30Response } from "../models";


export class BrandAdDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandAdDeletePost(brandAdDeleteV30Request: BrandAdDeleteV30Request): Promise<BrandAdDeleteV30Response> {
    const response = await this.openApiV30BrandAdDeletePostWithHttpInfo(brandAdDeleteV30Request);
    return response.data;
  }

  async openApiV30BrandAdDeletePostWithHttpInfo(brandAdDeleteV30Request: BrandAdDeleteV30Request): Promise<ApiResponse<BrandAdDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandAdDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/ad/delete/",
      queryParams: [

      ],
      body: brandAdDeleteV30Request
    });
  }
}


