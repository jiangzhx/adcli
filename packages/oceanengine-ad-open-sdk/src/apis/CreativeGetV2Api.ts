// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeGetV2Filtering, CreativeGetV2Response } from "../models";


export class CreativeGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreativeGetGet(advertiserId: number, filtering: CreativeGetV2Filtering, fields: string[], page: number, pageSize: number, cursor: number, count: number): Promise<CreativeGetV2Response> {
    const response = await this.openApi2CreativeGetGetWithHttpInfo(advertiserId, filtering, fields, page, pageSize, cursor, count);
    return response.data;
  }

  async openApi2CreativeGetGetWithHttpInfo(advertiserId: number, filtering: CreativeGetV2Filtering, fields: string[], page: number, pageSize: number, cursor: number, count: number): Promise<ApiResponse<CreativeGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2CreativeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<CreativeGetV2Response>({
      method: "GET",
      path: "/open_api/2/creative/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "cursor", value: cursor },
        { name: "count", value: count },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


