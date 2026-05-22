// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_object_comment_flag.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ObjectCommentFlagUpdateRequest } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ObjectCommentFlagApiUpdateRequest {
  data: ObjectCommentFlagUpdateRequest;
}


export class ObjectCommentFlagApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async update(request: ObjectCommentFlagApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: ObjectCommentFlagApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/object_comment_flag/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


