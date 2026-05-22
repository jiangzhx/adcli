// Generated from oceanengine/ad_open_sdk_go api/api_clue_form_delete_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueFormDeleteV2Request, ClueFormDeleteV2Response } from "../models/index";


export interface ClueFormDeleteV2ApiOpenApi2ClueFormDeletePostRequest {
  clueFormDeleteV2Request?: ClueFormDeleteV2Request;
}

export class ClueFormDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueFormDeletePost(request: ClueFormDeleteV2ApiOpenApi2ClueFormDeletePostRequest): Promise<ClueFormDeleteV2Response> {
    const response = await this.openApi2ClueFormDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueFormDeletePostWithHttpInfo(request: ClueFormDeleteV2ApiOpenApi2ClueFormDeletePostRequest): Promise<ApiResponse<ClueFormDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueFormDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/clue/form/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.clueFormDeleteV2Request
    });
  }
}


