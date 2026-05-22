// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DmpCustomAudienceCopyV2Request, DmpCustomAudienceCopyV2Response } from "../models";


export class DmpCustomAudienceCopyV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpCustomAudienceCopyPost(dmpCustomAudienceCopyV2Request: DmpCustomAudienceCopyV2Request): Promise<DmpCustomAudienceCopyV2Response> {
    const response = await this.openApi2DmpCustomAudienceCopyPostWithHttpInfo(dmpCustomAudienceCopyV2Request);
    return response.data;
  }

  async openApi2DmpCustomAudienceCopyPostWithHttpInfo(dmpCustomAudienceCopyV2Request: DmpCustomAudienceCopyV2Request): Promise<ApiResponse<DmpCustomAudienceCopyV2Response>> {

    return this.apiClient.requestWithHttpInfo<DmpCustomAudienceCopyV2Response>({
      method: "POST",
      path: "/open_api/2/dmp/custom_audience/copy/",
      queryParams: [

      ],
      body: dmpCustomAudienceCopyV2Request
    });
  }
}


