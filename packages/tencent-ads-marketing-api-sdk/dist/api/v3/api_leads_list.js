// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_leads_list.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class LeadsListApi {
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
        if (request.timeRange == null) {
            throw new ApiException("Missing the required parameter 'timeRange' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/leads_list/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "time_range", value: request.timeRange },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "last_search_after_values", value: request.lastSearchAfterValues, collectionFormat: "multi" },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
