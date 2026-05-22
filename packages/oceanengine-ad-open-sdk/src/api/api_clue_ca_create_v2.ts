// Generated from oceanengine/ad_open_sdk_go api/api_clue_ca_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueCaCreateV2Request, ClueCaCreateV2Response } from "../models/index";


export interface ClueCaCreateV2ApiOpenApi2ClueCaCreatePostRequest {
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

  async openApi2ClueCaCreatePost(request: ClueCaCreateV2ApiOpenApi2ClueCaCreatePostRequest): Promise<ClueCaCreateV2Response> {
    const response = await this.openApi2ClueCaCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCaCreatePostWithHttpInfo(request: ClueCaCreateV2ApiOpenApi2ClueCaCreatePostRequest): Promise<ApiResponse<ClueCaCreateV2Response>> {

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


