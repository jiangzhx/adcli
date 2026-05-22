// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileRebateMaterialDownloadCreateTaskV2Request, FileRebateMaterialDownloadCreateTaskV2Response } from "../models";


export interface OpenApi2FileRebateMaterialDownloadCreateTaskPostRequest {
  fileRebateMaterialDownloadCreateTaskV2Request?: FileRebateMaterialDownloadCreateTaskV2Request;
}

export class FileRebateMaterialDownloadCreateTaskV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileRebateMaterialDownloadCreateTaskPost(request: OpenApi2FileRebateMaterialDownloadCreateTaskPostRequest): Promise<FileRebateMaterialDownloadCreateTaskV2Response> {
    const response = await this.openApi2FileRebateMaterialDownloadCreateTaskPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileRebateMaterialDownloadCreateTaskPostWithHttpInfo(request: OpenApi2FileRebateMaterialDownloadCreateTaskPostRequest): Promise<ApiResponse<FileRebateMaterialDownloadCreateTaskV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileRebateMaterialDownloadCreateTaskV2Response>({
      method: "POST",
      path: "/open_api/2/file/rebate/material_download/create_task/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.fileRebateMaterialDownloadCreateTaskV2Request
    });
  }
}


