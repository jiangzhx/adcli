// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_upload_task_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementUploadTaskListV2AccountType, ToolsAppManagementUploadTaskListV2Filtering, ToolsAppManagementUploadTaskListV2Response } from "../models/index";


export interface ToolsAppManagementUploadTaskListV2ApiOpenApi2ToolsAppManagementUploadTaskListGetRequest {
  accountId: number | string;
  accountType: ToolsAppManagementUploadTaskListV2AccountType;
  filtering: ToolsAppManagementUploadTaskListV2Filtering;
}

export class ToolsAppManagementUploadTaskListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementUploadTaskListGet(request: ToolsAppManagementUploadTaskListV2ApiOpenApi2ToolsAppManagementUploadTaskListGetRequest): Promise<ToolsAppManagementUploadTaskListV2Response> {
    const response = await this.openApi2ToolsAppManagementUploadTaskListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementUploadTaskListGetWithHttpInfo(request: ToolsAppManagementUploadTaskListV2ApiOpenApi2ToolsAppManagementUploadTaskListGetRequest): Promise<ApiResponse<ToolsAppManagementUploadTaskListV2Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApi2ToolsAppManagementUploadTaskListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApi2ToolsAppManagementUploadTaskListGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApi2ToolsAppManagementUploadTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementUploadTaskListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/upload_task/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


