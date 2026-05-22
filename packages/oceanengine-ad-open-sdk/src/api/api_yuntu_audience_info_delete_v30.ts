// Generated from oceanengine/ad_open_sdk_go api/api_yuntu_audience_info_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { YuntuAudienceInfoDeleteV30Request, YuntuAudienceInfoDeleteV30Response } from "../models/index";


export interface YuntuAudienceInfoDeleteV30ApiOpenApiV30YuntuAudienceInfoDeletePostRequest {
  yuntuAudienceInfoDeleteV30Request?: YuntuAudienceInfoDeleteV30Request;
}

export class YuntuAudienceInfoDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30YuntuAudienceInfoDeletePost(request: YuntuAudienceInfoDeleteV30ApiOpenApiV30YuntuAudienceInfoDeletePostRequest): Promise<YuntuAudienceInfoDeleteV30Response> {
    const response = await this.openApiV30YuntuAudienceInfoDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30YuntuAudienceInfoDeletePostWithHttpInfo(request: YuntuAudienceInfoDeleteV30ApiOpenApiV30YuntuAudienceInfoDeletePostRequest): Promise<ApiResponse<YuntuAudienceInfoDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<YuntuAudienceInfoDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/yuntu/audience_info/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.yuntuAudienceInfoDeleteV30Request
    });
  }
}


