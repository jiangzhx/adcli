// Generated from oceanengine/ad_open_sdk_go api/api_file_image_ad_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileImageAdV2Response, FileImageAdV2UploadType } from "../models/index";


export interface FileImageAdV2ApiOpenApi2FileImageAdPostRequest {
  advertiserId: number | string;
  filename?: string;
  imageFile?: Blob;
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

  async openApi2FileImageAdPost(request: FileImageAdV2ApiOpenApi2FileImageAdPostRequest): Promise<FileImageAdV2Response> {
    const response = await this.openApi2FileImageAdPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileImageAdPostWithHttpInfo(request: FileImageAdV2ApiOpenApi2FileImageAdPostRequest): Promise<ApiResponse<FileImageAdV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileImageAdPost");
    }
    return this.apiClient.requestWithHttpInfo<FileImageAdV2Response>({
      method: "POST",
      path: "/open_api/2/file/image/ad/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        advertiser_id: request.advertiserId,
        filename: request.filename,
        image_signature: request.imageSignature,
        image_url: request.imageUrl,
        is_aigc: request.isAigc,
        upload_type: request.uploadType
      },
      files: {
        image_file: request.imageFile
      }
    });
  }
}


