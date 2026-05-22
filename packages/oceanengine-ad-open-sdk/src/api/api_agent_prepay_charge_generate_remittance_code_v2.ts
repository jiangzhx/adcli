// Generated from oceanengine/ad_open_sdk_go api/api_agent_prepay_charge_generate_remittance_code_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentPrepayChargeGenerateRemittanceCodeV2Request, AgentPrepayChargeGenerateRemittanceCodeV2Response } from "../models/index";


export interface AgentPrepayChargeGenerateRemittanceCodeV2ApiOpenApi2AgentPrepayChargeGenerateRemittanceCodePostRequest {
  agentPrepayChargeGenerateRemittanceCodeV2Request?: AgentPrepayChargeGenerateRemittanceCodeV2Request;
}

export class AgentPrepayChargeGenerateRemittanceCodeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentPrepayChargeGenerateRemittanceCodePost(request: AgentPrepayChargeGenerateRemittanceCodeV2ApiOpenApi2AgentPrepayChargeGenerateRemittanceCodePostRequest): Promise<AgentPrepayChargeGenerateRemittanceCodeV2Response> {
    const response = await this.openApi2AgentPrepayChargeGenerateRemittanceCodePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentPrepayChargeGenerateRemittanceCodePostWithHttpInfo(request: AgentPrepayChargeGenerateRemittanceCodeV2ApiOpenApi2AgentPrepayChargeGenerateRemittanceCodePostRequest): Promise<ApiResponse<AgentPrepayChargeGenerateRemittanceCodeV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentPrepayChargeGenerateRemittanceCodeV2Response>({
      method: "POST",
      path: "/open_api/2/agent/prepay_charge/generate_remittance_code/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.agentPrepayChargeGenerateRemittanceCodeV2Request
    });
  }
}


