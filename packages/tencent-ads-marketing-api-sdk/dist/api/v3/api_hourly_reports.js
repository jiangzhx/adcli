// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_hourly_reports.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class HourlyReportsApi {
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
        if (request.level == null) {
            throw new ApiException("Missing the required parameter 'level' when calling get");
        }
        if (request.dateRange == null) {
            throw new ApiException("Missing the required parameter 'dateRange' when calling get");
        }
        if (request.groupBy == null) {
            throw new ApiException("Missing the required parameter 'groupBy' when calling get");
        }
        if (request.fields == null) {
            throw new ApiException("Missing the required parameter 'fields' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/hourly_reports/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "level", value: request.level },
                { name: "date_range", value: request.dateRange },
                { name: "filtering", value: request.filtering, collectionFormat: "multi" },
                { name: "group_by", value: request.groupBy, collectionFormat: "multi" },
                { name: "order_by", value: request.orderBy, collectionFormat: "multi" },
                { name: "time_line", value: request.timeLine },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
