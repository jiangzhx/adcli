// Generated from oceanengine/ad_open_sdk_go api/api_dmp_brand_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DmpBrandGetV2Response } from "../models/index";


export interface DmpBrandGetV2ApiOpenApi2DmpBrandGetGetRequest {
  advertiserId?: number | string;
}

export class DmpBrandGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpBrandGetGet(request: DmpBrandGetV2ApiOpenApi2DmpBrandGetGetRequest): Promise<DmpBrandGetV2Response> {
    const response = await this.openApi2DmpBrandGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DmpBrandGetGetWithHttpInfo(request: DmpBrandGetV2ApiOpenApi2DmpBrandGetGetRequest): Promise<ApiResponse<DmpBrandGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<DmpBrandGetV2Response>({
      method: "GET",
      path: "/open_api/2/dmp/brand/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


