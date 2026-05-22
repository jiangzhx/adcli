// Generated from oceanengine/ad_open_sdk_go api/api_yuntu_audience_label_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { YuntuAudienceLabelDeleteV30Request, YuntuAudienceLabelDeleteV30Response } from "../models/index";


export interface YuntuAudienceLabelDeleteV30ApiOpenApiV30YuntuAudienceLabelDeletePostRequest {
  yuntuAudienceLabelDeleteV30Request?: YuntuAudienceLabelDeleteV30Request;
}

export class YuntuAudienceLabelDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30YuntuAudienceLabelDeletePost(request: YuntuAudienceLabelDeleteV30ApiOpenApiV30YuntuAudienceLabelDeletePostRequest): Promise<YuntuAudienceLabelDeleteV30Response> {
    const response = await this.openApiV30YuntuAudienceLabelDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30YuntuAudienceLabelDeletePostWithHttpInfo(request: YuntuAudienceLabelDeleteV30ApiOpenApiV30YuntuAudienceLabelDeletePostRequest): Promise<ApiResponse<YuntuAudienceLabelDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<YuntuAudienceLabelDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/yuntu/audience_label/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.yuntuAudienceLabelDeleteV30Request
    });
  }
}


