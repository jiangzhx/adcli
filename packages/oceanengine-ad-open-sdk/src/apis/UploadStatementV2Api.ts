// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UploadStatementV2Response } from "../models";


export interface OpenApi2UploadStatementPostRequest {
  agentId: number | string;
  file: File;
}

export class UploadStatementV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2UploadStatementPost(request: OpenApi2UploadStatementPostRequest): Promise<UploadStatementV2Response> {
    const response = await this.openApi2UploadStatementPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2UploadStatementPostWithHttpInfo(request: OpenApi2UploadStatementPostRequest): Promise<ApiResponse<UploadStatementV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2UploadStatementPost");
    }

    if (request.file == null) {
      throw new ApiException("Missing the required parameter 'file' when calling openApi2UploadStatementPost");
    }
    return this.apiClient.requestWithHttpInfo<UploadStatementV2Response>({
      method: "POST",
      path: "/open_api/2/upload/statement/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        agent_id: request.agentId
      },
      files: {
        file: request.file
      }
    });
  }
}


