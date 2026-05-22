// Generated from oceanengine/ad_open_sdk_go api/api_cdp_brand_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CdpBrandGetV30Response } from "../models/index";


export interface CdpBrandGetV30ApiOpenApiV30CdpBrandGetGetRequest {
  advertiserId: number | string;
}

export class CdpBrandGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CdpBrandGetGet(request: CdpBrandGetV30ApiOpenApiV30CdpBrandGetGetRequest): Promise<CdpBrandGetV30Response> {
    const response = await this.openApiV30CdpBrandGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CdpBrandGetGetWithHttpInfo(request: CdpBrandGetV30ApiOpenApiV30CdpBrandGetGetRequest): Promise<ApiResponse<CdpBrandGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30CdpBrandGetGet");
    }
    return this.apiClient.requestWithHttpInfo<CdpBrandGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cdp/brand/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


