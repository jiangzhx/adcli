// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AssetsCreativeComponentGetV2Filtering, AssetsCreativeComponentGetV2Response } from "../models";


export class AssetsCreativeComponentGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AssetsCreativeComponentGetGet(advertiserId: number, page: number, pageSize: number, filtering: AssetsCreativeComponentGetV2Filtering): Promise<AssetsCreativeComponentGetV2Response> {
    const response = await this.openApi2AssetsCreativeComponentGetGetWithHttpInfo(advertiserId, page, pageSize, filtering);
    return response.data;
  }

  async openApi2AssetsCreativeComponentGetGetWithHttpInfo(advertiserId: number, page: number, pageSize: number, filtering: AssetsCreativeComponentGetV2Filtering): Promise<ApiResponse<AssetsCreativeComponentGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AssetsCreativeComponentGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AssetsCreativeComponentGetV2Response>({
      method: "GET",
      path: "/open_api/2/assets/creative_component/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


