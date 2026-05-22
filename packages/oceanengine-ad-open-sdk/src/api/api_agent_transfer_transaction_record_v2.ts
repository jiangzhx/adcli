// Generated from oceanengine/ad_open_sdk_go api/api_agent_transfer_transaction_record_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgentTransferTransactionRecordV2Filtering, AgentTransferTransactionRecordV2Response } from "../models/index";


export interface AgentTransferTransactionRecordV2ApiOpenApi2AgentTransferTransactionRecordGetRequest {
  agentId: number | string;
  startDate: string;
  endDate: string;
  filtering?: AgentTransferTransactionRecordV2Filtering;
  page?: number;
  pageSize?: number;
}

export class AgentTransferTransactionRecordV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentTransferTransactionRecordGet(request: AgentTransferTransactionRecordV2ApiOpenApi2AgentTransferTransactionRecordGetRequest): Promise<AgentTransferTransactionRecordV2Response> {
    const response = await this.openApi2AgentTransferTransactionRecordGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentTransferTransactionRecordGetWithHttpInfo(request: AgentTransferTransactionRecordV2ApiOpenApi2AgentTransferTransactionRecordGetRequest): Promise<ApiResponse<AgentTransferTransactionRecordV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2AgentTransferTransactionRecordGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApi2AgentTransferTransactionRecordGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApi2AgentTransferTransactionRecordGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentTransferTransactionRecordV2Response>({
      method: "GET",
      path: "/open_api/2/agent/transfer/transaction_record/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


