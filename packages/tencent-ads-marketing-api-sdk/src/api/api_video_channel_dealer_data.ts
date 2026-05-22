// Generated from tencentad/marketing-api-go-sdk pkg/api/api_video_channel_dealer_data.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { VideoChannelDealerDataGetRequest, VideoChannelDealerDataGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface VideoChannelDealerDataApiGetRequest {
  data: VideoChannelDealerDataGetRequest;
}


export class VideoChannelDealerDataApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: VideoChannelDealerDataApiGetRequest): Promise<VideoChannelDealerDataGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: VideoChannelDealerDataApiGetRequest): Promise<ApiResponse<VideoChannelDealerDataGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<VideoChannelDealerDataGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/video_channel_dealer_data/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


