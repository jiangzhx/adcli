// Generated from oceanengine/ad_open_sdk_go api/api_file_preaudit_submit_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FilePreauditSubmitV30Request, FilePreauditSubmitV30Response } from "../models/index";


export interface FilePreauditSubmitV30ApiOpenApiV30FilePreauditSubmitPostRequest {
  filePreauditSubmitV30Request?: FilePreauditSubmitV30Request;
}

export class FilePreauditSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FilePreauditSubmitPost(request: FilePreauditSubmitV30ApiOpenApiV30FilePreauditSubmitPostRequest): Promise<FilePreauditSubmitV30Response> {
    const response = await this.openApiV30FilePreauditSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FilePreauditSubmitPostWithHttpInfo(request: FilePreauditSubmitV30ApiOpenApiV30FilePreauditSubmitPostRequest): Promise<ApiResponse<FilePreauditSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<FilePreauditSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/file/preaudit/submit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.filePreauditSubmitV30Request
    });
  }
}


