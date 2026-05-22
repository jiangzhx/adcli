// Generated from oceanengine/ad_open_sdk_go api/api_dmp_custom_audience_publish_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DmpCustomAudiencePublishV2Request, DmpCustomAudiencePublishV2Response } from "../models/index";


export interface DmpCustomAudiencePublishV2ApiOpenApi2DmpCustomAudiencePublishPostRequest {
  dmpCustomAudiencePublishV2Request?: DmpCustomAudiencePublishV2Request;
}

export class DmpCustomAudiencePublishV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpCustomAudiencePublishPost(request: DmpCustomAudiencePublishV2ApiOpenApi2DmpCustomAudiencePublishPostRequest): Promise<DmpCustomAudiencePublishV2Response> {
    const response = await this.openApi2DmpCustomAudiencePublishPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DmpCustomAudiencePublishPostWithHttpInfo(request: DmpCustomAudiencePublishV2ApiOpenApi2DmpCustomAudiencePublishPostRequest): Promise<ApiResponse<DmpCustomAudiencePublishV2Response>> {

    return this.apiClient.requestWithHttpInfo<DmpCustomAudiencePublishV2Response>({
      method: "POST",
      path: "/open_api/2/dmp/custom_audience/publish/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dmpCustomAudiencePublishV2Request
    });
  }
}


