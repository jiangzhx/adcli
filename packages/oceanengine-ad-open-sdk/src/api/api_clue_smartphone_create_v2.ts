// Generated from oceanengine/ad_open_sdk_go api/api_clue_smartphone_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueSmartphoneCreateV2Request, ClueSmartphoneCreateV2Response } from "../models/index";


export interface ClueSmartphoneCreateV2ApiOpenApi2ClueSmartphoneCreatePostRequest {
  clueSmartphoneCreateV2Request?: ClueSmartphoneCreateV2Request;
}

export class ClueSmartphoneCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueSmartphoneCreatePost(request: ClueSmartphoneCreateV2ApiOpenApi2ClueSmartphoneCreatePostRequest): Promise<ClueSmartphoneCreateV2Response> {
    const response = await this.openApi2ClueSmartphoneCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueSmartphoneCreatePostWithHttpInfo(request: ClueSmartphoneCreateV2ApiOpenApi2ClueSmartphoneCreatePostRequest): Promise<ApiResponse<ClueSmartphoneCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueSmartphoneCreateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/smartphone/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.clueSmartphoneCreateV2Request
    });
  }
}


