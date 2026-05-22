// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentCreditChargeSubmitV2Request, AgentCreditChargeSubmitV2Response } from "../models";


export class AgentCreditChargeSubmitV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentCreditChargeSubmitPost(agentCreditChargeSubmitV2Request: AgentCreditChargeSubmitV2Request): Promise<AgentCreditChargeSubmitV2Response> {
    const response = await this.openApi2AgentCreditChargeSubmitPostWithHttpInfo(agentCreditChargeSubmitV2Request);
    return response.data;
  }

  async openApi2AgentCreditChargeSubmitPostWithHttpInfo(agentCreditChargeSubmitV2Request: AgentCreditChargeSubmitV2Request): Promise<ApiResponse<AgentCreditChargeSubmitV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentCreditChargeSubmitV2Response>({
      method: "POST",
      path: "/open_api/2/agent/credit_charge/submit/",
      queryParams: [

      ],
      body: agentCreditChargeSubmitV2Request
    });
  }
}


