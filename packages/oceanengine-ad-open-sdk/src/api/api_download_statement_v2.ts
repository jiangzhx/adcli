// Generated from oceanengine/ad_open_sdk_go api/api_download_statement_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DownloadStatementV2Response } from "../models/index";


export interface DownloadStatementV2ApiOpenApi2DownloadStatementGetRequest {
  agentId: number | string;
  attachId: number | string;
  statementId: number | string;
}

export class DownloadStatementV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DownloadStatementGet(request: DownloadStatementV2ApiOpenApi2DownloadStatementGetRequest): Promise<DownloadStatementV2Response> {
    const response = await this.openApi2DownloadStatementGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DownloadStatementGetWithHttpInfo(request: DownloadStatementV2ApiOpenApi2DownloadStatementGetRequest): Promise<ApiResponse<DownloadStatementV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("agentId is required and must be specified");
    }

    if (request.attachId == null) {
      throw new ApiException("attachId is required and must be specified");
    }

    if (request.statementId == null) {
      throw new ApiException("statementId is required and must be specified");
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


