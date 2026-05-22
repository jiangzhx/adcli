// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileRebateRebateDownloadCreateTaskV2Request, FileRebateRebateDownloadCreateTaskV2Response } from "../models";


export interface OpenApi2FileRebateRebateDownloadCreateTaskPostRequest {
  fileRebateRebateDownloadCreateTaskV2Request?: FileRebateRebateDownloadCreateTaskV2Request;
}

export class FileRebateRebateDownloadCreateTaskV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileRebateRebateDownloadCreateTaskPost(request: OpenApi2FileRebateRebateDownloadCreateTaskPostRequest): Promise<FileRebateRebateDownloadCreateTaskV2Response> {
    const response = await this.openApi2FileRebateRebateDownloadCreateTaskPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileRebateRebateDownloadCreateTaskPostWithHttpInfo(request: OpenApi2FileRebateRebateDownloadCreateTaskPostRequest): Promise<ApiResponse<FileRebateRebateDownloadCreateTaskV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileRebateRebateDownloadCreateTaskV2Response>({
      method: "POST",
      path: "/open_api/2/file/rebate/rebate_download/create_task/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.fileRebateRebateDownloadCreateTaskV2Request
    });
  }
}


