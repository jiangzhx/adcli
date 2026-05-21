// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BrandOrderCreateV30Request, BrandOrderCreateV30Response } from "../models";


export class BrandOrderCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandOrderCreatePost(brandOrderCreateV30Request: BrandOrderCreateV30Request): Promise<BrandOrderCreateV30Response> {
    const response = await this.openApiV30BrandOrderCreatePostWithHttpInfo(brandOrderCreateV30Request);
    return response.data;
  }

  async openApiV30BrandOrderCreatePostWithHttpInfo(brandOrderCreateV30Request: BrandOrderCreateV30Request): Promise<ApiResponse<BrandOrderCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandOrderCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/order/create/",
      queryParams: [

      ],
      body: brandOrderCreateV30Request
    });
  }
}


