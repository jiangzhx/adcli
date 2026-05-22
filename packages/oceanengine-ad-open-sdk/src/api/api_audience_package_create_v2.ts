// Generated from oceanengine/ad_open_sdk_go api/api_audience_package_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AudiencePackageCreateV2Request, AudiencePackageCreateV2Response } from "../models/index";


export interface AudiencePackageCreateV2ApiOpenApi2AudiencePackageCreatePostRequest {
  audiencePackageCreateV2Request?: AudiencePackageCreateV2Request;
}

export class AudiencePackageCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AudiencePackageCreatePost(request: AudiencePackageCreateV2ApiOpenApi2AudiencePackageCreatePostRequest): Promise<AudiencePackageCreateV2Response> {
    const response = await this.openApi2AudiencePackageCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AudiencePackageCreatePostWithHttpInfo(request: AudiencePackageCreateV2ApiOpenApi2AudiencePackageCreatePostRequest): Promise<ApiResponse<AudiencePackageCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<AudiencePackageCreateV2Response>({
      method: "POST",
      path: "/open_api/2/audience_package/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.audiencePackageCreateV2Request
    });
  }
}


