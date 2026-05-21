// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { FileVideoMaterialClearTaskCreateV2Request, FileVideoMaterialClearTaskCreateV2Response } from "../models";


export class FileVideoMaterialClearTaskCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoMaterialClearTaskCreatePost(fileVideoMaterialClearTaskCreateV2Request: FileVideoMaterialClearTaskCreateV2Request): Promise<FileVideoMaterialClearTaskCreateV2Response> {
    const response = await this.openApi2FileVideoMaterialClearTaskCreatePostWithHttpInfo(fileVideoMaterialClearTaskCreateV2Request);
    return response.data;
  }

  async openApi2FileVideoMaterialClearTaskCreatePostWithHttpInfo(fileVideoMaterialClearTaskCreateV2Request: FileVideoMaterialClearTaskCreateV2Request): Promise<ApiResponse<FileVideoMaterialClearTaskCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileVideoMaterialClearTaskCreateV2Response>({
      method: "POST",
      path: "/open_api/2/file/video/material/clear_task/create/",
      queryParams: [

      ],
      body: fileVideoMaterialClearTaskCreateV2Request
    });
  }
}


