// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileRebateCommonDownloadCreateTaskV2Request, FileRebateCommonDownloadCreateTaskV2Response } from "../models";


export interface OpenApi2FileRebateCommonDownloadCreateTaskPostRequest {
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

  async openApi2FileRebateCommonDownloadCreateTaskPost(request: OpenApi2FileRebateCommonDownloadCreateTaskPostRequest): Promise<FileRebateCommonDownloadCreateTaskV2Response> {
    const response = await this.openApi2FileRebateCommonDownloadCreateTaskPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileRebateCommonDownloadCreateTaskPostWithHttpInfo(request: OpenApi2FileRebateCommonDownloadCreateTaskPostRequest): Promise<ApiResponse<FileRebateCommonDownloadCreateTaskV2Response>> {

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


