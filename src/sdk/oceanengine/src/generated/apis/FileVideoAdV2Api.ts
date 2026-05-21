// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { FileVideoAdV2Response, FileVideoAdV2UploadType } from "../models";


export class FileVideoAdV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoAdPost(advertiserId: number, filename: string, isAigc: boolean, isGuideVideo: boolean, labels: string[], uploadType: FileVideoAdV2UploadType, videoFile: File, videoSignature: string, videoUrl: string): Promise<FileVideoAdV2Response> {
    const response = await this.openApi2FileVideoAdPostWithHttpInfo(advertiserId, filename, isAigc, isGuideVideo, labels, uploadType, videoFile, videoSignature, videoUrl);
    return response.data;
  }

  async openApi2FileVideoAdPostWithHttpInfo(advertiserId: number, filename: string, isAigc: boolean, isGuideVideo: boolean, labels: string[], uploadType: FileVideoAdV2UploadType, videoFile: File, videoSignature: string, videoUrl: string): Promise<ApiResponse<FileVideoAdV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileVideoAdPost");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoAdV2Response>({
      method: "POST",
      path: "/open_api/2/file/video/ad/",
      queryParams: [

      ]
    });
  }
}


