// Generated from oceanengine/ad_open_sdk_go api/api_agent_advertiser_copy_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentAdvertiserCopyV2Request, AgentAdvertiserCopyV2Response } from "../models/index";


export interface AgentAdvertiserCopyV2ApiOpenApi2AgentAdvertiserCopyPostRequest {
  agentAdvertiserCopyV2Request?: AgentAdvertiserCopyV2Request;
}

export class AgentAdvertiserCopyV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvertiserCopyPost(request: AgentAdvertiserCopyV2ApiOpenApi2AgentAdvertiserCopyPostRequest): Promise<AgentAdvertiserCopyV2Response> {
    const response = await this.openApi2AgentAdvertiserCopyPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvertiserCopyPostWithHttpInfo(request: AgentAdvertiserCopyV2ApiOpenApi2AgentAdvertiserCopyPostRequest): Promise<ApiResponse<AgentAdvertiserCopyV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvertiserCopyV2Response>({
      method: "POST",
      path: "/open_api/2/agent/advertiser/copy/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.agentAdvertiserCopyV2Request
    });
  }
}


