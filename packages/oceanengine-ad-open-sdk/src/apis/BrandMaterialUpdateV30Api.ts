// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandMaterialUpdateV30Request, BrandMaterialUpdateV30Response } from "../models";


export class BrandMaterialUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandMaterialUpdatePost(request: BrandMaterialUpdateV30Request): Promise<BrandMaterialUpdateV30Response> {
    const response = await this.openApiV30BrandMaterialUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandMaterialUpdatePostWithHttpInfo(request: BrandMaterialUpdateV30Request): Promise<ApiResponse<BrandMaterialUpdateV30Response>> {
    return this.apiClient.requestWithHttpInfo<BrandMaterialUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/material/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


