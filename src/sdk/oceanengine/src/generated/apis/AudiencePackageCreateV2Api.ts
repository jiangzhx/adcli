// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AudiencePackageCreateV2Request, AudiencePackageCreateV2Response } from "../models";


export class AudiencePackageCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AudiencePackageCreatePost(audiencePackageCreateV2Request: AudiencePackageCreateV2Request): Promise<AudiencePackageCreateV2Response> {
    const response = await this.openApi2AudiencePackageCreatePostWithHttpInfo(audiencePackageCreateV2Request);
    return response.data;
  }

  async openApi2AudiencePackageCreatePostWithHttpInfo(audiencePackageCreateV2Request: AudiencePackageCreateV2Request): Promise<ApiResponse<AudiencePackageCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<AudiencePackageCreateV2Response>({
      method: "POST",
      path: "/open_api/2/audience_package/create/",
      queryParams: [

      ],
      body: audiencePackageCreateV2Request
    });
  }
}


