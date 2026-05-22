// Generated from oceanengine/ad_open_sdk_go api/api_file_rebate_common_download_create_task_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileRebateCommonDownloadCreateTaskV2Request, FileRebateCommonDownloadCreateTaskV2Response } from "../models/index";


export interface FileRebateCommonDownloadCreateTaskV2ApiOpenApi2FileRebateCommonDownloadCreateTaskPostRequest {
  fileRebateCommonDownloadCreateTaskV2Request?: FileRebateCommonDownloadCreateTaskV2Request;
}

export class FileRebateCommonDownloadCreateTaskV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileRebateCommonDownloadCreateTaskPost(request: FileRebateCommonDownloadCreateTaskV2ApiOpenApi2FileRebateCommonDownloadCreateTaskPostRequest): Promise<FileRebateCommonDownloadCreateTaskV2Response> {
    const response = await this.openApi2FileRebateCommonDownloadCreateTaskPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileRebateCommonDownloadCreateTaskPostWithHttpInfo(request: FileRebateCommonDownloadCreateTaskV2ApiOpenApi2FileRebateCommonDownloadCreateTaskPostRequest): Promise<ApiResponse<FileRebateCommonDownloadCreateTaskV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileRebateCommonDownloadCreateTaskV2Response>({
      method: "POST",
      path: "/open_api/2/file/rebate/common_download/create_task/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.fileRebateCommonDownloadCreateTaskV2Request
    });
  }
}


