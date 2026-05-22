// Generated from oceanengine/ad_open_sdk_go api/api_brand_material_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandMaterialUpdateV30Request, BrandMaterialUpdateV30Response } from "../models/index";


export interface BrandMaterialUpdateV30ApiOpenApiV30BrandMaterialUpdatePostRequest {
  brandMaterialUpdateV30Request?: BrandMaterialUpdateV30Request;
}

export class BrandMaterialUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandMaterialUpdatePost(request: BrandMaterialUpdateV30ApiOpenApiV30BrandMaterialUpdatePostRequest): Promise<BrandMaterialUpdateV30Response> {
    const response = await this.openApiV30BrandMaterialUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandMaterialUpdatePostWithHttpInfo(request: BrandMaterialUpdateV30ApiOpenApiV30BrandMaterialUpdatePostRequest): Promise<ApiResponse<BrandMaterialUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandMaterialUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/material/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandMaterialUpdateV30Request
    });
  }
}


