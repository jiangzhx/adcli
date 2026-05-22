// Generated from oceanengine/ad_open_sdk_go api/api_file_rebate_material_download_download_file_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";


export interface FileRebateMaterialDownloadDownloadFileV2ApiOpenApi2FileRebateMaterialDownloadDownloadFileGetRequest {
  agentId: number | string;
  taskId: string;
}

export class FileRebateMaterialDownloadDownloadFileV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileRebateMaterialDownloadDownloadFileGet(request: FileRebateMaterialDownloadDownloadFileV2ApiOpenApi2FileRebateMaterialDownloadDownloadFileGetRequest): Promise<ArrayBuffer> {
    const response = await this.openApi2FileRebateMaterialDownloadDownloadFileGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileRebateMaterialDownloadDownloadFileGetWithHttpInfo(request: FileRebateMaterialDownloadDownloadFileV2ApiOpenApi2FileRebateMaterialDownloadDownloadFileGetRequest): Promise<ApiResponse<ArrayBuffer>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2FileRebateMaterialDownloadDownloadFileGet");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2FileRebateMaterialDownloadDownloadFileGet");
    }
    return this.apiClient.requestWithHttpInfo<ArrayBuffer>({
      method: "GET",
      path: "/open_api/2/file/rebate/material_download/download_file/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "task_id", value: request.taskId }
      ],
      responseType: "arrayBuffer"
    });
  }
}


