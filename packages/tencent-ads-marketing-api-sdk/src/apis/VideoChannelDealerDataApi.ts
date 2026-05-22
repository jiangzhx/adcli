// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideoChannelDealerDataGetRequest, VideoChannelDealerDataGetResponseData } from "../models";

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
      path: "/video_channel_dealer_data/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


