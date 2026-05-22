// Generated from tencentad/marketing-api-go-sdk pkg/api/api_leads_call.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration.js";
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
            basePath: TencentAdsV13Configuration.basePath,
            path: "/leads_call/create",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
}
