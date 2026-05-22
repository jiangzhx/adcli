// Generated from oceanengine/ad_open_sdk_go api/api_star_vas_cancel_boost_item_group_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarVasCancelBoostItemGroupV2Request, StarVasCancelBoostItemGroupV2Response } from "../models/index";


export interface StarVasCancelBoostItemGroupV2ApiOpenApi2StarVasCancelBoostItemGroupPostRequest {
  starVasCancelBoostItemGroupV2Request?: StarVasCancelBoostItemGroupV2Request;
}

export class StarVasCancelBoostItemGroupV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarVasCancelBoostItemGroupPost(request: StarVasCancelBoostItemGroupV2ApiOpenApi2StarVasCancelBoostItemGroupPostRequest): Promise<StarVasCancelBoostItemGroupV2Response> {
    const response = await this.openApi2StarVasCancelBoostItemGroupPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarVasCancelBoostItemGroupPostWithHttpInfo(request: StarVasCancelBoostItemGroupV2ApiOpenApi2StarVasCancelBoostItemGroupPostRequest): Promise<ApiResponse<StarVasCancelBoostItemGroupV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarVasCancelBoostItemGroupV2Response>({
      method: "POST",
      path: "/open_api/2/star/vas/cancel_boost_item_group/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starVasCancelBoostItemGroupV2Request
    });
  }
}


