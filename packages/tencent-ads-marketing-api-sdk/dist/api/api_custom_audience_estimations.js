// Generated from tencentad/marketing-api-go-sdk pkg/api/api_custom_audience_estimations.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration.js";
export class CustomAudienceEstimationsApi {
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
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            basePath: TencentAdsV13Configuration.basePath,
            path: "/custom_audience_estimations/get",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
}
