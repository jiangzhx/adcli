// Generated from oceanengine/ad_open_sdk_go api/api_dpa_clue_product_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaClueProductListV2Filtering, DpaClueProductListV2Response } from "../models/index";


export interface DpaClueProductListV2ApiOpenApi2DpaClueProductListGetRequest {
  advertiserId: number | string;
  page: number;
  pageSize: number;
  filtering?: DpaClueProductListV2Filtering;
}

export class DpaClueProductListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaClueProductListGet(request: DpaClueProductListV2ApiOpenApi2DpaClueProductListGetRequest): Promise<DpaClueProductListV2Response> {
    const response = await this.openApi2DpaClueProductListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaClueProductListGetWithHttpInfo(request: DpaClueProductListV2ApiOpenApi2DpaClueProductListGetRequest): Promise<ApiResponse<DpaClueProductListV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaClueProductListGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2DpaClueProductListGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2DpaClueProductListGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaClueProductListV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/clue_product/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


