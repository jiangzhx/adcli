// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { YuntuAudienceInfoCreateV30Request, YuntuAudienceInfoCreateV30Response } from "../models";


export class YuntuAudienceInfoCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30YuntuAudienceInfoCreatePost(request: YuntuAudienceInfoCreateV30Request): Promise<YuntuAudienceInfoCreateV30Response> {
    const response = await this.openApiV30YuntuAudienceInfoCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30YuntuAudienceInfoCreatePostWithHttpInfo(request: YuntuAudienceInfoCreateV30Request): Promise<ApiResponse<YuntuAudienceInfoCreateV30Response>> {
    return this.apiClient.requestWithHttpInfo<YuntuAudienceInfoCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/yuntu/audience_info/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


