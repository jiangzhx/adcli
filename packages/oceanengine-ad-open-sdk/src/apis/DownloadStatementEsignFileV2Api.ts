// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DownloadStatementEsignFileV2Response } from "../models";


export interface OpenApi2DownloadStatementEsignFileGetRequest {
  agentId: number | string;
  statementId: number | string;
}

export class DownloadStatementEsignFileV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DownloadStatementEsignFileGet(request: OpenApi2DownloadStatementEsignFileGetRequest): Promise<DownloadStatementEsignFileV2Response> {
    const response = await this.openApi2DownloadStatementEsignFileGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DownloadStatementEsignFileGetWithHttpInfo(request: OpenApi2DownloadStatementEsignFileGetRequest): Promise<ApiResponse<DownloadStatementEsignFileV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2DownloadStatementEsignFileGet");
    }

    if (request.statementId == null) {
      throw new ApiException("Missing the required parameter 'statementId' when calling openApi2DownloadStatementEsignFileGet");
    }
    return this.apiClient.requestWithHttpInfo<DownloadStatementEsignFileV2Response>({
      method: "GET",
      path: "/open_api/2/download/statement/esign_file/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "statement_id", value: request.statementId }
      ]
    });
  }
}


