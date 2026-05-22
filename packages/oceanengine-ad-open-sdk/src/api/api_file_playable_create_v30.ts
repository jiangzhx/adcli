// Generated from oceanengine/ad_open_sdk_go api/api_file_playable_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FilePlayableCreateV30Request, FilePlayableCreateV30Response } from "../models/index";


export interface FilePlayableCreateV30ApiOpenApiV30FilePlayableCreatePostRequest {
  filePlayableCreateV30Request?: FilePlayableCreateV30Request;
}

export class FilePlayableCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FilePlayableCreatePost(request: FilePlayableCreateV30ApiOpenApiV30FilePlayableCreatePostRequest): Promise<FilePlayableCreateV30Response> {
    const response = await this.openApiV30FilePlayableCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FilePlayableCreatePostWithHttpInfo(request: FilePlayableCreateV30ApiOpenApiV30FilePlayableCreatePostRequest): Promise<ApiResponse<FilePlayableCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<FilePlayableCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/file/playable/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.filePlayableCreateV30Request
    });
  }
}


