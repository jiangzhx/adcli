// Generated from oceanengine/ad_open_sdk_go api/api_aic_video_mixcut_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AicVideoMixcutCreateV30Request, AicVideoMixcutCreateV30Response } from "../models/index";


export interface AicVideoMixcutCreateV30ApiOpenApiV30AicVideoMixcutCreatePostRequest {
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

  async openApiV30AicVideoMixcutCreatePost(request: AicVideoMixcutCreateV30ApiOpenApiV30AicVideoMixcutCreatePostRequest): Promise<AicVideoMixcutCreateV30Response> {
    const response = await this.openApiV30AicVideoMixcutCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicVideoMixcutCreatePostWithHttpInfo(request: AicVideoMixcutCreateV30ApiOpenApiV30AicVideoMixcutCreatePostRequest): Promise<ApiResponse<AicVideoMixcutCreateV30Response>> {

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


