// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DmpBrandGetV2Response } from "../models";


export interface OpenApi2DmpBrandGetGetRequest {
  advertiserId?: number;
}

export class DmpBrandGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpBrandGetGet(request: OpenApi2DmpBrandGetGetRequest): Promise<DmpBrandGetV2Response> {
    const response = await this.openApi2DmpBrandGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DmpBrandGetGetWithHttpInfo(request: OpenApi2DmpBrandGetGetRequest): Promise<ApiResponse<DmpBrandGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<DmpBrandGetV2Response>({
      method: "GET",
      path: "/open_api/2/dmp/brand/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


