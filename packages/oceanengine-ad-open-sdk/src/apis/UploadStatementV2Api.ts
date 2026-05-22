// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UploadStatementV2Response } from "../models";


export class UploadStatementV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2UploadStatementPost(agentId: number, _file: File): Promise<UploadStatementV2Response> {
    const response = await this.openApi2UploadStatementPostWithHttpInfo(agentId, _file);
    return response.data;
  }

  async openApi2UploadStatementPostWithHttpInfo(agentId: number, _file: File): Promise<ApiResponse<UploadStatementV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2UploadStatementPost");
    }

    if (_file == null) {
      throw new ApiException("Missing the required parameter '_file' when calling openApi2UploadStatementPost");
    }
    return this.apiClient.requestWithHttpInfo<UploadStatementV2Response>({
      method: "POST",
      path: "/open_api/2/upload/statement/",
      queryParams: [

      ]
    });
  }
}


