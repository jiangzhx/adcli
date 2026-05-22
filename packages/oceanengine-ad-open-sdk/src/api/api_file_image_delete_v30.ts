// Generated from oceanengine/ad_open_sdk_go api/api_file_image_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileImageDeleteV30Request, FileImageDeleteV30Response } from "../models/index";


export interface FileImageDeleteV30ApiOpenApiV30FileImageDeletePostRequest {
  fileImageDeleteV30Request?: FileImageDeleteV30Request;
}

export class FileImageDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FileImageDeletePost(request: FileImageDeleteV30ApiOpenApiV30FileImageDeletePostRequest): Promise<FileImageDeleteV30Response> {
    const response = await this.openApiV30FileImageDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FileImageDeletePostWithHttpInfo(request: FileImageDeleteV30ApiOpenApiV30FileImageDeletePostRequest): Promise<ApiResponse<FileImageDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<FileImageDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/file/image/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.fileImageDeleteV30Request
    });
  }
}


