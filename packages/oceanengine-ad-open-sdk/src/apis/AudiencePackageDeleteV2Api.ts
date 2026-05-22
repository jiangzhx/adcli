// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AudiencePackageDeleteV2Request, AudiencePackageDeleteV2Response } from "../models";


export interface OpenApi2AudiencePackageDeletePostRequest {
  audiencePackageDeleteV2Request?: AudiencePackageDeleteV2Request;
}

export class AudiencePackageDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AudiencePackageDeletePost(request: OpenApi2AudiencePackageDeletePostRequest): Promise<AudiencePackageDeleteV2Response> {
    const response = await this.openApi2AudiencePackageDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AudiencePackageDeletePostWithHttpInfo(request: OpenApi2AudiencePackageDeletePostRequest): Promise<ApiResponse<AudiencePackageDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<AudiencePackageDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/audience_package/delete/",
      queryParams: [

      ],
      body: request.audiencePackageDeleteV2Request
    });
  }
}


