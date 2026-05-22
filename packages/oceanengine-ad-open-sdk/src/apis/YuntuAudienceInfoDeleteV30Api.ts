// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { YuntuAudienceInfoDeleteV30Request, YuntuAudienceInfoDeleteV30Response } from "../models";


export class YuntuAudienceInfoDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30YuntuAudienceInfoDeletePost(yuntuAudienceInfoDeleteV30Request: YuntuAudienceInfoDeleteV30Request): Promise<YuntuAudienceInfoDeleteV30Response> {
    const response = await this.openApiV30YuntuAudienceInfoDeletePostWithHttpInfo(yuntuAudienceInfoDeleteV30Request);
    return response.data;
  }

  async openApiV30YuntuAudienceInfoDeletePostWithHttpInfo(yuntuAudienceInfoDeleteV30Request: YuntuAudienceInfoDeleteV30Request): Promise<ApiResponse<YuntuAudienceInfoDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<YuntuAudienceInfoDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/yuntu/audience_info/delete/",
      queryParams: [

      ],
      body: yuntuAudienceInfoDeleteV30Request
    });
  }
}


