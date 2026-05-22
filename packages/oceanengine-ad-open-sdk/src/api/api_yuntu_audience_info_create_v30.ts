// Generated from oceanengine/ad_open_sdk_go api/api_yuntu_audience_info_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { YuntuAudienceInfoCreateV30Request, YuntuAudienceInfoCreateV30Response } from "../models/index";


export interface YuntuAudienceInfoCreateV30ApiOpenApiV30YuntuAudienceInfoCreatePostRequest {
  yuntuAudienceInfoCreateV30Request?: YuntuAudienceInfoCreateV30Request;
}

export class YuntuAudienceInfoCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30YuntuAudienceInfoCreatePost(request: YuntuAudienceInfoCreateV30ApiOpenApiV30YuntuAudienceInfoCreatePostRequest): Promise<YuntuAudienceInfoCreateV30Response> {
    const response = await this.openApiV30YuntuAudienceInfoCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30YuntuAudienceInfoCreatePostWithHttpInfo(request: YuntuAudienceInfoCreateV30ApiOpenApiV30YuntuAudienceInfoCreatePostRequest): Promise<ApiResponse<YuntuAudienceInfoCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<YuntuAudienceInfoCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/yuntu/audience_info/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.yuntuAudienceInfoCreateV30Request
    });
  }
}


