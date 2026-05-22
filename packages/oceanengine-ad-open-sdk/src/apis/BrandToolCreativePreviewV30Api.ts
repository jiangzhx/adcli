// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandToolCreativePreviewV30Response } from "../models";


export interface OpenApiV30BrandToolCreativePreviewGetRequest {
  advertiserId: number;
  creativeId: number;
}

export class BrandToolCreativePreviewV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandToolCreativePreviewGet(request: OpenApiV30BrandToolCreativePreviewGetRequest): Promise<BrandToolCreativePreviewV30Response> {
    const response = await this.openApiV30BrandToolCreativePreviewGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandToolCreativePreviewGetWithHttpInfo(request: OpenApiV30BrandToolCreativePreviewGetRequest): Promise<ApiResponse<BrandToolCreativePreviewV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandToolCreativePreviewGet");
    }

    if (request.creativeId == null) {
      throw new ApiException("Missing the required parameter 'creativeId' when calling openApiV30BrandToolCreativePreviewGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandToolCreativePreviewV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/tool/creative_preview/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "creative_id", value: request.creativeId }
      ]
    });
  }
}


