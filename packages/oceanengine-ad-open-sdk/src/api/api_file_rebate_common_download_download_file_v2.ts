// Generated from oceanengine/ad_open_sdk_go api/api_file_rebate_common_download_download_file_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";


export interface FileRebateCommonDownloadDownloadFileV2ApiOpenApi2FileRebateCommonDownloadDownloadFileGetRequest {
  agentId: number | string;
  taskId: string;
}

export class FileRebateCommonDownloadDownloadFileV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileRebateCommonDownloadDownloadFileGet(request: FileRebateCommonDownloadDownloadFileV2ApiOpenApi2FileRebateCommonDownloadDownloadFileGetRequest): Promise<ArrayBuffer> {
    const response = await this.openApi2FileRebateCommonDownloadDownloadFileGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileRebateCommonDownloadDownloadFileGetWithHttpInfo(request: FileRebateCommonDownloadDownloadFileV2ApiOpenApi2FileRebateCommonDownloadDownloadFileGetRequest): Promise<ApiResponse<ArrayBuffer>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2FileRebateCommonDownloadDownloadFileGet");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2FileRebateCommonDownloadDownloadFileGet");
    }
    return this.apiClient.requestWithHttpInfo<ArrayBuffer>({
      method: "GET",
      path: "/open_api/2/file/rebate/common_download/download_file/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "task_id", value: request.taskId }
      ],
      responseType: "arrayBuffer"
    });
  }
}


