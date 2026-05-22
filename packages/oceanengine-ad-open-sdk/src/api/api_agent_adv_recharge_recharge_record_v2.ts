// Generated from oceanengine/ad_open_sdk_go api/api_agent_adv_recharge_recharge_record_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentAdvRechargeRechargeRecordV2Filtering, AgentAdvRechargeRechargeRecordV2Response } from "../models/index";


export interface AgentAdvRechargeRechargeRecordV2ApiOpenApi2AgentAdvRechargeRechargeRecordGetRequest {
  agentIds: (number | string)[];
  startTime: string;
  endTime: string;
  page: number;
  pageSize: number;
  filtering?: AgentAdvRechargeRechargeRecordV2Filtering;
  agentCompanyId?: number | string;
}

export class AgentAdvRechargeRechargeRecordV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvRechargeRechargeRecordGet(request: AgentAdvRechargeRechargeRecordV2ApiOpenApi2AgentAdvRechargeRechargeRecordGetRequest): Promise<AgentAdvRechargeRechargeRecordV2Response> {
    const response = await this.openApi2AgentAdvRechargeRechargeRecordGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvRechargeRechargeRecordGetWithHttpInfo(request: AgentAdvRechargeRechargeRecordV2ApiOpenApi2AgentAdvRechargeRechargeRecordGetRequest): Promise<ApiResponse<AgentAdvRechargeRechargeRecordV2Response>> {
    if (request.agentIds == null) {
      throw new ApiException("agentIds is required and must be specified");
    }

    if (request.agentIds != null && request.agentIds.length < 1) {
      throw new ApiException("agentIds must have at least 1 elements");
    }

    if (request.agentIds != null && request.agentIds.length > 20) {
      throw new ApiException("agentIds must have less than 20 elements");
    }

    if (request.startTime == null) {
      throw new ApiException("startTime is required and must be specified");
    }

    if (request.endTime == null) {
      throw new ApiException("endTime is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.pageSize == null) {
      throw new ApiException("pageSize is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<AgentAdvRechargeRechargeRecordV2Response>({
      method: "GET",
      path: "/open_api/2/agent/adv/recharge/recharge_record/",
      queryParams: [
        { name: "agent_ids", value: request.agentIds },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "agent_company_id", value: request.agentCompanyId }
      ]
    });
  }
}


