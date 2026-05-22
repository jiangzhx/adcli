// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileImageAdvertiserV2Response, FileImageAdvertiserV2UploadTo, FileImageAdvertiserV2UploadType } from "../models";


export interface OpenApi2FileImageAdvertiserPostRequest {
  advertiserId: number | string;
  uploadTo: FileImageAdvertiserV2UploadTo;
  imageFile?: File;
  imageSignature?: string;
  imageUrl?: string;
  uploadType?: FileImageAdvertiserV2UploadType;
}

export class FileImageAdvertiserV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileImageAdvertiserPost(request: OpenApi2FileImageAdvertiserPostRequest): Promise<FileImageAdvertiserV2Response> {
    const response = await this.openApi2FileImageAdvertiserPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileImageAdvertiserPostWithHttpInfo(request: OpenApi2FileImageAdvertiserPostRequest): Promise<ApiResponse<FileImageAdvertiserV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileImageAdvertiserPost");
    }

    if (request.uploadTo == null) {
      throw new ApiException("Missing the required parameter 'uploadTo' when calling openApi2FileImageAdvertiserPost");
    }
    return this.apiClient.requestWithHttpInfo<FileImageAdvertiserV2Response>({
      method: "POST",
      path: "/open_api/2/file/image/advertiser/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        advertiser_id: request.advertiserId,
        image_signature: request.imageSignature,
        image_url: request.imageUrl,
        upload_to: request.uploadTo,
        upload_type: request.uploadType
      },
      files: {
        image_file: request.imageFile
      }
    });
  }
}


