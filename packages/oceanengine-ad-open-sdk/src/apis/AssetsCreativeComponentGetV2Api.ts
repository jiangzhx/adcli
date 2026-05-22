// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AssetsCreativeComponentGetV2Filtering, AssetsCreativeComponentGetV2Response } from "../models";


export interface OpenApi2AssetsCreativeComponentGetGetRequest {
  advertiserId: number;
  page?: number;
  pageSize?: number;
  filtering?: AssetsCreativeComponentGetV2Filtering;
}

export class AssetsCreativeComponentGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AssetsCreativeComponentGetGet(request: OpenApi2AssetsCreativeComponentGetGetRequest): Promise<AssetsCreativeComponentGetV2Response> {
    const response = await this.openApi2AssetsCreativeComponentGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AssetsCreativeComponentGetGetWithHttpInfo(request: OpenApi2AssetsCreativeComponentGetGetRequest): Promise<ApiResponse<AssetsCreativeComponentGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AssetsCreativeComponentGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AssetsCreativeComponentGetV2Response>({
      method: "GET",
      path: "/open_api/2/assets/creative_component/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


