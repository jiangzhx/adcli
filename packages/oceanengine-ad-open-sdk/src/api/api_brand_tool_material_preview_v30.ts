// Generated from oceanengine/ad_open_sdk_go api/api_brand_tool_material_preview_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandToolMaterialPreviewV30Response } from "../models/index";


export interface BrandToolMaterialPreviewV30ApiOpenApiV30BrandToolMaterialPreviewGetRequest {
  advertiserId: number | string;
  materialId: number | string;
}

export class BrandToolMaterialPreviewV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandToolMaterialPreviewGet(request: BrandToolMaterialPreviewV30ApiOpenApiV30BrandToolMaterialPreviewGetRequest): Promise<BrandToolMaterialPreviewV30Response> {
    const response = await this.openApiV30BrandToolMaterialPreviewGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandToolMaterialPreviewGetWithHttpInfo(request: BrandToolMaterialPreviewV30ApiOpenApiV30BrandToolMaterialPreviewGetRequest): Promise<ApiResponse<BrandToolMaterialPreviewV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.materialId == null) {
      throw new ApiException("materialId is required and must be specified");
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


