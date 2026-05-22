// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarVasCancelBoostItemGroupV2Request, StarVasCancelBoostItemGroupV2Response } from "../models";


export interface OpenApi2StarVasCancelBoostItemGroupPostRequest {
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

  async openApi2StarVasCancelBoostItemGroupPost(request: OpenApi2StarVasCancelBoostItemGroupPostRequest): Promise<StarVasCancelBoostItemGroupV2Response> {
    const response = await this.openApi2StarVasCancelBoostItemGroupPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarVasCancelBoostItemGroupPostWithHttpInfo(request: OpenApi2StarVasCancelBoostItemGroupPostRequest): Promise<ApiResponse<StarVasCancelBoostItemGroupV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarVasCancelBoostItemGroupV2Response>({
      method: "POST",
      path: "/open_api/2/star/vas/cancel_boost_item_group/",
      queryParams: [

      ],
      body: request.starVasCancelBoostItemGroupV2Request
    });
  }
}


