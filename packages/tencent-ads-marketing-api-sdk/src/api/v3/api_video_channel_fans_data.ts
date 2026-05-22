// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_video_channel_fans_data.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { VideoChannelFansDataGetRequest, VideoChannelFansDataGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

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
      basePath: TencentAdsV30Configuration.basePath,
      path: "/video_channel_fans_data/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


