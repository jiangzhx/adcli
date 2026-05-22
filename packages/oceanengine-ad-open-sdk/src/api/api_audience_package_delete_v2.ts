// Generated from oceanengine/ad_open_sdk_go api/api_audience_package_delete_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AudiencePackageDeleteV2Request, AudiencePackageDeleteV2Response } from "../models/index";


export interface AudiencePackageDeleteV2ApiOpenApi2AudiencePackageDeletePostRequest {
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

  async openApi2AudiencePackageDeletePost(request: AudiencePackageDeleteV2ApiOpenApi2AudiencePackageDeletePostRequest): Promise<AudiencePackageDeleteV2Response> {
    const response = await this.openApi2AudiencePackageDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AudiencePackageDeletePostWithHttpInfo(request: AudiencePackageDeleteV2ApiOpenApi2AudiencePackageDeletePostRequest): Promise<ApiResponse<AudiencePackageDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<AudiencePackageDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/audience_package/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.audiencePackageDeleteV2Request
    });
  }
}


