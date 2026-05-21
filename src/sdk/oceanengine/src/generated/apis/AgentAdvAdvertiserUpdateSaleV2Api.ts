// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AgentAdvAdvertiserUpdateSaleV2Request, AgentAdvAdvertiserUpdateSaleV2Response } from "../models";


export class AgentAdvAdvertiserUpdateSaleV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvAdvertiserUpdateSalePost(agentAdvAdvertiserUpdateSaleV2Request: AgentAdvAdvertiserUpdateSaleV2Request): Promise<AgentAdvAdvertiserUpdateSaleV2Response> {
    const response = await this.openApi2AgentAdvAdvertiserUpdateSalePostWithHttpInfo(agentAdvAdvertiserUpdateSaleV2Request);
    return response.data;
  }

  async openApi2AgentAdvAdvertiserUpdateSalePostWithHttpInfo(agentAdvAdvertiserUpdateSaleV2Request: AgentAdvAdvertiserUpdateSaleV2Request): Promise<ApiResponse<AgentAdvAdvertiserUpdateSaleV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentAdvAdvertiserUpdateSaleV2Response>({
      method: "POST",
      path: "/open_api/2/agent/adv/advertiser/update_sale/",
      queryParams: [

      ],
      body: agentAdvAdvertiserUpdateSaleV2Request
    });
  }
}


