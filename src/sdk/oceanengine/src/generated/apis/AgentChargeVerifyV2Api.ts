// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AgentChargeVerifyV2ChargeType, AgentChargeVerifyV2Response } from "../models";


export class AgentChargeVerifyV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentChargeVerifyGet(agentId: number, chargeType: AgentChargeVerifyV2ChargeType): Promise<AgentChargeVerifyV2Response> {
    const response = await this.openApi2AgentChargeVerifyGetWithHttpInfo(agentId, chargeType);
    return response.data;
  }

  async openApi2AgentChargeVerifyGetWithHttpInfo(agentId: number, chargeType: AgentChargeVerifyV2ChargeType): Promise<ApiResponse<AgentChargeVerifyV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2AgentChargeVerifyGet");
    }

    if (chargeType == null) {
      throw new ApiException("Missing the required parameter 'chargeType' when calling openApi2AgentChargeVerifyGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentChargeVerifyV2Response>({
      method: "GET",
      path: "/open_api/2/agent/charge/verify/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "charge_type", value: chargeType }
      ]
    });
  }
}


