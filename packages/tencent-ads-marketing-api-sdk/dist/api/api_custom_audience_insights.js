// Generated from tencentad/marketing-api-go-sdk pkg/api/api_custom_audience_insights.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration.js";
export class CustomAudienceInsightsApi {
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
        if (request.accountId == null) {
            throw new ApiException("Missing the required parameter 'accountId' when calling get");
        }
        if (request.audienceId == null) {
            throw new ApiException("Missing the required parameter 'audienceId' when calling get");
        }
        if (request.dimensionType == null) {
            throw new ApiException("Missing the required parameter 'dimensionType' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV13Configuration.basePath,
            path: "/custom_audience_insights/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "audience_id", value: request.audienceId },
                { name: "dimension_type", value: request.dimensionType, collectionFormat: "multi" },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
