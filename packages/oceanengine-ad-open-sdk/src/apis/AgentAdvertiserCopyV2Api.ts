// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentAdvertiserCopyV2Request, AgentAdvertiserCopyV2Response } from "../models";


export class AgentAdvertiserCopyV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvertiserCopyPost(agentAdvertiserCopyV2Request: AgentAdvertiserCopyV2Request): Promise<AgentAdvertiserCopyV2Response> {
    const response = await this.openApi2AgentAdvertiserCopyPostWithHttpInfo(agentAdvertiserCopyV2Request);
    return response.data;
  }

  async openApi2AgentAdvertiserCopyPostWithHttpInfo(agentAdvertiserCopyV2Request: AgentAdvertiserCopyV2Request): Promise<ApiResponse<AgentAdvertiserCopyV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvertiserCopyV2Response>({
      method: "POST",
      path: "/open_api/2/agent/advertiser/copy/",
      queryParams: [

      ],
      body: agentAdvertiserCopyV2Request
    });
  }
}


