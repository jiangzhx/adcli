// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentAdvertiserAssignV2Request, AgentAdvertiserAssignV2Response } from "../models";


export class AgentAdvertiserAssignV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvertiserAssignPost(request: AgentAdvertiserAssignV2Request): Promise<AgentAdvertiserAssignV2Response> {
    const response = await this.openApi2AgentAdvertiserAssignPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvertiserAssignPostWithHttpInfo(request: AgentAdvertiserAssignV2Request): Promise<ApiResponse<AgentAdvertiserAssignV2Response>> {
    return this.apiClient.requestWithHttpInfo<AgentAdvertiserAssignV2Response>({
      method: "POST",
      path: "/open_api/2/agent/advertiser/assign/",
      queryParams: [

      ],
      body: request
    });
  }
}


