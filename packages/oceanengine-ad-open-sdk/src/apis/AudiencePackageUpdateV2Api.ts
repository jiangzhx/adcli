// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AudiencePackageUpdateV2Request, AudiencePackageUpdateV2Response } from "../models";


export class AudiencePackageUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AudiencePackageUpdatePost(request: AudiencePackageUpdateV2Request): Promise<AudiencePackageUpdateV2Response> {
    const response = await this.openApi2AudiencePackageUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AudiencePackageUpdatePostWithHttpInfo(request: AudiencePackageUpdateV2Request): Promise<ApiResponse<AudiencePackageUpdateV2Response>> {
    return this.apiClient.requestWithHttpInfo<AudiencePackageUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/audience_package/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


