// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueFormDeleteV2Request, ClueFormDeleteV2Response } from "../models";


export class ClueFormDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueFormDeletePost(request: ClueFormDeleteV2Request): Promise<ClueFormDeleteV2Response> {
    const response = await this.openApi2ClueFormDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueFormDeletePostWithHttpInfo(request: ClueFormDeleteV2Request): Promise<ApiResponse<ClueFormDeleteV2Response>> {
    return this.apiClient.requestWithHttpInfo<ClueFormDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/clue/form/delete/",
      queryParams: [

      ],
      body: request
    });
  }
}


