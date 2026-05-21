// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { KeywordCreateV2V2Request, KeywordCreateV2V2Response } from "../models";


export class KeywordCreateV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2KeywordCreateV2Post(keywordCreateV2V2Request: KeywordCreateV2V2Request): Promise<KeywordCreateV2V2Response> {
    const response = await this.openApi2KeywordCreateV2PostWithHttpInfo(keywordCreateV2V2Request);
    return response.data;
  }

  async openApi2KeywordCreateV2PostWithHttpInfo(keywordCreateV2V2Request: KeywordCreateV2V2Request): Promise<ApiResponse<KeywordCreateV2V2Response>> {

    return this.apiClient.requestWithHttpInfo<KeywordCreateV2V2Response>({
      method: "POST",
      path: "/open_api/2/keyword/create_v2/",
      queryParams: [

      ],
      body: keywordCreateV2V2Request
    });
  }
}


