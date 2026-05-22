// Generated from oceanengine/ad_open_sdk_go api/api_assets_creative_component_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AssetsCreativeComponentGetV2Filtering, AssetsCreativeComponentGetV2Response } from "../models/index";


export interface AssetsCreativeComponentGetV2ApiOpenApi2AssetsCreativeComponentGetGetRequest {
  advertiserId: number | string;
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

  async openApi2AssetsCreativeComponentGetGet(request: AssetsCreativeComponentGetV2ApiOpenApi2AssetsCreativeComponentGetGetRequest): Promise<AssetsCreativeComponentGetV2Response> {
    const response = await this.openApi2AssetsCreativeComponentGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AssetsCreativeComponentGetGetWithHttpInfo(request: AssetsCreativeComponentGetV2ApiOpenApi2AssetsCreativeComponentGetGetRequest): Promise<ApiResponse<AssetsCreativeComponentGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
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


