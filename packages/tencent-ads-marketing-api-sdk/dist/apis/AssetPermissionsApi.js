// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class AssetPermissionsApi {
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
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling add");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/asset_permissions/add",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async delete(request) {
        const response = await this.deleteWithHttpInfo(request);
        return response.data;
    }
    async deleteWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling delete");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/asset_permissions/delete",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
}
