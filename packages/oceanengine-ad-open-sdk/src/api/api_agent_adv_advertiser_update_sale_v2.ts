// Generated from oceanengine/ad_open_sdk_go api/api_agent_adv_advertiser_update_sale_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentAdvAdvertiserUpdateSaleV2Request, AgentAdvAdvertiserUpdateSaleV2Response } from "../models/index";


export interface AgentAdvAdvertiserUpdateSaleV2ApiOpenApi2AgentAdvAdvertiserUpdateSalePostRequest {
  agentAdvAdvertiserUpdateSaleV2Request?: AgentAdvAdvertiserUpdateSaleV2Request;
}

export class AgentAdvAdvertiserUpdateSaleV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvAdvertiserUpdateSalePost(request: AgentAdvAdvertiserUpdateSaleV2ApiOpenApi2AgentAdvAdvertiserUpdateSalePostRequest): Promise<AgentAdvAdvertiserUpdateSaleV2Response> {
    const response = await this.openApi2AgentAdvAdvertiserUpdateSalePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvAdvertiserUpdateSalePostWithHttpInfo(request: AgentAdvAdvertiserUpdateSaleV2ApiOpenApi2AgentAdvAdvertiserUpdateSalePostRequest): Promise<ApiResponse<AgentAdvAdvertiserUpdateSaleV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvAdvertiserUpdateSaleV2Response>({
      method: "POST",
      path: "/open_api/2/agent/adv/advertiser/update_sale/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.agentAdvAdvertiserUpdateSaleV2Request
    });
  }
}


