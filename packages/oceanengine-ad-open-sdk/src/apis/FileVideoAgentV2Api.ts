// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileVideoAgentV2Response, FileVideoAgentV2UploadType } from "../models";


export interface OpenApi2FileVideoAgentPostRequest {
  agentId: number | string;
  fileName: string;
  isNeedAuth: boolean;
  isAigc?: boolean;
  uploadType?: FileVideoAgentV2UploadType;
  videoFile?: File;
  videoSignature?: string;
  videoUrl?: string;
}

export class FileVideoAgentV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoAgentPost(request: OpenApi2FileVideoAgentPostRequest): Promise<FileVideoAgentV2Response> {
    const response = await this.openApi2FileVideoAgentPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoAgentPostWithHttpInfo(request: OpenApi2FileVideoAgentPostRequest): Promise<ApiResponse<FileVideoAgentV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2FileVideoAgentPost");
    }

    if (request.fileName == null) {
      throw new ApiException("Missing the required parameter 'fileName' when calling openApi2FileVideoAgentPost");
    }

    if (request.isNeedAuth == null) {
      throw new ApiException("Missing the required parameter 'isNeedAuth' when calling openApi2FileVideoAgentPost");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoAgentV2Response>({
      method: "POST",
      path: "/open_api/2/file/video/agent/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        agent_id: request.agentId,
        file_name: request.fileName,
        is_aigc: request.isAigc,
        is_need_auth: request.isNeedAuth,
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


