// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { NativeAnchorGetV30Filtering, NativeAnchorGetV30Response } from "../models";


export class NativeAnchorGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30NativeAnchorGetGet(advertiserId: number, page: number, pageSize: number, filtering: NativeAnchorGetV30Filtering): Promise<NativeAnchorGetV30Response> {
    const response = await this.openApiV30NativeAnchorGetGetWithHttpInfo(advertiserId, page, pageSize, filtering);
    return response.data;
  }

  async openApiV30NativeAnchorGetGetWithHttpInfo(advertiserId: number, page: number, pageSize: number, filtering: NativeAnchorGetV30Filtering): Promise<ApiResponse<NativeAnchorGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30NativeAnchorGetGet");
    }
    return this.apiClient.requestWithHttpInfo<NativeAnchorGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/native_anchor/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


