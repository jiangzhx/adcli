// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DownloadStatementEsignFileV2Response } from "../models";


export class DownloadStatementEsignFileV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DownloadStatementEsignFileGet(agentId: number, statementId: number): Promise<DownloadStatementEsignFileV2Response> {
    const response = await this.openApi2DownloadStatementEsignFileGetWithHttpInfo(agentId, statementId);
    return response.data;
  }

  async openApi2DownloadStatementEsignFileGetWithHttpInfo(agentId: number, statementId: number): Promise<ApiResponse<DownloadStatementEsignFileV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2DownloadStatementEsignFileGet");
    }

    if (statementId == null) {
      throw new ApiException("Missing the required parameter 'statementId' when calling openApi2DownloadStatementEsignFileGet");
    }
    return this.apiClient.requestWithHttpInfo<DownloadStatementEsignFileV2Response>({
      method: "GET",
      path: "/open_api/2/download/statement/esign_file/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "statement_id", value: statementId }
      ]
    });
  }
}


