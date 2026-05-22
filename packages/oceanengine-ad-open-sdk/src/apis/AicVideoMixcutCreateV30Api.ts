// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AicVideoMixcutCreateV30Request, AicVideoMixcutCreateV30Response } from "../models";


export interface OpenApiV30AicVideoMixcutCreatePostRequest {
  aicVideoMixcutCreateV30Request?: AicVideoMixcutCreateV30Request;
}

export class AicVideoMixcutCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicVideoMixcutCreatePost(request: OpenApiV30AicVideoMixcutCreatePostRequest): Promise<AicVideoMixcutCreateV30Response> {
    const response = await this.openApiV30AicVideoMixcutCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicVideoMixcutCreatePostWithHttpInfo(request: OpenApiV30AicVideoMixcutCreatePostRequest): Promise<ApiResponse<AicVideoMixcutCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<AicVideoMixcutCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/aic/video_mixcut/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.aicVideoMixcutCreateV30Request
    });
  }
}


