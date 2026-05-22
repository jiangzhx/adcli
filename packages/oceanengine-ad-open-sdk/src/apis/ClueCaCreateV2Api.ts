// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueCaCreateV2Request, ClueCaCreateV2Response } from "../models";


export interface OpenApi2ClueCaCreatePostRequest {
  clueCaCreateV2Request?: ClueCaCreateV2Request;
}

export class ClueCaCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCaCreatePost(request: OpenApi2ClueCaCreatePostRequest): Promise<ClueCaCreateV2Response> {
    const response = await this.openApi2ClueCaCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCaCreatePostWithHttpInfo(request: OpenApi2ClueCaCreatePostRequest): Promise<ApiResponse<ClueCaCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCaCreateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/ca/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.clueCaCreateV2Request
    });
  }
}


