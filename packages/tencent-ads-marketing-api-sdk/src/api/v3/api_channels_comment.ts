// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_channels_comment.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ChannelsCommentAddRequest, ChannelsCommentDeleteRequest } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ChannelsCommentApiAddRequest {
  data: ChannelsCommentAddRequest;
}

export interface ChannelsCommentApiDeleteRequest {
  data: ChannelsCommentDeleteRequest;
}


export class ChannelsCommentApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: ChannelsCommentApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: ChannelsCommentApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/channels_comment/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: ChannelsCommentApiDeleteRequest): Promise<unknown> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: ChannelsCommentApiDeleteRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/channels_comment/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


