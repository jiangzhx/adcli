// Generated from tencentad/marketing-api-go-sdk pkg/api/api_videomaker_videocaptures.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { VideomakerVideocapturesAddResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface VideomakerVideocapturesApiAddRequest {
  accountId: number | string;
  videoId?: string;
  videoFile?: Blob;
  signature?: string;
  number?: number;
  returnImageIds?: boolean;
}


export class VideomakerVideocapturesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: VideomakerVideocapturesApiAddRequest): Promise<VideomakerVideocapturesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: VideomakerVideocapturesApiAddRequest): Promise<ApiResponse<VideomakerVideocapturesAddResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<VideomakerVideocapturesAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/videomaker_videocaptures/add",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        account_id: request.accountId,
        video_id: request.videoId,
        signature: request.signature,
        number: request.number,
        return_image_ids: request.returnImageIds
      },
      files: {
        video_file: request.videoFile
      }
    });
  }

}


