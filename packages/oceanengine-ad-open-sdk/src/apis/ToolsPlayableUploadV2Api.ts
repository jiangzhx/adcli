// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPlayableUploadV2Response } from "../models";


export interface OpenApi2ToolsPlayableUploadPostRequest {
  advertiserId: number | string;
  playablePackage: File;
}

export class ToolsPlayableUploadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPlayableUploadPost(request: OpenApi2ToolsPlayableUploadPostRequest): Promise<ToolsPlayableUploadV2Response> {
    const response = await this.openApi2ToolsPlayableUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPlayableUploadPostWithHttpInfo(request: OpenApi2ToolsPlayableUploadPostRequest): Promise<ApiResponse<ToolsPlayableUploadV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsPlayableUploadPost");
    }

    if (request.playablePackage == null) {
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


