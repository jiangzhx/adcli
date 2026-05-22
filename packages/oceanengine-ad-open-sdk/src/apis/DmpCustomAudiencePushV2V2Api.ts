// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DmpCustomAudiencePushV2V2Request, DmpCustomAudiencePushV2V2Response } from "../models";


export interface OpenApi2DmpCustomAudiencePushV2PostRequest {
  dmpCustomAudiencePushV2V2Request?: DmpCustomAudiencePushV2V2Request;
}

export class DmpCustomAudiencePushV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpCustomAudiencePushV2Post(request: OpenApi2DmpCustomAudiencePushV2PostRequest): Promise<DmpCustomAudiencePushV2V2Response> {
    const response = await this.openApi2DmpCustomAudiencePushV2PostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DmpCustomAudiencePushV2PostWithHttpInfo(request: OpenApi2DmpCustomAudiencePushV2PostRequest): Promise<ApiResponse<DmpCustomAudiencePushV2V2Response>> {

    return this.apiClient.requestWithHttpInfo<DmpCustomAudiencePushV2V2Response>({
      method: "POST",
      path: "/open_api/2/dmp/custom_audience/push_v2/",
      queryParams: [

      ],
      body: request.dmpCustomAudiencePushV2V2Request
    });
  }
}


