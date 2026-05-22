// Generated from oceanengine/ad_open_sdk_go api/api_clue_form_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueFormUpdateV2Request, ClueFormUpdateV2Response } from "../models/index";


export interface ClueFormUpdateV2ApiOpenApi2ClueFormUpdatePostRequest {
  clueFormUpdateV2Request?: ClueFormUpdateV2Request;
}

export class ClueFormUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueFormUpdatePost(request: ClueFormUpdateV2ApiOpenApi2ClueFormUpdatePostRequest): Promise<ClueFormUpdateV2Response> {
    const response = await this.openApi2ClueFormUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueFormUpdatePostWithHttpInfo(request: ClueFormUpdateV2ApiOpenApi2ClueFormUpdatePostRequest): Promise<ApiResponse<ClueFormUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueFormUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/form/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.clueFormUpdateV2Request
    });
  }
}


