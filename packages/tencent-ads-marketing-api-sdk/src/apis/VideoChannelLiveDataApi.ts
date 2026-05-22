// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideoChannelLiveDataGetRequest, VideoChannelLiveDataGetResponseData } from "../models";

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
      path: "/video_channel_live_data/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


