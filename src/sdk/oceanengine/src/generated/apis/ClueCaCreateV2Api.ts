// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ClueCaCreateV2Request, ClueCaCreateV2Response } from "../models";


export class ClueCaCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCaCreatePost(clueCaCreateV2Request: ClueCaCreateV2Request): Promise<ClueCaCreateV2Response> {
    const response = await this.openApi2ClueCaCreatePostWithHttpInfo(clueCaCreateV2Request);
    return response.data;
  }

  async openApi2ClueCaCreatePostWithHttpInfo(clueCaCreateV2Request: ClueCaCreateV2Request): Promise<ApiResponse<ClueCaCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCaCreateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/ca/create/",
      queryParams: [

      ],
      body: clueCaCreateV2Request
    });
  }
}


