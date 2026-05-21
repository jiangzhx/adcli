// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BrandToolMaterialPreviewV30Response } from "../models";


export class BrandToolMaterialPreviewV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandToolMaterialPreviewGet(advertiserId: number, materialId: number): Promise<BrandToolMaterialPreviewV30Response> {
    const response = await this.openApiV30BrandToolMaterialPreviewGetWithHttpInfo(advertiserId, materialId);
    return response.data;
  }

  async openApiV30BrandToolMaterialPreviewGetWithHttpInfo(advertiserId: number, materialId: number): Promise<ApiResponse<BrandToolMaterialPreviewV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandToolMaterialPreviewGet");
    }

    if (materialId == null) {
      throw new ApiException("Missing the required parameter 'materialId' when calling openApiV30BrandToolMaterialPreviewGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandToolMaterialPreviewV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/tool/material_preview/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "material_id", value: materialId }
      ]
    });
  }
}


