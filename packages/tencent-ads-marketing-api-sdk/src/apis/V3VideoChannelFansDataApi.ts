// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideoChannelFansDataGetRequest, VideoChannelFansDataGetResponseData } from "../models";

export interface V3VideoChannelFansDataApiGetRequest {
  data: VideoChannelFansDataGetRequest;
}


export class V3VideoChannelFansDataApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3VideoChannelFansDataApiGetRequest): Promise<VideoChannelFansDataGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3VideoChannelFansDataApiGetRequest): Promise<ApiResponse<VideoChannelFansDataGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<VideoChannelFansDataGetResponseData>({
      method: "POST",
      path: "/video_channel_fans_data/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


