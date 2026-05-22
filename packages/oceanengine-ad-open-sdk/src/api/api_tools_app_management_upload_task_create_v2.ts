// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_upload_task_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementUploadTaskCreateV2Request, ToolsAppManagementUploadTaskCreateV2Response } from "../models/index";


export interface ToolsAppManagementUploadTaskCreateV2ApiOpenApi2ToolsAppManagementUploadTaskCreatePostRequest {
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

  async openApi2ToolsAppManagementUploadTaskCreatePost(request: ToolsAppManagementUploadTaskCreateV2ApiOpenApi2ToolsAppManagementUploadTaskCreatePostRequest): Promise<ToolsAppManagementUploadTaskCreateV2Response> {
    const response = await this.openApi2ToolsAppManagementUploadTaskCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementUploadTaskCreatePostWithHttpInfo(request: ToolsAppManagementUploadTaskCreateV2ApiOpenApi2ToolsAppManagementUploadTaskCreatePostRequest): Promise<ApiResponse<ToolsAppManagementUploadTaskCreateV2Response>> {

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


