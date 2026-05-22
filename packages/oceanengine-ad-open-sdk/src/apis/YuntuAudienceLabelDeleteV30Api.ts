// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { YuntuAudienceLabelDeleteV30Request, YuntuAudienceLabelDeleteV30Response } from "../models";


export class YuntuAudienceLabelDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30YuntuAudienceLabelDeletePost(yuntuAudienceLabelDeleteV30Request: YuntuAudienceLabelDeleteV30Request): Promise<YuntuAudienceLabelDeleteV30Response> {
    const response = await this.openApiV30YuntuAudienceLabelDeletePostWithHttpInfo(yuntuAudienceLabelDeleteV30Request);
    return response.data;
  }

  async openApiV30YuntuAudienceLabelDeletePostWithHttpInfo(yuntuAudienceLabelDeleteV30Request: YuntuAudienceLabelDeleteV30Request): Promise<ApiResponse<YuntuAudienceLabelDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<YuntuAudienceLabelDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/yuntu/audience_label/delete/",
      queryParams: [

      ],
      body: yuntuAudienceLabelDeleteV30Request
    });
  }
}


