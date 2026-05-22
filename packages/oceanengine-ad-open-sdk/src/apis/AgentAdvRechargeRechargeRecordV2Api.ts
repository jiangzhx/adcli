// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentAdvRechargeRechargeRecordV2Filtering, AgentAdvRechargeRechargeRecordV2Response } from "../models";


export interface OpenApi2AgentAdvRechargeRechargeRecordGetRequest {
  agentIds: number[];
  startTime: string;
  endTime: string;
  page: number;
  pageSize: number;
  filtering?: AgentAdvRechargeRechargeRecordV2Filtering;
  agentCompanyId?: number;
}

export class AgentAdvRechargeRechargeRecordV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvRechargeRechargeRecordGet(request: OpenApi2AgentAdvRechargeRechargeRecordGetRequest): Promise<AgentAdvRechargeRechargeRecordV2Response> {
    const response = await this.openApi2AgentAdvRechargeRechargeRecordGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentAdvRechargeRechargeRecordGetWithHttpInfo(request: OpenApi2AgentAdvRechargeRechargeRecordGetRequest): Promise<ApiResponse<AgentAdvRechargeRechargeRecordV2Response>> {
    if (request.agentIds == null) {
      throw new ApiException("Missing the required parameter 'agentIds' when calling openApi2AgentAdvRechargeRechargeRecordGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApi2AgentAdvRechargeRechargeRecordGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApi2AgentAdvRechargeRechargeRecordGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2AgentAdvRechargeRechargeRecordGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2AgentAdvRechargeRechargeRecordGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentAdvRechargeRechargeRecordV2Response>({
      method: "GET",
      path: "/open_api/2/agent/adv/recharge/recharge_record/",
      queryParams: [
        { name: "agent_ids", value: request.agentIds, collectionFormat: "csv" },
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


