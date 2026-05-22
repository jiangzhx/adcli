// Generated from oceanengine/ad_open_sdk_go api/api_file_image_advertiser_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileImageAdvertiserV2Response, FileImageAdvertiserV2UploadTo, FileImageAdvertiserV2UploadType } from "../models/index";


export interface FileImageAdvertiserV2ApiOpenApi2FileImageAdvertiserPostRequest {
  advertiserId: number | string;
  uploadTo: FileImageAdvertiserV2UploadTo;
  imageFile?: Blob;
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

  async openApi2FileImageAdvertiserPost(request: FileImageAdvertiserV2ApiOpenApi2FileImageAdvertiserPostRequest): Promise<FileImageAdvertiserV2Response> {
    const response = await this.openApi2FileImageAdvertiserPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileImageAdvertiserPostWithHttpInfo(request: FileImageAdvertiserV2ApiOpenApi2FileImageAdvertiserPostRequest): Promise<ApiResponse<FileImageAdvertiserV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.uploadTo == null) {
      throw new ApiException("uploadTo is required and must be specified");
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


