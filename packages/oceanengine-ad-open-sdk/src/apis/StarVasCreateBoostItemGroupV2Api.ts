// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarVasCreateBoostItemGroupV2Request, StarVasCreateBoostItemGroupV2Response } from "../models";


export interface OpenApi2StarVasCreateBoostItemGroupPostRequest {
  starVasCreateBoostItemGroupV2Request?: StarVasCreateBoostItemGroupV2Request;
}

export class StarVasCreateBoostItemGroupV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarVasCreateBoostItemGroupPost(request: OpenApi2StarVasCreateBoostItemGroupPostRequest): Promise<StarVasCreateBoostItemGroupV2Response> {
    const response = await this.openApi2StarVasCreateBoostItemGroupPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarVasCreateBoostItemGroupPostWithHttpInfo(request: OpenApi2StarVasCreateBoostItemGroupPostRequest): Promise<ApiResponse<StarVasCreateBoostItemGroupV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarVasCreateBoostItemGroupV2Response>({
      method: "POST",
      path: "/open_api/2/star/vas/create_boost_item_group/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starVasCreateBoostItemGroupV2Request
    });
  }
}


