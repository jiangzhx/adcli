// Generated from oceanengine/ad_open_sdk_go api/api_file_video_ad_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileVideoAdV2Response, FileVideoAdV2UploadType } from "../models/index";


export interface FileVideoAdV2ApiOpenApi2FileVideoAdPostRequest {
  advertiserId: number | string;
  filename?: string;
  isAigc?: boolean;
  isGuideVideo?: boolean;
  labels?: string[];
  uploadType?: FileVideoAdV2UploadType;
  videoFile?: Blob;
  videoSignature?: string;
  videoUrl?: string;
}

export class FileVideoAdV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoAdPost(request: FileVideoAdV2ApiOpenApi2FileVideoAdPostRequest): Promise<FileVideoAdV2Response> {
    const response = await this.openApi2FileVideoAdPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoAdPostWithHttpInfo(request: FileVideoAdV2ApiOpenApi2FileVideoAdPostRequest): Promise<ApiResponse<FileVideoAdV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoAdV2Response>({
      method: "POST",
      path: "/open_api/2/file/video/ad/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        advertiser_id: request.advertiserId,
        filename: request.filename,
        is_aigc: request.isAigc,
        is_guide_video: request.isGuideVideo,
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


