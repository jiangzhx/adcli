// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaProductAvailablesV2Response } from "../models";


export class DpaProductAvailablesV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaProductAvailablesGet(advertiserId: number): Promise<DpaProductAvailablesV2Response> {
    const response = await this.openApi2DpaProductAvailablesGetWithHttpInfo(advertiserId);
    return response.data;
  }

  async openApi2DpaProductAvailablesGetWithHttpInfo(advertiserId: number): Promise<ApiResponse<DpaProductAvailablesV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaProductAvailablesGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaProductAvailablesV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/product/availables/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId }
      ]
    });
  }
}


