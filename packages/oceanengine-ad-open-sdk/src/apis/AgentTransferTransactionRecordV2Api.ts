// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentTransferTransactionRecordV2Filtering, AgentTransferTransactionRecordV2Response } from "../models";


export class AgentTransferTransactionRecordV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentTransferTransactionRecordGet(agentId: number, startDate: string, endDate: string, filtering: AgentTransferTransactionRecordV2Filtering, page: number, pageSize: number): Promise<AgentTransferTransactionRecordV2Response> {
    const response = await this.openApi2AgentTransferTransactionRecordGetWithHttpInfo(agentId, startDate, endDate, filtering, page, pageSize);
    return response.data;
  }

  async openApi2AgentTransferTransactionRecordGetWithHttpInfo(agentId: number, startDate: string, endDate: string, filtering: AgentTransferTransactionRecordV2Filtering, page: number, pageSize: number): Promise<ApiResponse<AgentTransferTransactionRecordV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2AgentTransferTransactionRecordGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApi2AgentTransferTransactionRecordGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApi2AgentTransferTransactionRecordGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentTransferTransactionRecordV2Response>({
      method: "GET",
      path: "/open_api/2/agent/transfer/transaction_record/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


