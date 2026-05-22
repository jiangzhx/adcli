// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdGetV2Filtering, AdGetV2Response } from "../models";


export interface OpenApi2AdGetGetRequest {
  advertiserId?: number;
  fields?: string[];
  filtering?: AdGetV2Filtering;
  page?: number;
  pageSize?: number;
}

export class AdGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdGetGet(request: OpenApi2AdGetGetRequest): Promise<AdGetV2Response> {
    const response = await this.openApi2AdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdGetGetWithHttpInfo(request: OpenApi2AdGetGetRequest): Promise<ApiResponse<AdGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdGetV2Response>({
      method: "GET",
      path: "/open_api/2/ad/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


