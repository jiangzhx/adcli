// Generated from oceanengine/ad_open_sdk_go api/api_star_vas_append_order_to_boost_item_group_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarVasAppendOrderToBoostItemGroupV2Request, StarVasAppendOrderToBoostItemGroupV2Response } from "../models/index";


export interface StarVasAppendOrderToBoostItemGroupV2ApiOpenApi2StarVasAppendOrderToBoostItemGroupPostRequest {
  starVasAppendOrderToBoostItemGroupV2Request?: StarVasAppendOrderToBoostItemGroupV2Request;
}

export class StarVasAppendOrderToBoostItemGroupV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarVasAppendOrderToBoostItemGroupPost(request: StarVasAppendOrderToBoostItemGroupV2ApiOpenApi2StarVasAppendOrderToBoostItemGroupPostRequest): Promise<StarVasAppendOrderToBoostItemGroupV2Response> {
    const response = await this.openApi2StarVasAppendOrderToBoostItemGroupPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarVasAppendOrderToBoostItemGroupPostWithHttpInfo(request: StarVasAppendOrderToBoostItemGroupV2ApiOpenApi2StarVasAppendOrderToBoostItemGroupPostRequest): Promise<ApiResponse<StarVasAppendOrderToBoostItemGroupV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarVasAppendOrderToBoostItemGroupV2Response>({
      method: "POST",
      path: "/open_api/2/star/vas/append_order_to_boost_item_group/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starVasAppendOrderToBoostItemGroupV2Request
    });
  }
}


