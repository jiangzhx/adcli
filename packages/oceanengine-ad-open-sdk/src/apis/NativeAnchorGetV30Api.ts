// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { NativeAnchorGetV30Filtering, NativeAnchorGetV30Response } from "../models";


export interface OpenApiV30NativeAnchorGetGetRequest {
  advertiserId: number;
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

  async openApiV30NativeAnchorGetGet(request: OpenApiV30NativeAnchorGetGetRequest): Promise<NativeAnchorGetV30Response> {
    const response = await this.openApiV30NativeAnchorGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30NativeAnchorGetGetWithHttpInfo(request: OpenApiV30NativeAnchorGetGetRequest): Promise<ApiResponse<NativeAnchorGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30NativeAnchorGetGet");
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


