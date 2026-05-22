// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandToolMaterialPreviewV30Response } from "../models";


export interface OpenApiV30BrandToolMaterialPreviewGetRequest {
  advertiserId: number;
  materialId: number;
}

export class BrandToolMaterialPreviewV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandToolMaterialPreviewGet(request: OpenApiV30BrandToolMaterialPreviewGetRequest): Promise<BrandToolMaterialPreviewV30Response> {
    const response = await this.openApiV30BrandToolMaterialPreviewGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandToolMaterialPreviewGetWithHttpInfo(request: OpenApiV30BrandToolMaterialPreviewGetRequest): Promise<ApiResponse<BrandToolMaterialPreviewV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandToolMaterialPreviewGet");
    }

    if (request.materialId == null) {
      throw new ApiException("Missing the required parameter 'materialId' when calling openApiV30BrandToolMaterialPreviewGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandToolMaterialPreviewV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/tool/material_preview/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "material_id", value: request.materialId }
      ]
    });
  }
}


