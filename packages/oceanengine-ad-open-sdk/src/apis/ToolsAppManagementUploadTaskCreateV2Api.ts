// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementUploadTaskCreateV2Request, ToolsAppManagementUploadTaskCreateV2Response } from "../models";


export class ToolsAppManagementUploadTaskCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementUploadTaskCreatePost(toolsAppManagementUploadTaskCreateV2Request: ToolsAppManagementUploadTaskCreateV2Request): Promise<ToolsAppManagementUploadTaskCreateV2Response> {
    const response = await this.openApi2ToolsAppManagementUploadTaskCreatePostWithHttpInfo(toolsAppManagementUploadTaskCreateV2Request);
    return response.data;
  }

  async openApi2ToolsAppManagementUploadTaskCreatePostWithHttpInfo(toolsAppManagementUploadTaskCreateV2Request: ToolsAppManagementUploadTaskCreateV2Request): Promise<ApiResponse<ToolsAppManagementUploadTaskCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementUploadTaskCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/upload_task/create/",
      queryParams: [

      ],
      body: toolsAppManagementUploadTaskCreateV2Request
    });
  }
}


