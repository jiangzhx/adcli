// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaClueProductDetailV2Response } from "../models";


export interface OpenApi2DpaClueProductDetailGetRequest {
  advertiserId: number;
  productIds: number[];
}

export class DpaClueProductDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaClueProductDetailGet(request: OpenApi2DpaClueProductDetailGetRequest): Promise<DpaClueProductDetailV2Response> {
    const response = await this.openApi2DpaClueProductDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaClueProductDetailGetWithHttpInfo(request: OpenApi2DpaClueProductDetailGetRequest): Promise<ApiResponse<DpaClueProductDetailV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaClueProductDetailGet");
    }

    if (request.productIds == null) {
      throw new ApiException("Missing the required parameter 'productIds' when calling openApi2DpaClueProductDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaClueProductDetailV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/clue_product/detail/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "product_ids", value: request.productIds, collectionFormat: "csv" }
      ]
    });
  }
}


