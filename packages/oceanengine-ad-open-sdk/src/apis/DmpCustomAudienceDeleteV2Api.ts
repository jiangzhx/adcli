// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DmpCustomAudienceDeleteV2Request, DmpCustomAudienceDeleteV2Response } from "../models";


export class DmpCustomAudienceDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpCustomAudienceDeletePost(request: DmpCustomAudienceDeleteV2Request): Promise<DmpCustomAudienceDeleteV2Response> {
    const response = await this.openApi2DmpCustomAudienceDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DmpCustomAudienceDeletePostWithHttpInfo(request: DmpCustomAudienceDeleteV2Request): Promise<ApiResponse<DmpCustomAudienceDeleteV2Response>> {
    return this.apiClient.requestWithHttpInfo<DmpCustomAudienceDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/dmp/custom_audience/delete/",
      queryParams: [

      ],
      body: request
    });
  }
}


