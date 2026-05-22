// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_async_report_files.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface AsyncReportFilesApiGetRequest {
  taskId: number | string;
  fileId: number | string;
  accountId?: number | string;
  organizationId?: number | string;
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
    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling get");
    }

    if (request.fileId == null) {
      throw new ApiException("Missing the required parameter 'fileId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<string>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/async_report_files/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "task_id", value: request.taskId },
        { name: "file_id", value: request.fileId },
        { name: "organization_id", value: request.organizationId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


