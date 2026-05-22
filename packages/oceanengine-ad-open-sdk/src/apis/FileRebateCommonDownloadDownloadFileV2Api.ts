// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";


export class FileRebateCommonDownloadDownloadFileV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileRebateCommonDownloadDownloadFileGet(agentId: number, taskId: string): Promise<ArrayBuffer> {
    const response = await this.openApi2FileRebateCommonDownloadDownloadFileGetWithHttpInfo(agentId, taskId);
    return response.data;
  }

  async openApi2FileRebateCommonDownloadDownloadFileGetWithHttpInfo(agentId: number, taskId: string): Promise<ApiResponse<ArrayBuffer>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2FileRebateCommonDownloadDownloadFileGet");
    }

    if (taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2FileRebateCommonDownloadDownloadFileGet");
    }
    return this.apiClient.requestWithHttpInfo<ArrayBuffer>({
      method: "GET",
      path: "/open_api/2/file/rebate/common_download/download_file/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "task_id", value: taskId }
      ]
    });
  }
}


