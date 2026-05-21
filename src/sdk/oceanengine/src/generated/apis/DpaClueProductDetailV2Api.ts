// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DpaClueProductDetailV2Response } from "../models";


export class DpaClueProductDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaClueProductDetailGet(advertiserId: number, productIds: number[]): Promise<DpaClueProductDetailV2Response> {
    const response = await this.openApi2DpaClueProductDetailGetWithHttpInfo(advertiserId, productIds);
    return response.data;
  }

  async openApi2DpaClueProductDetailGetWithHttpInfo(advertiserId: number, productIds: number[]): Promise<ApiResponse<DpaClueProductDetailV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaClueProductDetailGet");
    }

    if (productIds == null) {
      throw new ApiException("Missing the required parameter 'productIds' when calling openApi2DpaClueProductDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaClueProductDetailV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/clue_product/detail/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "product_ids", value: productIds, collectionFormat: "csv" }
      ]
    });
  }
}


