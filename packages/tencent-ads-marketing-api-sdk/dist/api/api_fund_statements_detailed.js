// Generated from tencentad/marketing-api-go-sdk pkg/api/api_fund_statements_detailed.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration.js";
export class FundStatementsDetailedApi {
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
        if (request.fundType == null) {
            throw new ApiException("Missing the required parameter 'fundType' when calling get");
        }
        if (request.dateRange == null) {
            throw new ApiException("Missing the required parameter 'dateRange' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV13Configuration.basePath,
            path: "/fund_statements_detailed/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "fund_type", value: request.fundType },
                { name: "date_range", value: request.dateRange },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
