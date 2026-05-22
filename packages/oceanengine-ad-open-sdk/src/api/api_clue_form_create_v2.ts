// Generated from oceanengine/ad_open_sdk_go api/api_clue_form_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueFormCreateV2Request, ClueFormCreateV2Response } from "../models/index";


export interface ClueFormCreateV2ApiOpenApi2ClueFormCreatePostRequest {
  clueFormCreateV2Request?: ClueFormCreateV2Request;
}

export class ClueFormCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueFormCreatePost(request: ClueFormCreateV2ApiOpenApi2ClueFormCreatePostRequest): Promise<ClueFormCreateV2Response> {
    const response = await this.openApi2ClueFormCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueFormCreatePostWithHttpInfo(request: ClueFormCreateV2ApiOpenApi2ClueFormCreatePostRequest): Promise<ApiResponse<ClueFormCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueFormCreateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/form/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.clueFormCreateV2Request
    });
  }
}


