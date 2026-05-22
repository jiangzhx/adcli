// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementUploadTaskListV2AccountType, ToolsAppManagementUploadTaskListV2Filtering, ToolsAppManagementUploadTaskListV2Response } from "../models";


export class ToolsAppManagementUploadTaskListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementUploadTaskListGet(accountId: number, accountType: ToolsAppManagementUploadTaskListV2AccountType, filtering: ToolsAppManagementUploadTaskListV2Filtering): Promise<ToolsAppManagementUploadTaskListV2Response> {
    const response = await this.openApi2ToolsAppManagementUploadTaskListGetWithHttpInfo(accountId, accountType, filtering);
    return response.data;
  }

  async openApi2ToolsAppManagementUploadTaskListGetWithHttpInfo(accountId: number, accountType: ToolsAppManagementUploadTaskListV2AccountType, filtering: ToolsAppManagementUploadTaskListV2Filtering): Promise<ApiResponse<ToolsAppManagementUploadTaskListV2Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApi2ToolsAppManagementUploadTaskListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApi2ToolsAppManagementUploadTaskListGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApi2ToolsAppManagementUploadTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementUploadTaskListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/upload_task/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


