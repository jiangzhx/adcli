// Generated from oceanengine/ad_open_sdk_go api/api_clue_ca_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueCaUpdateV2Request, ClueCaUpdateV2Response } from "../models/index";


export interface ClueCaUpdateV2ApiOpenApi2ClueCaUpdatePostRequest {
  clueCaUpdateV2Request?: ClueCaUpdateV2Request;
}

export class ClueCaUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCaUpdatePost(request: ClueCaUpdateV2ApiOpenApi2ClueCaUpdatePostRequest): Promise<ClueCaUpdateV2Response> {
    const response = await this.openApi2ClueCaUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCaUpdatePostWithHttpInfo(request: ClueCaUpdateV2ApiOpenApi2ClueCaUpdatePostRequest): Promise<ApiResponse<ClueCaUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCaUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/ca/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.clueCaUpdateV2Request
    });
  }
}


