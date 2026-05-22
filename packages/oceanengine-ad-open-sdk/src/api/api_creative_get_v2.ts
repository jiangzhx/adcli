// Generated from oceanengine/ad_open_sdk_go api/api_creative_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CreativeGetV2Filtering, CreativeGetV2Response } from "../models/index";


export interface CreativeGetV2ApiOpenApi2CreativeGetGetRequest {
  advertiserId: number | string;
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

  async openApi2CreativeGetGet(request: CreativeGetV2ApiOpenApi2CreativeGetGetRequest): Promise<CreativeGetV2Response> {
    const response = await this.openApi2CreativeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2CreativeGetGetWithHttpInfo(request: CreativeGetV2ApiOpenApi2CreativeGetGetRequest): Promise<ApiResponse<CreativeGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<CreativeGetV2Response>({
      method: "GET",
      path: "/open_api/2/creative/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "fields", value: request.fields },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count }
      ]
    });
  }
}


