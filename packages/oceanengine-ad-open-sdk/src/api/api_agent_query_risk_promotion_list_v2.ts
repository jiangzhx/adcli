// Generated from oceanengine/ad_open_sdk_go api/api_agent_query_risk_promotion_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentQueryRiskPromotionListV2BusinessType, AgentQueryRiskPromotionListV2Filtering, AgentQueryRiskPromotionListV2Response } from "../models/index";


export interface AgentQueryRiskPromotionListV2ApiOpenApi2AgentQueryRiskPromotionListGetRequest {
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

  async openApi2AgentQueryRiskPromotionListGet(request: AgentQueryRiskPromotionListV2ApiOpenApi2AgentQueryRiskPromotionListGetRequest): Promise<AgentQueryRiskPromotionListV2Response> {
    const response = await this.openApi2AgentQueryRiskPromotionListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentQueryRiskPromotionListGetWithHttpInfo(request: AgentQueryRiskPromotionListV2ApiOpenApi2AgentQueryRiskPromotionListGetRequest): Promise<ApiResponse<AgentQueryRiskPromotionListV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("agentId is required and must be specified");
    }

    if (request.businessType == null) {
      throw new ApiException("businessType is required and must be specified");
    }

    if (request.startDate == null) {
      throw new ApiException("startDate is required and must be specified");
    }

    if (request.endDate == null) {
      throw new ApiException("endDate is required and must be specified");
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


