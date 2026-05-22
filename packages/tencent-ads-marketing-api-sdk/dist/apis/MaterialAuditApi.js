// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class MaterialAuditApi {
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
    async list(request) {
        const response = await this.listWithHttpInfo(request);
        return response.data;
    }
    async listWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling list");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/material_audit/list",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async submit(request) {
        const response = await this.submitWithHttpInfo(request);
        return response.data;
    }
    async submitWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling submit");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/material_audit/submit",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
}
