// Generated from oceanengine/ad_open_sdk_go api/api_clue_smartphone_delete_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueSmartphoneDeleteV2Request, ClueSmartphoneDeleteV2Response } from "../models/index";


export interface ClueSmartphoneDeleteV2ApiOpenApi2ClueSmartphoneDeletePostRequest {
  clueSmartphoneDeleteV2Request?: ClueSmartphoneDeleteV2Request;
}

export class ClueSmartphoneDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueSmartphoneDeletePost(request: ClueSmartphoneDeleteV2ApiOpenApi2ClueSmartphoneDeletePostRequest): Promise<ClueSmartphoneDeleteV2Response> {
    const response = await this.openApi2ClueSmartphoneDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueSmartphoneDeletePostWithHttpInfo(request: ClueSmartphoneDeleteV2ApiOpenApi2ClueSmartphoneDeletePostRequest): Promise<ApiResponse<ClueSmartphoneDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueSmartphoneDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/clue/smartphone/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.clueSmartphoneDeleteV2Request
    });
  }
}


