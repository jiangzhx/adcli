// Generated from oceanengine/ad_open_sdk_go api/api_agent_info_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentInfoV2Fields, AgentInfoV2Response } from "../models/index";


export interface AgentInfoV2ApiOpenApi2AgentInfoGetRequest {
  advertiserIds?: number | string[];
  fields?: AgentInfoV2Fields[];
}

export class AgentInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentInfoGet(request: AgentInfoV2ApiOpenApi2AgentInfoGetRequest): Promise<AgentInfoV2Response> {
    const response = await this.openApi2AgentInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentInfoGetWithHttpInfo(request: AgentInfoV2ApiOpenApi2AgentInfoGetRequest): Promise<ApiResponse<AgentInfoV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentInfoV2Response>({
      method: "GET",
      path: "/open_api/2/agent/info/",
      queryParams: [
        { name: "advertiser_ids", value: request.advertiserIds },
        { name: "fields", value: request.fields }
      ]
    });
  }
}


