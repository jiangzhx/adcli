// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AudiencePackageDeleteV2Request, AudiencePackageDeleteV2Response } from "../models";


export class AudiencePackageDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AudiencePackageDeletePost(audiencePackageDeleteV2Request: AudiencePackageDeleteV2Request): Promise<AudiencePackageDeleteV2Response> {
    const response = await this.openApi2AudiencePackageDeletePostWithHttpInfo(audiencePackageDeleteV2Request);
    return response.data;
  }

  async openApi2AudiencePackageDeletePostWithHttpInfo(audiencePackageDeleteV2Request: AudiencePackageDeleteV2Request): Promise<ApiResponse<AudiencePackageDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<AudiencePackageDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/audience_package/delete/",
      queryParams: [

      ],
      body: audiencePackageDeleteV2Request
    });
  }
}


