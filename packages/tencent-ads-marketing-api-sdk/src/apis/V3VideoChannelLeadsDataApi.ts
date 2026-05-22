// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideoChannelLeadsDataGetRequest, VideoChannelLeadsDataGetResponseData } from "../models";

export interface V3VideoChannelLeadsDataApiGetRequest {
  data: VideoChannelLeadsDataGetRequest;
}


export class V3VideoChannelLeadsDataApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3VideoChannelLeadsDataApiGetRequest): Promise<VideoChannelLeadsDataGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3VideoChannelLeadsDataApiGetRequest): Promise<ApiResponse<VideoChannelLeadsDataGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<VideoChannelLeadsDataGetResponseData>({
      method: "POST",
      path: "/video_channel_leads_data/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


