// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileImageDeleteV30Request, FileImageDeleteV30Response } from "../models";


export class FileImageDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FileImageDeletePost(request: FileImageDeleteV30Request): Promise<FileImageDeleteV30Response> {
    const response = await this.openApiV30FileImageDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FileImageDeletePostWithHttpInfo(request: FileImageDeleteV30Request): Promise<ApiResponse<FileImageDeleteV30Response>> {
    return this.apiClient.requestWithHttpInfo<FileImageDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/file/image/delete/",
      queryParams: [

      ],
      body: request
    });
  }
}


