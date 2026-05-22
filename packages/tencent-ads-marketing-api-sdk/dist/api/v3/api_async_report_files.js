// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_async_report_files.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class AsyncReportFilesApi {
    apiClient;
    constructor(apiClient = new ApiClient()) {
        this.apiClient = apiClient;
    }
    getApiClient() {
        return this.apiClient;
    }
    setApiClient(apiClient) {
        this.apiClient = apiClient;
    }
    async get(request) {
        const response = await this.getWithHttpInfo(request);
        return response.data;
    }
    async getWithHttpInfo(request) {
        if (request.taskId == null) {
            throw new ApiException("Missing the required parameter 'taskId' when calling get");
        }
        if (request.fileId == null) {
            throw new ApiException("Missing the required parameter 'fileId' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
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
