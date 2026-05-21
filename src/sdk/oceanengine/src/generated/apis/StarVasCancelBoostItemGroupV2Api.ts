// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarVasCancelBoostItemGroupV2Request, StarVasCancelBoostItemGroupV2Response } from "../models";


export class StarVasCancelBoostItemGroupV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarVasCancelBoostItemGroupPost(starVasCancelBoostItemGroupV2Request: StarVasCancelBoostItemGroupV2Request): Promise<StarVasCancelBoostItemGroupV2Response> {
    const response = await this.openApi2StarVasCancelBoostItemGroupPostWithHttpInfo(starVasCancelBoostItemGroupV2Request);
    return response.data;
  }

  async openApi2StarVasCancelBoostItemGroupPostWithHttpInfo(starVasCancelBoostItemGroupV2Request: StarVasCancelBoostItemGroupV2Request): Promise<ApiResponse<StarVasCancelBoostItemGroupV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarVasCancelBoostItemGroupV2Response>({
      method: "POST",
      path: "/open_api/2/star/vas/cancel_boost_item_group/",
      queryParams: [

      ],
      body: starVasCancelBoostItemGroupV2Request
    });
  }
}


