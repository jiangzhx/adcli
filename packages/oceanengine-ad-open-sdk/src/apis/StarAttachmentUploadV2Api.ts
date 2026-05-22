// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarAttachmentUploadV2Response } from "../models";


export interface OpenApi2StarAttachmentUploadPostRequest {
  file: File;
  fileName: string;
  starId: number;
}

export class StarAttachmentUploadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarAttachmentUploadPost(request: OpenApi2StarAttachmentUploadPostRequest): Promise<StarAttachmentUploadV2Response> {
    const response = await this.openApi2StarAttachmentUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarAttachmentUploadPostWithHttpInfo(request: OpenApi2StarAttachmentUploadPostRequest): Promise<ApiResponse<StarAttachmentUploadV2Response>> {
    if (request.file == null) {
      throw new ApiException("Missing the required parameter 'file' when calling openApi2StarAttachmentUploadPost");
    }

    if (request.fileName == null) {
      throw new ApiException("Missing the required parameter 'fileName' when calling openApi2StarAttachmentUploadPost");
    }

    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarAttachmentUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<StarAttachmentUploadV2Response>({
      method: "POST",
      path: "/open_api/2/star/attachment/upload/",
      queryParams: [

      ]
    });
  }
}


