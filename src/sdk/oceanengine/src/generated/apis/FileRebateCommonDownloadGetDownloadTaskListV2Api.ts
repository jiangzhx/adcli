// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { FileRebateCommonDownloadGetDownloadTaskListV2Response } from "../models";


export class FileRebateCommonDownloadGetDownloadTaskListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileRebateCommonDownloadGetDownloadTaskListGet(agentId: number, queryId: string): Promise<FileRebateCommonDownloadGetDownloadTaskListV2Response> {
    const response = await this.openApi2FileRebateCommonDownloadGetDownloadTaskListGetWithHttpInfo(agentId, queryId);
    return response.data;
  }

  async openApi2FileRebateCommonDownloadGetDownloadTaskListGetWithHttpInfo(agentId: number, queryId: string): Promise<ApiResponse<FileRebateCommonDownloadGetDownloadTaskListV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2FileRebateCommonDownloadGetDownloadTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<FileRebateCommonDownloadGetDownloadTaskListV2Response>({
      method: "GET",
      path: "/open_api/2/file/rebate/common_download/get_download_task_list/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "query_id", value: queryId }
      ]
    });
  }
}


