// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileVideoAdV2Response, FileVideoAdV2UploadType } from "../models";


export interface OpenApi2FileVideoAdPostRequest {
  advertiserId: number | string;
  filename?: string;
  isAigc?: boolean;
  isGuideVideo?: boolean;
  labels?: string[];
  uploadType?: FileVideoAdV2UploadType;
  videoFile?: File;
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

  async openApi2FileVideoAdPost(request: OpenApi2FileVideoAdPostRequest): Promise<FileVideoAdV2Response> {
    const response = await this.openApi2FileVideoAdPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoAdPostWithHttpInfo(request: OpenApi2FileVideoAdPostRequest): Promise<ApiResponse<FileVideoAdV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileVideoAdPost");
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


