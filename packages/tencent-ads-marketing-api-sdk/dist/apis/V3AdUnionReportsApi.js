// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3AdUnionReportsApi {
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
        if (request.fields == null) {
            throw new ApiException("Missing the required parameter 'fields' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/ad_union_reports/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "filtering", value: request.filtering },
                { name: "date_range", value: request.dateRange },
                { name: "group_by", value: request.groupBy, collectionFormat: "multi" },
                { name: "order_by", value: request.orderBy, collectionFormat: "multi" },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
