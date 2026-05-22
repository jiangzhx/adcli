// Generated from oceanengine/ad_open_sdk_go api/api_brand_material_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandMaterialCreateV30Request, BrandMaterialCreateV30Response } from "../models/index";


export interface BrandMaterialCreateV30ApiOpenApiV30BrandMaterialCreatePostRequest {
  brandMaterialCreateV30Request?: BrandMaterialCreateV30Request;
}

export class BrandMaterialCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandMaterialCreatePost(request: BrandMaterialCreateV30ApiOpenApiV30BrandMaterialCreatePostRequest): Promise<BrandMaterialCreateV30Response> {
    const response = await this.openApiV30BrandMaterialCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandMaterialCreatePostWithHttpInfo(request: BrandMaterialCreateV30ApiOpenApiV30BrandMaterialCreatePostRequest): Promise<ApiResponse<BrandMaterialCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandMaterialCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/material/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandMaterialCreateV30Request
    });
  }
}


