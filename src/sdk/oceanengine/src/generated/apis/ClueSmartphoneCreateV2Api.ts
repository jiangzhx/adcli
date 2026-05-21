// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ClueSmartphoneCreateV2Request, ClueSmartphoneCreateV2Response } from "../models";


export class ClueSmartphoneCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueSmartphoneCreatePost(clueSmartphoneCreateV2Request: ClueSmartphoneCreateV2Request): Promise<ClueSmartphoneCreateV2Response> {
    const response = await this.openApi2ClueSmartphoneCreatePostWithHttpInfo(clueSmartphoneCreateV2Request);
    return response.data;
  }

  async openApi2ClueSmartphoneCreatePostWithHttpInfo(clueSmartphoneCreateV2Request: ClueSmartphoneCreateV2Request): Promise<ApiResponse<ClueSmartphoneCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueSmartphoneCreateV2Response>({
      method: "POST",
      path: "/open_api/2/clue/smartphone/create/",
      queryParams: [

      ],
      body: clueSmartphoneCreateV2Request
    });
  }
}


