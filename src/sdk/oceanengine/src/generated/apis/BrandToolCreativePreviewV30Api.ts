// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { BrandToolCreativePreviewV30Response } from "../models";


export class BrandToolCreativePreviewV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandToolCreativePreviewGet(advertiserId: number, creativeId: number): Promise<BrandToolCreativePreviewV30Response> {
    const response = await this.openApiV30BrandToolCreativePreviewGetWithHttpInfo(advertiserId, creativeId);
    return response.data;
  }

  async openApiV30BrandToolCreativePreviewGetWithHttpInfo(advertiserId: number, creativeId: number): Promise<ApiResponse<BrandToolCreativePreviewV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandToolCreativePreviewGet");
    }

    if (creativeId == null) {
      throw new ApiException("Missing the required parameter 'creativeId' when calling openApiV30BrandToolCreativePreviewGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandToolCreativePreviewV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/tool/creative_preview/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "creative_id", value: creativeId }
      ]
    });
  }
}


