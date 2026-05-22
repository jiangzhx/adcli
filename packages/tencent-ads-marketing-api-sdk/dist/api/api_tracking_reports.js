// Generated from tencentad/marketing-api-go-sdk pkg/api/api_tracking_reports.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration.js";
export class TrackingReportsApi {
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
        if (request.dateRange == null) {
            throw new ApiException("Missing the required parameter 'dateRange' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV13Configuration.basePath,
            path: "/tracking_reports/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "date_range", value: request.dateRange },
                { name: "time_granularity", value: request.timeGranularity },
                { name: "promoted_object_type", value: request.promotedObjectType },
                { name: "promoted_object_id", value: request.promotedObjectId },
                { name: "feedback_url", value: request.feedbackUrl },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
