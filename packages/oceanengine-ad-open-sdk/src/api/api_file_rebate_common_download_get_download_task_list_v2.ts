// Generated from oceanengine/ad_open_sdk_go api/api_file_rebate_common_download_get_download_task_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileRebateCommonDownloadGetDownloadTaskListV2Response } from "../models/index";


export interface FileRebateCommonDownloadGetDownloadTaskListV2ApiOpenApi2FileRebateCommonDownloadGetDownloadTaskListGetRequest {
  agentId: number | string;
  queryId?: string;
}

export class FileRebateCommonDownloadGetDownloadTaskListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileRebateCommonDownloadGetDownloadTaskListGet(request: FileRebateCommonDownloadGetDownloadTaskListV2ApiOpenApi2FileRebateCommonDownloadGetDownloadTaskListGetRequest): Promise<FileRebateCommonDownloadGetDownloadTaskListV2Response> {
    const response = await this.openApi2FileRebateCommonDownloadGetDownloadTaskListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileRebateCommonDownloadGetDownloadTaskListGetWithHttpInfo(request: FileRebateCommonDownloadGetDownloadTaskListV2ApiOpenApi2FileRebateCommonDownloadGetDownloadTaskListGetRequest): Promise<ApiResponse<FileRebateCommonDownloadGetDownloadTaskListV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("agentId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<FileRebateCommonDownloadGetDownloadTaskListV2Response>({
      method: "GET",
      path: "/open_api/2/file/rebate/common_download/get_download_task_list/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "query_id", value: request.queryId }
      ]
    });
  }
}


