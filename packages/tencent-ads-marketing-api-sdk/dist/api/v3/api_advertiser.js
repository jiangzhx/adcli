// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_advertiser.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class AdvertiserApi {
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
            basePath: TencentAdsV30Configuration.basePath,
            path: "/advertiser/add",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async get(request) {
        const response = await this.getWithHttpInfo(request);
        return response.data;
    }
    async getWithHttpInfo(request) {
        if (request.fields == null) {
            throw new ApiException("Missing the required parameter 'fields' when calling get");
        }
        if (request.paginationMode == null) {
            throw new ApiException("Missing the required parameter 'paginationMode' when calling get");
        }
        if (request.pageSize == null) {
            throw new ApiException("Missing the required parameter 'pageSize' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/advertiser/get",
            queryParams: [
                { name: "agency_id", value: request.agencyId },
                { name: "account_id", value: request.accountId },
                { name: "filtering", value: request.filtering, collectionFormat: "multi" },
                { name: "fields", value: request.fields, collectionFormat: "multi" },
                { name: "pagination_mode", value: request.paginationMode },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "cursor", value: request.cursor }
            ],
            contentType: "text/plain"
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
            basePath: TencentAdsV30Configuration.basePath,
            path: "/advertiser/update",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async updateDailyBudget(request) {
        const response = await this.updateDailyBudgetWithHttpInfo(request);
        return response.data;
    }
    async updateDailyBudgetWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling updateDailyBudget");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/advertiser/update_daily_budget",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
}
