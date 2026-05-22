// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentAdvertiserUpdateV2Request, AgentAdvertiserUpdateV2Response } from "../models";


export interface OpenApi2AgentAdvertiserUpdatePostRequest {
  agentAdvertiserUpdateV2Request?: AgentAdvertiserUpdateV2Request;
}

export class AgentAdvertiserUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvertiserUpdatePost(request: OpenApi2AgentAdvertiserUpdatePostRequest): Promise<AgentAdvertiserUpdateV2Response> {
    const response = await this.openApi2AgentAdvertiserUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvertiserUpdatePostWithHttpInfo(request: OpenApi2AgentAdvertiserUpdatePostRequest): Promise<ApiResponse<AgentAdvertiserUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvertiserUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/agent/advertiser/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.agentAdvertiserUpdateV2Request
    });
  }
}


