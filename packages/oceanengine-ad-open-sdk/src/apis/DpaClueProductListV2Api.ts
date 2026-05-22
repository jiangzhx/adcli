// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaClueProductListV2Filtering, DpaClueProductListV2Response } from "../models";


export class DpaClueProductListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaClueProductListGet(advertiserId: number, page: number, pageSize: number, filtering: DpaClueProductListV2Filtering): Promise<DpaClueProductListV2Response> {
    const response = await this.openApi2DpaClueProductListGetWithHttpInfo(advertiserId, page, pageSize, filtering);
    return response.data;
  }

  async openApi2DpaClueProductListGetWithHttpInfo(advertiserId: number, page: number, pageSize: number, filtering: DpaClueProductListV2Filtering): Promise<ApiResponse<DpaClueProductListV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaClueProductListGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2DpaClueProductListGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2DpaClueProductListGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaClueProductListV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/clue_product/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


