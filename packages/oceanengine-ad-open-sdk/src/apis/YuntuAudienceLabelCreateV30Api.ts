// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { YuntuAudienceLabelCreateV30Request, YuntuAudienceLabelCreateV30Response } from "../models";


export class YuntuAudienceLabelCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30YuntuAudienceLabelCreatePost(request: YuntuAudienceLabelCreateV30Request): Promise<YuntuAudienceLabelCreateV30Response> {
    const response = await this.openApiV30YuntuAudienceLabelCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30YuntuAudienceLabelCreatePostWithHttpInfo(request: YuntuAudienceLabelCreateV30Request): Promise<ApiResponse<YuntuAudienceLabelCreateV30Response>> {
    return this.apiClient.requestWithHttpInfo<YuntuAudienceLabelCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/yuntu/audience_label/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


