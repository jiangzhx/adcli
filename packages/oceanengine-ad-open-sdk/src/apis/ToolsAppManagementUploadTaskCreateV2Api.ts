// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementUploadTaskCreateV2Request, ToolsAppManagementUploadTaskCreateV2Response } from "../models";


export interface OpenApi2ToolsAppManagementUploadTaskCreatePostRequest {
  toolsAppManagementUploadTaskCreateV2Request?: ToolsAppManagementUploadTaskCreateV2Request;
}

export class ToolsAppManagementUploadTaskCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementUploadTaskCreatePost(request: OpenApi2ToolsAppManagementUploadTaskCreatePostRequest): Promise<ToolsAppManagementUploadTaskCreateV2Response> {
    const response = await this.openApi2ToolsAppManagementUploadTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementUploadTaskCreatePostWithHttpInfo(request: OpenApi2ToolsAppManagementUploadTaskCreatePostRequest): Promise<ApiResponse<ToolsAppManagementUploadTaskCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementUploadTaskCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/upload_task/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAppManagementUploadTaskCreateV2Request
    });
  }
}


