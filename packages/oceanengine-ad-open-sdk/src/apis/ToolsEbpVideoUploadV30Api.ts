// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpVideoUploadV30AccountType, ToolsEbpVideoUploadV30Response, ToolsEbpVideoUploadV30UploadType } from "../models";


export interface OpenApiV30ToolsEbpVideoUploadPostRequest {
  accountId: number;
  accountType?: ToolsEbpVideoUploadV30AccountType;
  fileName?: string;
  isAigc?: boolean;
  labels?: string[];
  uploadType?: ToolsEbpVideoUploadV30UploadType;
  videoFile?: File;
  videoSignature?: string;
  videoUrl?: string;
}

export class ToolsEbpVideoUploadV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpVideoUploadPost(request: OpenApiV30ToolsEbpVideoUploadPostRequest): Promise<ToolsEbpVideoUploadV30Response> {
    const response = await this.openApiV30ToolsEbpVideoUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpVideoUploadPostWithHttpInfo(request: OpenApiV30ToolsEbpVideoUploadPostRequest): Promise<ApiResponse<ToolsEbpVideoUploadV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpVideoUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpVideoUploadV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/video/upload/",
      queryParams: [

      ]
    });
  }
}


