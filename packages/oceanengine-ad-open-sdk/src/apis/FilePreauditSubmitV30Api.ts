// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FilePreauditSubmitV30Request, FilePreauditSubmitV30Response } from "../models";


export class FilePreauditSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FilePreauditSubmitPost(filePreauditSubmitV30Request: FilePreauditSubmitV30Request): Promise<FilePreauditSubmitV30Response> {
    const response = await this.openApiV30FilePreauditSubmitPostWithHttpInfo(filePreauditSubmitV30Request);
    return response.data;
  }

  async openApiV30FilePreauditSubmitPostWithHttpInfo(filePreauditSubmitV30Request: FilePreauditSubmitV30Request): Promise<ApiResponse<FilePreauditSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<FilePreauditSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/file/preaudit/submit/",
      queryParams: [

      ],
      body: filePreauditSubmitV30Request
    });
  }
}


