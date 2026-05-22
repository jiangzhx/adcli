// Generated from oceanengine/ad_open_sdk_go api/api_upload_statement_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { UploadStatementV2Response } from "../models/index";


export interface UploadStatementV2ApiOpenApi2UploadStatementPostRequest {
  agentId: number | string;
  file: Blob;
}

export class UploadStatementV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2UploadStatementPost(request: UploadStatementV2ApiOpenApi2UploadStatementPostRequest): Promise<UploadStatementV2Response> {
    const response = await this.openApi2UploadStatementPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2UploadStatementPostWithHttpInfo(request: UploadStatementV2ApiOpenApi2UploadStatementPostRequest): Promise<ApiResponse<UploadStatementV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("agentId is required and must be specified");
    }

    if (request.file == null) {
      throw new ApiException("file is required and must be specified");
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


