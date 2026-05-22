// Generated from oceanengine/ad_open_sdk_go api/api_dmp_custom_audience_copy_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DmpCustomAudienceCopyV2Request, DmpCustomAudienceCopyV2Response } from "../models/index";


export interface DmpCustomAudienceCopyV2ApiOpenApi2DmpCustomAudienceCopyPostRequest {
  dmpCustomAudienceCopyV2Request?: DmpCustomAudienceCopyV2Request;
}

export class DmpCustomAudienceCopyV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpCustomAudienceCopyPost(request: DmpCustomAudienceCopyV2ApiOpenApi2DmpCustomAudienceCopyPostRequest): Promise<DmpCustomAudienceCopyV2Response> {
    const response = await this.openApi2DmpCustomAudienceCopyPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DmpCustomAudienceCopyPostWithHttpInfo(request: DmpCustomAudienceCopyV2ApiOpenApi2DmpCustomAudienceCopyPostRequest): Promise<ApiResponse<DmpCustomAudienceCopyV2Response>> {

    return this.apiClient.requestWithHttpInfo<DmpCustomAudienceCopyV2Response>({
      method: "POST",
      path: "/open_api/2/dmp/custom_audience/copy/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dmpCustomAudienceCopyV2Request
    });
  }
}


