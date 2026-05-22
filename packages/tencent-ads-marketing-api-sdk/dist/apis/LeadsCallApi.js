// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class LeadsCallApi {
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
    async create(request) {
        const response = await this.createWithHttpInfo(request);
        return response.data;
    }
    async createWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling create");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/leads_call/create",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
}
