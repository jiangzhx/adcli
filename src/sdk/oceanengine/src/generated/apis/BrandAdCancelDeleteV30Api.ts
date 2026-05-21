// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BrandAdCancelDeleteV30Request, BrandAdCancelDeleteV30Response } from "../models";


export class BrandAdCancelDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandAdCancelDeletePost(brandAdCancelDeleteV30Request: BrandAdCancelDeleteV30Request): Promise<BrandAdCancelDeleteV30Response> {
    const response = await this.openApiV30BrandAdCancelDeletePostWithHttpInfo(brandAdCancelDeleteV30Request);
    return response.data;
  }

  async openApiV30BrandAdCancelDeletePostWithHttpInfo(brandAdCancelDeleteV30Request: BrandAdCancelDeleteV30Request): Promise<ApiResponse<BrandAdCancelDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandAdCancelDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/ad/cancel_delete/",
      queryParams: [

      ],
      body: brandAdCancelDeleteV30Request
    });
  }
}


