// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideomakerSubtitlesAddResponseData } from "../models";

export interface VideomakerSubtitlesApiAddRequest {
  accountId: number | string;
  videoId?: string;
  videoFile?: Blob;
  signature?: string;
  onlySubtitleFile?: boolean;
}


export class VideomakerSubtitlesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: VideomakerSubtitlesApiAddRequest): Promise<VideomakerSubtitlesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: VideomakerSubtitlesApiAddRequest): Promise<ApiResponse<VideomakerSubtitlesAddResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<VideomakerSubtitlesAddResponseData>({
      method: "POST",
      path: "/videomaker_subtitles/add",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        account_id: request.accountId,
        video_id: request.videoId,
        signature: request.signature,
        only_subtitle_file: request.onlySubtitleFile
      },
      files: {
        video_file: request.videoFile
      }
    });
  }

}


