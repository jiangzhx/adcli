// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeGetV2Filtering, CreativeGetV2Response } from "../models";


export interface OpenApi2CreativeGetGetRequest {
  advertiserId: number;
  filtering?: CreativeGetV2Filtering;
  fields?: string[];
  page?: number;
  pageSize?: number;
  cursor?: number;
  count?: number;
}

export class CreativeGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreativeGetGet(request: OpenApi2CreativeGetGetRequest): Promise<CreativeGetV2Response> {
    const response = await this.openApi2CreativeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2CreativeGetGetWithHttpInfo(request: OpenApi2CreativeGetGetRequest): Promise<ApiResponse<CreativeGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2CreativeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<CreativeGetV2Response>({
      method: "GET",
      path: "/open_api/2/creative/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count }
      ]
    });
  }
}


