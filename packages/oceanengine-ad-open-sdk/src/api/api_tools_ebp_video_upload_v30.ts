// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_video_upload_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpVideoUploadV30AccountType, ToolsEbpVideoUploadV30Response, ToolsEbpVideoUploadV30UploadType } from "../models/index";


export interface ToolsEbpVideoUploadV30ApiOpenApiV30ToolsEbpVideoUploadPostRequest {
  accountId: number | string;
  accountType?: ToolsEbpVideoUploadV30AccountType;
  fileName?: string;
  isAigc?: boolean;
  labels?: string[];
  uploadType?: ToolsEbpVideoUploadV30UploadType;
  videoFile?: Blob;
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

  async openApiV30ToolsEbpVideoUploadPost(request: ToolsEbpVideoUploadV30ApiOpenApiV30ToolsEbpVideoUploadPostRequest): Promise<ToolsEbpVideoUploadV30Response> {
    const response = await this.openApiV30ToolsEbpVideoUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpVideoUploadPostWithHttpInfo(request: ToolsEbpVideoUploadV30ApiOpenApiV30ToolsEbpVideoUploadPostRequest): Promise<ApiResponse<ToolsEbpVideoUploadV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpVideoUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpVideoUploadV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/video/upload/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        account_id: request.accountId,
        account_type: request.accountType,
        file_name: request.fileName,
        is_aigc: request.isAigc,
        labels: request.labels,
        upload_type: request.uploadType,
        video_signature: request.videoSignature,
        video_url: request.videoUrl
      },
      files: {
        video_file: request.videoFile
      }
    });
  }
}


