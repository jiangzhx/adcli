// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ClueCaInterfaceUpdateV2Request, ClueCaInterfaceUpdateV2Response } from "../models";


export class ClueCaInterfaceUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueCaInterfaceUpdatePost(clueCaInterfaceUpdateV2Request: ClueCaInterfaceUpdateV2Request): Promise<ClueCaInterfaceUpdateV2Response> {
    const response = await this.openApi2ClueCaInterfaceUpdatePostWithHttpInfo(clueCaInterfaceUpdateV2Request);
    return response.data;
  }

  async openApi2ClueCaInterfaceUpdatePostWithHttpInfo(clueCaInterfaceUpdateV2Request: ClueCaInterfaceUpdateV2Request): Promise<ApiResponse<ClueCaInterfaceUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueCaInterfaceUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/ca/interface/update/",
      queryParams: [

      ],
      body: clueCaInterfaceUpdateV2Request
    });
  }
}


