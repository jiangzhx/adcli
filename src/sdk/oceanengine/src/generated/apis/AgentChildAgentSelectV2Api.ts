// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AgentChildAgentSelectV2Response } from "../models";


export class AgentChildAgentSelectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentChildAgentSelectGet(advertiserId: number, page: number, pageSize: number): Promise<AgentChildAgentSelectV2Response> {
    const response = await this.openApi2AgentChildAgentSelectGetWithHttpInfo(advertiserId, page, pageSize);
    return response.data;
  }

  async openApi2AgentChildAgentSelectGetWithHttpInfo(advertiserId: number, page: number, pageSize: number): Promise<ApiResponse<AgentChildAgentSelectV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AgentChildAgentSelectGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentChildAgentSelectV2Response>({
      method: "GET",
      path: "/open_api/2/agent/child_agent/select/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


