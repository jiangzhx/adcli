// Generated from oceanengine/ad_open_sdk_go api/api_dpa_product_availables_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaProductAvailablesV2Response } from "../models/index";


export interface DpaProductAvailablesV2ApiOpenApi2DpaProductAvailablesGetRequest {
  advertiserId: number | string;
}

export class DpaProductAvailablesV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaProductAvailablesGet(request: DpaProductAvailablesV2ApiOpenApi2DpaProductAvailablesGetRequest): Promise<DpaProductAvailablesV2Response> {
    const response = await this.openApi2DpaProductAvailablesGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaProductAvailablesGetWithHttpInfo(request: DpaProductAvailablesV2ApiOpenApi2DpaProductAvailablesGetRequest): Promise<ApiResponse<DpaProductAvailablesV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaProductAvailablesGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaProductAvailablesV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/product/availables/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


