// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { CdpBrandGetV30Response } from "../models";


export class CdpBrandGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CdpBrandGetGet(advertiserId: number): Promise<CdpBrandGetV30Response> {
    const response = await this.openApiV30CdpBrandGetGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApiV30CdpBrandGetGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<CdpBrandGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30CdpBrandGetGet");
    }
    return this.apiClient.requestWithHttpInfo<CdpBrandGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cdp/brand/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


