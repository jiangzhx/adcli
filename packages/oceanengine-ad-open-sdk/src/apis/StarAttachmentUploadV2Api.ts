// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarAttachmentUploadV2Response } from "../models";


export class StarAttachmentUploadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarAttachmentUploadPost(_file: File, fileName: string, starId: number): Promise<StarAttachmentUploadV2Response> {
    const response = await this.openApi2StarAttachmentUploadPostWithHttpInfo(_file, fileName, starId);
    return response.data;
  }

  async openApi2StarAttachmentUploadPostWithHttpInfo(_file: File, fileName: string, starId: number): Promise<ApiResponse<StarAttachmentUploadV2Response>> {
    if (_file == null) {
      throw new ApiException("Missing the required parameter '_file' when calling openApi2StarAttachmentUploadPost");
    }

    if (fileName == null) {
      throw new ApiException("Missing the required parameter 'fileName' when calling openApi2StarAttachmentUploadPost");
    }

    if (starId == null) {
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


