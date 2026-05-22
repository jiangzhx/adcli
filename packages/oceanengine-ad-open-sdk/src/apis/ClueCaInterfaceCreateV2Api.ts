// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueCaInterfaceCreateV2Request, ClueCaInterfaceCreateV2Response } from "../models";


export interface OpenApi2ClueCaInterfaceCreatePostRequest {
  clueCaInterfaceCreateV2Request?: ClueCaInterfaceCreateV2Request;
}

export class ClueCaInterfaceCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCaInterfaceCreatePost(request: OpenApi2ClueCaInterfaceCreatePostRequest): Promise<ClueCaInterfaceCreateV2Response> {
    const response = await this.openApi2ClueCaInterfaceCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCaInterfaceCreatePostWithHttpInfo(request: OpenApi2ClueCaInterfaceCreatePostRequest): Promise<ApiResponse<ClueCaInterfaceCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCaInterfaceCreateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/ca/interface/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.clueCaInterfaceCreateV2Request
    });
  }
}


