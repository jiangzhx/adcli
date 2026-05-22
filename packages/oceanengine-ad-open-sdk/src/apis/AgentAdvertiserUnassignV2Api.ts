// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentAdvertiserUnassignV2Request, AgentAdvertiserUnassignV2Response } from "../models";


export interface OpenApi2AgentAdvertiserUnassignPostRequest {
  agentAdvertiserUnassignV2Request?: AgentAdvertiserUnassignV2Request;
}

export class AgentAdvertiserUnassignV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvertiserUnassignPost(request: OpenApi2AgentAdvertiserUnassignPostRequest): Promise<AgentAdvertiserUnassignV2Response> {
    const response = await this.openApi2AgentAdvertiserUnassignPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvertiserUnassignPostWithHttpInfo(request: OpenApi2AgentAdvertiserUnassignPostRequest): Promise<ApiResponse<AgentAdvertiserUnassignV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvertiserUnassignV2Response>({
      method: "POST",
      path: "/open_api/2/agent/advertiser/unassign/",
      queryParams: [

      ],
      body: request.agentAdvertiserUnassignV2Request
    });
  }
}


