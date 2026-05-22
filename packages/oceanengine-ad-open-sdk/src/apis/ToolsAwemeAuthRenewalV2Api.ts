// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAwemeAuthRenewalV2Request, ToolsAwemeAuthRenewalV2Response } from "../models";


export class ToolsAwemeAuthRenewalV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeAuthRenewalPost(toolsAwemeAuthRenewalV2Request: ToolsAwemeAuthRenewalV2Request): Promise<ToolsAwemeAuthRenewalV2Response> {
    const response = await this.openApi2ToolsAwemeAuthRenewalPostWithHttpInfo(toolsAwemeAuthRenewalV2Request);
    return response.data;
  }

  async openApi2ToolsAwemeAuthRenewalPostWithHttpInfo(toolsAwemeAuthRenewalV2Request: ToolsAwemeAuthRenewalV2Request): Promise<ApiResponse<ToolsAwemeAuthRenewalV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeAuthRenewalV2Response>({
      method: "POST",
      path: "/open_api/2/tools/aweme_auth/renewal/",
      queryParams: [

      ],
      body: toolsAwemeAuthRenewalV2Request
    });
  }
}


