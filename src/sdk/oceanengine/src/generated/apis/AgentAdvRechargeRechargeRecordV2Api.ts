// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AgentAdvRechargeRechargeRecordV2Filtering, AgentAdvRechargeRechargeRecordV2Response } from "../models";


export class AgentAdvRechargeRechargeRecordV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvRechargeRechargeRecordGet(agentIds: number[], startTime: string, endTime: string, page: number, pageSize: number, filtering: AgentAdvRechargeRechargeRecordV2Filtering, agentCompanyId: number): Promise<AgentAdvRechargeRechargeRecordV2Response> {
    const response = await this.openApi2AgentAdvRechargeRechargeRecordGetWithHttpInfo(agentIds, startTime, endTime, page, pageSize, filtering, agentCompanyId);
    return response.data;
  }

  async openApi2AgentAdvRechargeRechargeRecordGetWithHttpInfo(agentIds: number[], startTime: string, endTime: string, page: number, pageSize: number, filtering: AgentAdvRechargeRechargeRecordV2Filtering, agentCompanyId: number): Promise<ApiResponse<AgentAdvRechargeRechargeRecordV2Response>> {
    if (agentIds == null) {
      throw new ApiException("Missing the required parameter 'agentIds' when calling openApi2AgentAdvRechargeRechargeRecordGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApi2AgentAdvRechargeRechargeRecordGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApi2AgentAdvRechargeRechargeRecordGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2AgentAdvRechargeRechargeRecordGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2AgentAdvRechargeRechargeRecordGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentAdvRechargeRechargeRecordV2Response>({
      method: "GET",
      path: "/open_api/2/agent/adv/recharge/recharge_record/",
      queryParams: [
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "agent_company_id", value: agentCompanyId },
        { name: "agent_ids", value: agentIds, collectionFormat: "csv" }
      ]
    });
  }
}


