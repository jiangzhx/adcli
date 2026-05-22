// Generated from oceanengine/ad_open_sdk_go api/api_tools_playable_upload_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPlayableUploadV2Response } from "../models/index";


export interface ToolsPlayableUploadV2ApiOpenApi2ToolsPlayableUploadPostRequest {
  advertiserId: number | string;
  playablePackage: Blob;
}

export class ToolsPlayableUploadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPlayableUploadPost(request: ToolsPlayableUploadV2ApiOpenApi2ToolsPlayableUploadPostRequest): Promise<ToolsPlayableUploadV2Response> {
    const response = await this.openApi2ToolsPlayableUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPlayableUploadPostWithHttpInfo(request: ToolsPlayableUploadV2ApiOpenApi2ToolsPlayableUploadPostRequest): Promise<ApiResponse<ToolsPlayableUploadV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.playablePackage == null) {
      throw new ApiException("playablePackage is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPlayableUploadV2Response>({
      method: "POST",
      path: "/open_api/2/tools/playable/upload/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        advertiser_id: request.advertiserId
      },
      files: {
        playable_package: request.playablePackage
      }
    });
  }
}


