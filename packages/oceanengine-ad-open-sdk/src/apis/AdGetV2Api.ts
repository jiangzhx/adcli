// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdGetV2Filtering, AdGetV2Response } from "../models";


export class AdGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdGetGet(advertiserId: number, fields: string[], filtering: AdGetV2Filtering, page: number, pageSize: number): Promise<AdGetV2Response> {
    const response = await this.openApi2AdGetGetWithHttpInfo(advertiserId, fields, filtering, page, pageSize);
    return response.data;
  }

  async openApi2AdGetGetWithHttpInfo(advertiserId: number, fields: string[], filtering: AdGetV2Filtering, page: number, pageSize: number): Promise<ApiResponse<AdGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdGetV2Response>({
      method: "GET",
      path: "/open_api/2/ad/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "fields", value: fields, collectionFormat: "multi" }
      ]
    });
  }
}


