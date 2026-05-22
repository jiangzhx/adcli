// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileImageAdV2Response, FileImageAdV2UploadType } from "../models";


export interface OpenApi2FileImageAdPostRequest {
  advertiserId: number;
  filename?: string;
  imageFile?: File;
  imageSignature?: string;
  imageUrl?: string;
  isAigc?: boolean;
  uploadType?: FileImageAdV2UploadType;
}

export class FileImageAdV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileImageAdPost(request: OpenApi2FileImageAdPostRequest): Promise<FileImageAdV2Response> {
    const response = await this.openApi2FileImageAdPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileImageAdPostWithHttpInfo(request: OpenApi2FileImageAdPostRequest): Promise<ApiResponse<FileImageAdV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileImageAdPost");
    }
    return this.apiClient.requestWithHttpInfo<FileImageAdV2Response>({
      method: "POST",
      path: "/open_api/2/file/image/ad/",
      queryParams: [

      ]
    });
  }
}


