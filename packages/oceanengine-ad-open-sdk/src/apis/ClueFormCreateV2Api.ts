// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueFormCreateV2Request, ClueFormCreateV2Response } from "../models";


export class ClueFormCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueFormCreatePost(request: ClueFormCreateV2Request): Promise<ClueFormCreateV2Response> {
    const response = await this.openApi2ClueFormCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueFormCreatePostWithHttpInfo(request: ClueFormCreateV2Request): Promise<ApiResponse<ClueFormCreateV2Response>> {
    return this.apiClient.requestWithHttpInfo<ClueFormCreateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/form/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


