// Generated from tencentad/marketing-api-go-sdk pkg/api/api_videomaker_subtitles.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { VideomakerSubtitlesAddResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

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
      basePath: TencentAdsV13Configuration.basePath,
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


