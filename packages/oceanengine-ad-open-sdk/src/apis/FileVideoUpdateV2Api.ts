// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileVideoUpdateV2Request, FileVideoUpdateV2Response } from "../models";


export class FileVideoUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoUpdatePost(request: FileVideoUpdateV2Request): Promise<FileVideoUpdateV2Response> {
    const response = await this.openApi2FileVideoUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoUpdatePostWithHttpInfo(request: FileVideoUpdateV2Request): Promise<ApiResponse<FileVideoUpdateV2Response>> {
    return this.apiClient.requestWithHttpInfo<FileVideoUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/file/video/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


