// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DmpCustomAudiencePublishV2Request, DmpCustomAudiencePublishV2Response } from "../models";


export class DmpCustomAudiencePublishV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpCustomAudiencePublishPost(dmpCustomAudiencePublishV2Request: DmpCustomAudiencePublishV2Request): Promise<DmpCustomAudiencePublishV2Response> {
    const response = await this.openApi2DmpCustomAudiencePublishPostWithHttpInfo(dmpCustomAudiencePublishV2Request);
    return response.data;
  }

  async openApi2DmpCustomAudiencePublishPostWithHttpInfo(dmpCustomAudiencePublishV2Request: DmpCustomAudiencePublishV2Request): Promise<ApiResponse<DmpCustomAudiencePublishV2Response>> {

    return this.apiClient.requestWithHttpInfo<DmpCustomAudiencePublishV2Response>({
      method: "POST",
      path: "/open_api/2/dmp/custom_audience/publish/",
      queryParams: [

      ],
      body: dmpCustomAudiencePublishV2Request
    });
  }
}


