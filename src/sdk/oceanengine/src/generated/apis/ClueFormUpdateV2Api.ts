// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ClueFormUpdateV2Request, ClueFormUpdateV2Response } from "../models";


export class ClueFormUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueFormUpdatePost(clueFormUpdateV2Request: ClueFormUpdateV2Request): Promise<ClueFormUpdateV2Response> {
    const response = await this.openApi2ClueFormUpdatePostWithHttpInfo(clueFormUpdateV2Request);
    return response.data;
  }

  async openApi2ClueFormUpdatePostWithHttpInfo(clueFormUpdateV2Request: ClueFormUpdateV2Request): Promise<ApiResponse<ClueFormUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueFormUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/form/update/",
      queryParams: [

      ],
      body: clueFormUpdateV2Request
    });
  }
}


