// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarVasAppendOrderToBoostItemGroupV2Request, StarVasAppendOrderToBoostItemGroupV2Response } from "../models";


export class StarVasAppendOrderToBoostItemGroupV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarVasAppendOrderToBoostItemGroupPost(starVasAppendOrderToBoostItemGroupV2Request: StarVasAppendOrderToBoostItemGroupV2Request): Promise<StarVasAppendOrderToBoostItemGroupV2Response> {
    const response = await this.openApi2StarVasAppendOrderToBoostItemGroupPostWithHttpInfo(starVasAppendOrderToBoostItemGroupV2Request);
    return response.data;
  }

  async openApi2StarVasAppendOrderToBoostItemGroupPostWithHttpInfo(starVasAppendOrderToBoostItemGroupV2Request: StarVasAppendOrderToBoostItemGroupV2Request): Promise<ApiResponse<StarVasAppendOrderToBoostItemGroupV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarVasAppendOrderToBoostItemGroupV2Response>({
      method: "POST",
      path: "/open_api/2/star/vas/append_order_to_boost_item_group/",
      queryParams: [

      ],
      body: starVasAppendOrderToBoostItemGroupV2Request
    });
  }
}


