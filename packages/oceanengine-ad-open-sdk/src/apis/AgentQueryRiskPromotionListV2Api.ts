// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentQueryRiskPromotionListV2BusinessType, AgentQueryRiskPromotionListV2Filtering, AgentQueryRiskPromotionListV2Response } from "../models";


export interface OpenApi2AgentQueryRiskPromotionListGetRequest {
  agentId: number | string;
  businessType: AgentQueryRiskPromotionListV2BusinessType;
  startDate: string;
  endDate: string;
  cursor?: number;
  count?: number;
  filtering?: AgentQueryRiskPromotionListV2Filtering;
}

export class AgentQueryRiskPromotionListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentQueryRiskPromotionListGet(request: OpenApi2AgentQueryRiskPromotionListGetRequest): Promise<AgentQueryRiskPromotionListV2Response> {
    const response = await this.openApi2AgentQueryRiskPromotionListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentQueryRiskPromotionListGetWithHttpInfo(request: OpenApi2AgentQueryRiskPromotionListGetRequest): Promise<ApiResponse<AgentQueryRiskPromotionListV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2AgentQueryRiskPromotionListGet");
    }

    if (request.businessType == null) {
      throw new ApiException("Missing the required parameter 'businessType' when calling openApi2AgentQueryRiskPromotionListGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApi2AgentQueryRiskPromotionListGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApi2AgentQueryRiskPromotionListGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentQueryRiskPromotionListV2Response>({
      method: "GET",
      path: "/open_api/2/agent/query/risk_promotion_list/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "business_type", value: request.businessType },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


