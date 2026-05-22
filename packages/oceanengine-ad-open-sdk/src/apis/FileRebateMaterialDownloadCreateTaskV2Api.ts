// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileRebateMaterialDownloadCreateTaskV2Request, FileRebateMaterialDownloadCreateTaskV2Response } from "../models";


export class FileRebateMaterialDownloadCreateTaskV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileRebateMaterialDownloadCreateTaskPost(fileRebateMaterialDownloadCreateTaskV2Request: FileRebateMaterialDownloadCreateTaskV2Request): Promise<FileRebateMaterialDownloadCreateTaskV2Response> {
    const response = await this.openApi2FileRebateMaterialDownloadCreateTaskPostWithHttpInfo(fileRebateMaterialDownloadCreateTaskV2Request);
    return response.data;
  }

  async openApi2FileRebateMaterialDownloadCreateTaskPostWithHttpInfo(fileRebateMaterialDownloadCreateTaskV2Request: FileRebateMaterialDownloadCreateTaskV2Request): Promise<ApiResponse<FileRebateMaterialDownloadCreateTaskV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileRebateMaterialDownloadCreateTaskV2Response>({
      method: "POST",
      path: "/open_api/2/file/rebate/material_download/create_task/",
      queryParams: [

      ],
      body: fileRebateMaterialDownloadCreateTaskV2Request
    });
  }
}


