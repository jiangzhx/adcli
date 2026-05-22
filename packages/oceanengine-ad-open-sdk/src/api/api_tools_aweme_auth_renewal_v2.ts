// Generated from oceanengine/ad_open_sdk_go api/api_tools_aweme_auth_renewal_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAwemeAuthRenewalV2Request, ToolsAwemeAuthRenewalV2Response } from "../models/index";


export interface ToolsAwemeAuthRenewalV2ApiOpenApi2ToolsAwemeAuthRenewalPostRequest {
  toolsAwemeAuthRenewalV2Request?: ToolsAwemeAuthRenewalV2Request;
}

export class ToolsAwemeAuthRenewalV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeAuthRenewalPost(request: ToolsAwemeAuthRenewalV2ApiOpenApi2ToolsAwemeAuthRenewalPostRequest): Promise<ToolsAwemeAuthRenewalV2Response> {
    const response = await this.openApi2ToolsAwemeAuthRenewalPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAwemeAuthRenewalPostWithHttpInfo(request: ToolsAwemeAuthRenewalV2ApiOpenApi2ToolsAwemeAuthRenewalPostRequest): Promise<ApiResponse<ToolsAwemeAuthRenewalV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeAuthRenewalV2Response>({
      method: "POST",
      path: "/open_api/2/tools/aweme_auth/renewal/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAwemeAuthRenewalV2Request
    });
  }
}


