// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class PropertyFilesApi {
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
        if (request.propertySetId == null) {
            throw new ApiException("Missing the required parameter 'propertySetId' when calling add");
        }
        if (request.sessionId == null) {
            throw new ApiException("Missing the required parameter 'sessionId' when calling add");
        }
        if (request.fileName == null) {
            throw new ApiException("Missing the required parameter 'fileName' when calling add");
        }
        if (request.file == null) {
            throw new ApiException("Missing the required parameter 'file' when calling add");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/property_files/add",
            queryParams: [],
            contentType: "multipart/form-data",
            formParams: {
                account_id: request.accountId,
                property_set_id: request.propertySetId,
                session_id: request.sessionId,
                file_name: request.fileName
            },
            files: {
                file: request.file
            }
        });
    }
}
