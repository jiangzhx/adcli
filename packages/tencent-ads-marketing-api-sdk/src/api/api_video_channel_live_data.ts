// Generated from tencentad/marketing-api-go-sdk pkg/api/api_video_channel_live_data.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { VideoChannelLiveDataGetRequest, VideoChannelLiveDataGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface VideoChannelLiveDataApiGetRequest {
  data: VideoChannelLiveDataGetRequest;
}


export class VideoChannelLiveDataApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: VideoChannelLiveDataApiGetRequest): Promise<VideoChannelLiveDataGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: VideoChannelLiveDataApiGetRequest): Promise<ApiResponse<VideoChannelLiveDataGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<VideoChannelLiveDataGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/video_channel_live_data/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


