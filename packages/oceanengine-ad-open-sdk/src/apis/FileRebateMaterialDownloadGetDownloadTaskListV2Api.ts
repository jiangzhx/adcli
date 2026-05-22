// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileRebateMaterialDownloadGetDownloadTaskListV2Response } from "../models";


export interface OpenApi2FileRebateMaterialDownloadGetDownloadTaskListGetRequest {
  agentId: number | string;
  queryId?: string;
}

export class FileRebateMaterialDownloadGetDownloadTaskListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileRebateMaterialDownloadGetDownloadTaskListGet(request: OpenApi2FileRebateMaterialDownloadGetDownloadTaskListGetRequest): Promise<FileRebateMaterialDownloadGetDownloadTaskListV2Response> {
    const response = await this.openApi2FileRebateMaterialDownloadGetDownloadTaskListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileRebateMaterialDownloadGetDownloadTaskListGetWithHttpInfo(request: OpenApi2FileRebateMaterialDownloadGetDownloadTaskListGetRequest): Promise<ApiResponse<FileRebateMaterialDownloadGetDownloadTaskListV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2FileRebateMaterialDownloadGetDownloadTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<FileRebateMaterialDownloadGetDownloadTaskListV2Response>({
      method: "GET",
      path: "/open_api/2/file/rebate/material_download/get_download_task_list/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "query_id", value: request.queryId }
      ]
    });
  }
}


