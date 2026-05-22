// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandOrderUpdateV30Request, BrandOrderUpdateV30Response } from "../models";


export class BrandOrderUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandOrderUpdatePost(brandOrderUpdateV30Request: BrandOrderUpdateV30Request): Promise<BrandOrderUpdateV30Response> {
    const response = await this.openApiV30BrandOrderUpdatePostWithHttpInfo(brandOrderUpdateV30Request);
    return response.data;
  }

  async openApiV30BrandOrderUpdatePostWithHttpInfo(brandOrderUpdateV30Request: BrandOrderUpdateV30Request): Promise<ApiResponse<BrandOrderUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandOrderUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/order/update/",
      queryParams: [

      ],
      body: brandOrderUpdateV30Request
    });
  }
}


