// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class CustomAudienceFilesApi {
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
    async add(request) {
        const response = await this.addWithHttpInfo(request);
        return response.data;
    }
    async addWithHttpInfo(request) {
        if (request.accountId == null) {
            throw new ApiException("Missing the required parameter 'accountId' when calling add");
        }
        if (request.audienceId == null) {
            throw new ApiException("Missing the required parameter 'audienceId' when calling add");
        }
        if (request.userIdType == null) {
            throw new ApiException("Missing the required parameter 'userIdType' when calling add");
        }
        if (request.file == null) {
            throw new ApiException("Missing the required parameter 'file' when calling add");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/custom_audience_files/add",
            queryParams: [],
            contentType: "multipart/form-data",
            formParams: {
                account_id: request.accountId,
                audience_id: request.audienceId,
                user_id_type: request.userIdType,
                operation_type: request.operationType,
                open_app_id: request.openAppId
            },
            files: {
                file: request.file
            }
        });
    }
    async get(request) {
        const response = await this.getWithHttpInfo(request);
        return response.data;
    }
    async getWithHttpInfo(request) {
        if (request.accountId == null) {
            throw new ApiException("Missing the required parameter 'accountId' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/custom_audience_files/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "audience_id", value: request.audienceId },
                { name: "custom_audience_file_id", value: request.customAudienceFileId },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
