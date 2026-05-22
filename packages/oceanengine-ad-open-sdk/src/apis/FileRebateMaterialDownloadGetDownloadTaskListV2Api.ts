// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileRebateMaterialDownloadGetDownloadTaskListV2Response } from "../models";


export class FileRebateMaterialDownloadGetDownloadTaskListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileRebateMaterialDownloadGetDownloadTaskListGet(agentId: number, queryId: string): Promise<FileRebateMaterialDownloadGetDownloadTaskListV2Response> {
    const response = await this.openApi2FileRebateMaterialDownloadGetDownloadTaskListGetWithHttpInfo(agentId, queryId);
    return response.data;
  }

  async openApi2FileRebateMaterialDownloadGetDownloadTaskListGetWithHttpInfo(agentId: number, queryId: string): Promise<ApiResponse<FileRebateMaterialDownloadGetDownloadTaskListV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2FileRebateMaterialDownloadGetDownloadTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<FileRebateMaterialDownloadGetDownloadTaskListV2Response>({
      method: "GET",
      path: "/open_api/2/file/rebate/material_download/get_download_task_list/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "query_id", value: queryId }
      ]
    });
  }
}


