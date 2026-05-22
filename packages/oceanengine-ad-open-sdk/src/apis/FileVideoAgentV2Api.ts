// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileVideoAgentV2Response, FileVideoAgentV2UploadType } from "../models";


export class FileVideoAgentV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoAgentPost(agentId: number, fileName: string, isNeedAuth: boolean, isAigc: boolean, uploadType: FileVideoAgentV2UploadType, videoFile: File, videoSignature: string, videoUrl: string): Promise<FileVideoAgentV2Response> {
    const response = await this.openApi2FileVideoAgentPostWithHttpInfo(agentId, fileName, isNeedAuth, isAigc, uploadType, videoFile, videoSignature, videoUrl);
    return response.data;
  }

  async openApi2FileVideoAgentPostWithHttpInfo(agentId: number, fileName: string, isNeedAuth: boolean, isAigc: boolean, uploadType: FileVideoAgentV2UploadType, videoFile: File, videoSignature: string, videoUrl: string): Promise<ApiResponse<FileVideoAgentV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2FileVideoAgentPost");
    }

    if (fileName == null) {
      throw new ApiException("Missing the required parameter 'fileName' when calling openApi2FileVideoAgentPost");
    }

    if (isNeedAuth == null) {
      throw new ApiException("Missing the required parameter 'isNeedAuth' when calling openApi2FileVideoAgentPost");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoAgentV2Response>({
      method: "POST",
      path: "/open_api/2/file/video/agent/",
      queryParams: [

      ]
    });
  }
}


