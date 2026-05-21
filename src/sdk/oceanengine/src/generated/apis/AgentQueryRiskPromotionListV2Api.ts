// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AgentQueryRiskPromotionListV2BusinessType, AgentQueryRiskPromotionListV2Filtering, AgentQueryRiskPromotionListV2Response } from "../models";


export class AgentQueryRiskPromotionListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentQueryRiskPromotionListGet(agentId: number, businessType: AgentQueryRiskPromotionListV2BusinessType, startDate: string, endDate: string, cursor: number, count: number, filtering: AgentQueryRiskPromotionListV2Filtering): Promise<AgentQueryRiskPromotionListV2Response> {
    const response = await this.openApi2AgentQueryRiskPromotionListGetWithHttpInfo(agentId, businessType, startDate, endDate, cursor, count, filtering);
    return response.data;
  }

  async openApi2AgentQueryRiskPromotionListGetWithHttpInfo(agentId: number, businessType: AgentQueryRiskPromotionListV2BusinessType, startDate: string, endDate: string, cursor: number, count: number, filtering: AgentQueryRiskPromotionListV2Filtering): Promise<ApiResponse<AgentQueryRiskPromotionListV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2AgentQueryRiskPromotionListGet");
    }

    if (businessType == null) {
      throw new ApiException("Missing the required parameter 'businessType' when calling openApi2AgentQueryRiskPromotionListGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApi2AgentQueryRiskPromotionListGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApi2AgentQueryRiskPromotionListGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentQueryRiskPromotionListV2Response>({
      method: "GET",
      path: "/open_api/2/agent/query/risk_promotion_list/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "business_type", value: businessType },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "cursor", value: cursor },
        { name: "count", value: count },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


