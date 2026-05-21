// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DownloadStatementV2Response } from "../models";


export class DownloadStatementV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DownloadStatementGet(agentId: number, attachId: number, statementId: number): Promise<DownloadStatementV2Response> {
    const response = await this.openApi2DownloadStatementGetWithHttpInfo(agentId, attachId, statementId);
    return response.data;
  }

  async openApi2DownloadStatementGetWithHttpInfo(agentId: number, attachId: number, statementId: number): Promise<ApiResponse<DownloadStatementV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2DownloadStatementGet");
    }

    if (attachId == null) {
      throw new ApiException("Missing the required parameter 'attachId' when calling openApi2DownloadStatementGet");
    }

    if (statementId == null) {
      throw new ApiException("Missing the required parameter 'statementId' when calling openApi2DownloadStatementGet");
    }
    return this.apiClient.requestWithHttpInfo<DownloadStatementV2Response>({
      method: "GET",
      path: "/open_api/2/download/statement/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "attach_id", value: attachId },
        { name: "statement_id", value: statementId }
      ]
    });
  }
}


