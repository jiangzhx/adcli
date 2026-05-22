// Generated from oceanengine/ad_open_sdk_go api/api_dpa_clue_product_detail_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaClueProductDetailV2Response } from "../models/index";


export interface DpaClueProductDetailV2ApiOpenApi2DpaClueProductDetailGetRequest {
  advertiserId: number | string;
  productIds: (number | string)[];
}

export class DpaClueProductDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaClueProductDetailGet(request: DpaClueProductDetailV2ApiOpenApi2DpaClueProductDetailGetRequest): Promise<DpaClueProductDetailV2Response> {
    const response = await this.openApi2DpaClueProductDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaClueProductDetailGetWithHttpInfo(request: DpaClueProductDetailV2ApiOpenApi2DpaClueProductDetailGetRequest): Promise<ApiResponse<DpaClueProductDetailV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.productIds == null) {
      throw new ApiException("productIds is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<DpaClueProductDetailV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/clue_product/detail/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "product_ids", value: request.productIds }
      ]
    });
  }
}


