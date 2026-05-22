// Generated from oceanengine/ad_open_sdk_go api/api_native_anchor_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { NativeAnchorGetV30Filtering, NativeAnchorGetV30Response } from "../models/index";


export interface NativeAnchorGetV30ApiOpenApiV30NativeAnchorGetGetRequest {
  advertiserId: number | string;
  page?: number;
  pageSize?: number;
  filtering?: NativeAnchorGetV30Filtering;
}

export class NativeAnchorGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30NativeAnchorGetGet(request: NativeAnchorGetV30ApiOpenApiV30NativeAnchorGetGetRequest): Promise<NativeAnchorGetV30Response> {
    const response = await this.openApiV30NativeAnchorGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30NativeAnchorGetGetWithHttpInfo(request: NativeAnchorGetV30ApiOpenApiV30NativeAnchorGetGetRequest): Promise<ApiResponse<NativeAnchorGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<NativeAnchorGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/native_anchor/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


