// Generated from tencentad/marketing-api-go-sdk pkg/api/api_outer_clues.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration.js";
export class OuterCluesApi {
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
    async actionTypeReport(request) {
        const response = await this.actionTypeReportWithHttpInfo(request);
        return response.data;
    }
    async actionTypeReportWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling actionTypeReport");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            basePath: TencentAdsV13Configuration.basePath,
            path: "/outer_clues/action_type_report",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
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
            basePath: TencentAdsV13Configuration.basePath,
            path: "/outer_clues/add",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async update(request) {
        const response = await this.updateWithHttpInfo(request);
        return response.data;
    }
    async updateWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling update");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            basePath: TencentAdsV13Configuration.basePath,
            path: "/outer_clues/update",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
}
