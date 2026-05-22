// Generated from oceanengine/ad_open_sdk_go api/api_dmp_custom_audience_delete_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DmpCustomAudienceDeleteV2Request, DmpCustomAudienceDeleteV2Response } from "../models/index";


export interface DmpCustomAudienceDeleteV2ApiOpenApi2DmpCustomAudienceDeletePostRequest {
  dmpCustomAudienceDeleteV2Request?: DmpCustomAudienceDeleteV2Request;
}

export class DmpCustomAudienceDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpCustomAudienceDeletePost(request: DmpCustomAudienceDeleteV2ApiOpenApi2DmpCustomAudienceDeletePostRequest): Promise<DmpCustomAudienceDeleteV2Response> {
    const response = await this.openApi2DmpCustomAudienceDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DmpCustomAudienceDeletePostWithHttpInfo(request: DmpCustomAudienceDeleteV2ApiOpenApi2DmpCustomAudienceDeletePostRequest): Promise<ApiResponse<DmpCustomAudienceDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<DmpCustomAudienceDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/dmp/custom_audience/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dmpCustomAudienceDeleteV2Request
    });
  }
}


