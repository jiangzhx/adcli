// Generated from oceanengine/ad_open_sdk_go api/api_clue_ca_interface_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueCaInterfaceUpdateV2Request, ClueCaInterfaceUpdateV2Response } from "../models/index";


export interface ClueCaInterfaceUpdateV2ApiOpenApi2ClueCaInterfaceUpdatePostRequest {
  clueCaInterfaceUpdateV2Request?: ClueCaInterfaceUpdateV2Request;
}

export class ClueCaInterfaceUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCaInterfaceUpdatePost(request: ClueCaInterfaceUpdateV2ApiOpenApi2ClueCaInterfaceUpdatePostRequest): Promise<ClueCaInterfaceUpdateV2Response> {
    const response = await this.openApi2ClueCaInterfaceUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueCaInterfaceUpdatePostWithHttpInfo(request: ClueCaInterfaceUpdateV2ApiOpenApi2ClueCaInterfaceUpdatePostRequest): Promise<ApiResponse<ClueCaInterfaceUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCaInterfaceUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/ca/interface/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.clueCaInterfaceUpdateV2Request
    });
  }
}


