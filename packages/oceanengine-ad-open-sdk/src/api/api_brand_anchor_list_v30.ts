// Generated from oceanengine/ad_open_sdk_go api/api_brand_anchor_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandAnchorListV30Page, BrandAnchorListV30Response } from "../models/index";


export interface BrandAnchorListV30ApiOpenApiV30BrandAnchorListGetRequest {
  advertiserId?: number | string;
  page?: BrandAnchorListV30Page;
}

export class BrandAnchorListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandAnchorListGet(request: BrandAnchorListV30ApiOpenApiV30BrandAnchorListGetRequest): Promise<BrandAnchorListV30Response> {
    const response = await this.openApiV30BrandAnchorListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandAnchorListGetWithHttpInfo(request: BrandAnchorListV30ApiOpenApiV30BrandAnchorListGetRequest): Promise<ApiResponse<BrandAnchorListV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandAnchorListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/anchor/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page }
      ]
    });
  }
}


