// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueCaUpdateV2Request, ClueCaUpdateV2Response } from "../models";


export class ClueCaUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCaUpdatePost(clueCaUpdateV2Request: ClueCaUpdateV2Request): Promise<ClueCaUpdateV2Response> {
    const response = await this.openApi2ClueCaUpdatePostWithHttpInfo(clueCaUpdateV2Request);
    return response.data;
  }

  async openApi2ClueCaUpdatePostWithHttpInfo(clueCaUpdateV2Request: ClueCaUpdateV2Request): Promise<ApiResponse<ClueCaUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCaUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/ca/update/",
      queryParams: [

      ],
      body: clueCaUpdateV2Request
    });
  }
}


