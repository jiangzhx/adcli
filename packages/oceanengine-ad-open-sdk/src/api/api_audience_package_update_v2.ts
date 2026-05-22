// Generated from oceanengine/ad_open_sdk_go api/api_audience_package_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AudiencePackageUpdateV2Request, AudiencePackageUpdateV2Response } from "../models/index";


export interface AudiencePackageUpdateV2ApiOpenApi2AudiencePackageUpdatePostRequest {
  audiencePackageUpdateV2Request?: AudiencePackageUpdateV2Request;
}

export class AudiencePackageUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AudiencePackageUpdatePost(request: AudiencePackageUpdateV2ApiOpenApi2AudiencePackageUpdatePostRequest): Promise<AudiencePackageUpdateV2Response> {
    const response = await this.openApi2AudiencePackageUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AudiencePackageUpdatePostWithHttpInfo(request: AudiencePackageUpdateV2ApiOpenApi2AudiencePackageUpdatePostRequest): Promise<ApiResponse<AudiencePackageUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<AudiencePackageUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/audience_package/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.audiencePackageUpdateV2Request
    });
  }
}


