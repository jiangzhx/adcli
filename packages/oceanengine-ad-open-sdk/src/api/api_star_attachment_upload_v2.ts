// Generated from oceanengine/ad_open_sdk_go api/api_star_attachment_upload_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarAttachmentUploadV2Response } from "../models/index";


export interface StarAttachmentUploadV2ApiOpenApi2StarAttachmentUploadPostRequest {
  file: Blob;
  fileName: string;
  starId: number | string;
}

export class StarAttachmentUploadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarAttachmentUploadPost(request: StarAttachmentUploadV2ApiOpenApi2StarAttachmentUploadPostRequest): Promise<StarAttachmentUploadV2Response> {
    const response = await this.openApi2StarAttachmentUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarAttachmentUploadPostWithHttpInfo(request: StarAttachmentUploadV2ApiOpenApi2StarAttachmentUploadPostRequest): Promise<ApiResponse<StarAttachmentUploadV2Response>> {
    if (request.file == null) {
      throw new ApiException("file is required and must be specified");
    }

    if (request.fileName == null) {
      throw new ApiException("fileName is required and must be specified");
    }

    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<StarAttachmentUploadV2Response>({
      method: "POST",
      path: "/open_api/2/star/attachment/upload/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        file_name: request.fileName,
        star_id: request.starId
      },
      files: {
        file: request.file
      }
    });
  }
}


