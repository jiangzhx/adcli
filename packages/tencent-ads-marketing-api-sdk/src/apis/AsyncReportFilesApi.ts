// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";

export interface AsyncReportFilesApiGetRequest {
  accountId: number | string;
  taskId: number | string;
  fileId: number | string;
  weixinOfficialAccountsUpgradeEnabled?: boolean;
  fields?: unknown;
}


export class AsyncReportFilesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AsyncReportFilesApiGetRequest): Promise<string> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AsyncReportFilesApiGetRequest): Promise<ApiResponse<string>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling get");
    }

    if (request.fileId == null) {
      throw new ApiException("Missing the required parameter 'fileId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<string>({
      method: "GET",
      path: "/async_report_files/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "task_id", value: request.taskId },
        { name: "file_id", value: request.fileId },
        { name: "weixin_official_accounts_upgrade_enabled", value: request.weixinOfficialAccountsUpgradeEnabled },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


