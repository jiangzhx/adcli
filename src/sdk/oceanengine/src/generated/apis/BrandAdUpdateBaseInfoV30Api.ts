// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BrandAdUpdateBaseInfoV30Request, BrandAdUpdateBaseInfoV30Response } from "../models";


export class BrandAdUpdateBaseInfoV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandAdUpdateBaseInfoPost(brandAdUpdateBaseInfoV30Request: BrandAdUpdateBaseInfoV30Request): Promise<BrandAdUpdateBaseInfoV30Response> {
    const response = await this.openApiV30BrandAdUpdateBaseInfoPostWithHttpInfo(brandAdUpdateBaseInfoV30Request);
    return response.data;
  }

  async openApiV30BrandAdUpdateBaseInfoPostWithHttpInfo(brandAdUpdateBaseInfoV30Request: BrandAdUpdateBaseInfoV30Request): Promise<ApiResponse<BrandAdUpdateBaseInfoV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandAdUpdateBaseInfoV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/ad/update_base_info/",
      queryParams: [

      ],
      body: brandAdUpdateBaseInfoV30Request
    });
  }
}


