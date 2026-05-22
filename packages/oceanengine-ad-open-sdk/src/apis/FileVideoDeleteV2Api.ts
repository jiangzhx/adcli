// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileVideoDeleteV2Request, FileVideoDeleteV2Response } from "../models";


export interface OpenApi2FileVideoDeletePostRequest {
  fileVideoDeleteV2Request?: FileVideoDeleteV2Request;
}

export class FileVideoDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoDeletePost(request: OpenApi2FileVideoDeletePostRequest): Promise<FileVideoDeleteV2Response> {
    const response = await this.openApi2FileVideoDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoDeletePostWithHttpInfo(request: OpenApi2FileVideoDeletePostRequest): Promise<ApiResponse<FileVideoDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileVideoDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/file/video/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.fileVideoDeleteV2Request
    });
  }
}


