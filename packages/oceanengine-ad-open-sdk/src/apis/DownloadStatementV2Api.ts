// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DownloadStatementV2Response } from "../models";


export interface OpenApi2DownloadStatementGetRequest {
  agentId: number;
  attachId: number;
  statementId: number;
}

export class DownloadStatementV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DownloadStatementGet(request: OpenApi2DownloadStatementGetRequest): Promise<DownloadStatementV2Response> {
    const response = await this.openApi2DownloadStatementGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DownloadStatementGetWithHttpInfo(request: OpenApi2DownloadStatementGetRequest): Promise<ApiResponse<DownloadStatementV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2DownloadStatementGet");
    }

    if (request.attachId == null) {
      throw new ApiException("Missing the required parameter 'attachId' when calling openApi2DownloadStatementGet");
    }

    if (request.statementId == null) {
      throw new ApiException("Missing the required parameter 'statementId' when calling openApi2DownloadStatementGet");
    }
    return this.apiClient.requestWithHttpInfo<DownloadStatementV2Response>({
      method: "GET",
      path: "/open_api/2/download/statement/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "attach_id", value: request.attachId },
        { name: "statement_id", value: request.statementId }
      ]
    });
  }
}


