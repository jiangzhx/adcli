// Generated from oceanengine/ad_open_sdk_go api/api_yuntu_audience_label_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { YuntuAudienceLabelCreateV30Request, YuntuAudienceLabelCreateV30Response } from "../models/index";


export interface YuntuAudienceLabelCreateV30ApiOpenApiV30YuntuAudienceLabelCreatePostRequest {
  yuntuAudienceLabelCreateV30Request?: YuntuAudienceLabelCreateV30Request;
}

export class YuntuAudienceLabelCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30YuntuAudienceLabelCreatePost(request: YuntuAudienceLabelCreateV30ApiOpenApiV30YuntuAudienceLabelCreatePostRequest): Promise<YuntuAudienceLabelCreateV30Response> {
    const response = await this.openApiV30YuntuAudienceLabelCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30YuntuAudienceLabelCreatePostWithHttpInfo(request: YuntuAudienceLabelCreateV30ApiOpenApiV30YuntuAudienceLabelCreatePostRequest): Promise<ApiResponse<YuntuAudienceLabelCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<YuntuAudienceLabelCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/yuntu/audience_label/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.yuntuAudienceLabelCreateV30Request
    });
  }
}


