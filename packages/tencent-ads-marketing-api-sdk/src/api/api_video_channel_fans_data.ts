// Generated from tencentad/marketing-api-go-sdk pkg/api/api_video_channel_fans_data.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { VideoChannelFansDataGetRequest, VideoChannelFansDataGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface VideoChannelFansDataApiGetRequest {
  data: VideoChannelFansDataGetRequest;
}


export class VideoChannelFansDataApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: VideoChannelFansDataApiGetRequest): Promise<VideoChannelFansDataGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: VideoChannelFansDataApiGetRequest): Promise<ApiResponse<VideoChannelFansDataGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<VideoChannelFansDataGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/video_channel_fans_data/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


