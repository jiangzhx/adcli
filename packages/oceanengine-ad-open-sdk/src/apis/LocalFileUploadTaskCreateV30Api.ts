// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalFileUploadTaskCreateV30Request, LocalFileUploadTaskCreateV30Response } from "../models";


export class LocalFileUploadTaskCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalFileUploadTaskCreatePost(localFileUploadTaskCreateV30Request: LocalFileUploadTaskCreateV30Request): Promise<LocalFileUploadTaskCreateV30Response> {
    const response = await this.openApiV30LocalFileUploadTaskCreatePostWithHttpInfo(localFileUploadTaskCreateV30Request);
    return response.data;
  }

  async openApiV30LocalFileUploadTaskCreatePostWithHttpInfo(localFileUploadTaskCreateV30Request: LocalFileUploadTaskCreateV30Request): Promise<ApiResponse<LocalFileUploadTaskCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalFileUploadTaskCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/file/upload_task/create/",
      queryParams: [

      ],
      body: localFileUploadTaskCreateV30Request
    });
  }
}


