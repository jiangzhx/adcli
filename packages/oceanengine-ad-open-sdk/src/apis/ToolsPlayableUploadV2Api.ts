// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPlayableUploadV2Response } from "../models";


export class ToolsPlayableUploadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPlayableUploadPost(advertiserId: number, playablePackage: File): Promise<ToolsPlayableUploadV2Response> {
    const response = await this.openApi2ToolsPlayableUploadPostWithHttpInfo(advertiserId, playablePackage);
    return response.data;
  }

  async openApi2ToolsPlayableUploadPostWithHttpInfo(advertiserId: number, playablePackage: File): Promise<ApiResponse<ToolsPlayableUploadV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsPlayableUploadPost");
    }

    if (playablePackage == null) {
      throw new ApiException("Missing the required parameter 'playablePackage' when calling openApi2ToolsPlayableUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPlayableUploadV2Response>({
      method: "POST",
      path: "/open_api/2/tools/playable/upload/",
      queryParams: [

      ]
    });
  }
}


