// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentPrepayChargeGenerateRemittanceCodeV2Request, AgentPrepayChargeGenerateRemittanceCodeV2Response } from "../models";


export class AgentPrepayChargeGenerateRemittanceCodeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentPrepayChargeGenerateRemittanceCodePost(request: AgentPrepayChargeGenerateRemittanceCodeV2Request): Promise<AgentPrepayChargeGenerateRemittanceCodeV2Response> {
    const response = await this.openApi2AgentPrepayChargeGenerateRemittanceCodePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentPrepayChargeGenerateRemittanceCodePostWithHttpInfo(request: AgentPrepayChargeGenerateRemittanceCodeV2Request): Promise<ApiResponse<AgentPrepayChargeGenerateRemittanceCodeV2Response>> {
    return this.apiClient.requestWithHttpInfo<AgentPrepayChargeGenerateRemittanceCodeV2Response>({
      method: "POST",
      path: "/open_api/2/agent/prepay_charge/generate_remittance_code/",
      queryParams: [

      ],
      body: request
    });
  }
}


