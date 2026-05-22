// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3AdgroupsApi {
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
            path: "/adgroups/add",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async delete(request) {
        const response = await this.deleteWithHttpInfo(request);
        return response.data;
    }
    async deleteWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling delete");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/adgroups/delete",
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
        if (request.accountId == null) {
            throw new ApiException("Missing the required parameter 'accountId' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/adgroups/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "filtering", value: request.filtering, collectionFormat: "multi" },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "is_deleted", value: request.isDeleted },
                { name: "fields", value: request.fields, collectionFormat: "multi" },
                { name: "pagination_mode", value: request.paginationMode },
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
            path: "/adgroups/update",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async updateBidAmount(request) {
        const response = await this.updateBidAmountWithHttpInfo(request);
        return response.data;
    }
    async updateBidAmountWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling updateBidAmount");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/adgroups/update_bid_amount",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async updateConfiguredStatus(request) {
        const response = await this.updateConfiguredStatusWithHttpInfo(request);
        return response.data;
    }
    async updateConfiguredStatusWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling updateConfiguredStatus");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/adgroups/update_configured_status",
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
            path: "/adgroups/update_daily_budget",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async updateDatetime(request) {
        const response = await this.updateDatetimeWithHttpInfo(request);
        return response.data;
    }
    async updateDatetimeWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling updateDatetime");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/adgroups/update_datetime",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
}
