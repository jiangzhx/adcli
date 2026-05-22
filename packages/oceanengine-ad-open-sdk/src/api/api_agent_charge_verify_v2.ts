// Generated from oceanengine/ad_open_sdk_go api/api_agent_charge_verify_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentChargeVerifyV2ChargeType, AgentChargeVerifyV2Response } from "../models/index";


export interface AgentChargeVerifyV2ApiOpenApi2AgentChargeVerifyGetRequest {
  agentId: number | string;
  chargeType: AgentChargeVerifyV2ChargeType;
}

export class AgentChargeVerifyV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentChargeVerifyGet(request: AgentChargeVerifyV2ApiOpenApi2AgentChargeVerifyGetRequest): Promise<AgentChargeVerifyV2Response> {
    const response = await this.openApi2AgentChargeVerifyGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentChargeVerifyGetWithHttpInfo(request: AgentChargeVerifyV2ApiOpenApi2AgentChargeVerifyGetRequest): Promise<ApiResponse<AgentChargeVerifyV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2AgentChargeVerifyGet");
    }

    if (request.chargeType == null) {
      throw new ApiException("Missing the required parameter 'chargeType' when calling openApi2AgentChargeVerifyGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentChargeVerifyV2Response>({
      method: "GET",
      path: "/open_api/2/agent/charge/verify/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "charge_type", value: request.chargeType }
      ]
    });
  }
}


