// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FilePlayableCreateV30Request, FilePlayableCreateV30Response } from "../models";


export class FilePlayableCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FilePlayableCreatePost(request: FilePlayableCreateV30Request): Promise<FilePlayableCreateV30Response> {
    const response = await this.openApiV30FilePlayableCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FilePlayableCreatePostWithHttpInfo(request: FilePlayableCreateV30Request): Promise<ApiResponse<FilePlayableCreateV30Response>> {
    return this.apiClient.requestWithHttpInfo<FilePlayableCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/file/playable/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


