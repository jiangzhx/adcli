// Generated from tencentad/marketing-api-go-sdk pkg/api/api_video_channel_leads_data.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { VideoChannelLeadsDataGetRequest, VideoChannelLeadsDataGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface VideoChannelLeadsDataApiGetRequest {
  data: VideoChannelLeadsDataGetRequest;
}


export class VideoChannelLeadsDataApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: VideoChannelLeadsDataApiGetRequest): Promise<VideoChannelLeadsDataGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: VideoChannelLeadsDataApiGetRequest): Promise<ApiResponse<VideoChannelLeadsDataGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<VideoChannelLeadsDataGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/video_channel_leads_data/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


