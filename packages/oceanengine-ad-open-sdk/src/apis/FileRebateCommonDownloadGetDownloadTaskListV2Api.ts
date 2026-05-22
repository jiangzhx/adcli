// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileRebateCommonDownloadGetDownloadTaskListV2Response } from "../models";


export interface OpenApi2FileRebateCommonDownloadGetDownloadTaskListGetRequest {
  agentId: number;
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

  async openApi2FileRebateCommonDownloadGetDownloadTaskListGet(request: OpenApi2FileRebateCommonDownloadGetDownloadTaskListGetRequest): Promise<FileRebateCommonDownloadGetDownloadTaskListV2Response> {
    const response = await this.openApi2FileRebateCommonDownloadGetDownloadTaskListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileRebateCommonDownloadGetDownloadTaskListGetWithHttpInfo(request: OpenApi2FileRebateCommonDownloadGetDownloadTaskListGetRequest): Promise<ApiResponse<FileRebateCommonDownloadGetDownloadTaskListV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2FileRebateCommonDownloadGetDownloadTaskListGet");
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


