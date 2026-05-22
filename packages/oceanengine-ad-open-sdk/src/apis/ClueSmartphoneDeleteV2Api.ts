// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueSmartphoneDeleteV2Request, ClueSmartphoneDeleteV2Response } from "../models";


export class ClueSmartphoneDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueSmartphoneDeletePost(request: ClueSmartphoneDeleteV2Request): Promise<ClueSmartphoneDeleteV2Response> {
    const response = await this.openApi2ClueSmartphoneDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueSmartphoneDeletePostWithHttpInfo(request: ClueSmartphoneDeleteV2Request): Promise<ApiResponse<ClueSmartphoneDeleteV2Response>> {
    return this.apiClient.requestWithHttpInfo<ClueSmartphoneDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/clue/smartphone/delete/",
      queryParams: [

      ],
      body: request
    });
  }
}


