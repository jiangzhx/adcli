// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class CampaignsApi {
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
            path: "/campaigns/add",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async addNegativeword(request) {
        const response = await this.addNegativewordWithHttpInfo(request);
        return response.data;
    }
    async addNegativewordWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling addNegativeword");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/campaigns/add_negativeword",
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
            path: "/campaigns/delete",
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
            path: "/campaigns/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "filtering", value: request.filtering, collectionFormat: "multi" },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "is_deleted", value: request.isDeleted },
                { name: "weixin_official_accounts_upgrade_enabled", value: request.weixinOfficialAccountsUpgradeEnabled },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
    async getNegativeword(request) {
        const response = await this.getNegativewordWithHttpInfo(request);
        return response.data;
    }
    async getNegativewordWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling getNegativeword");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/campaigns/get_negativeword",
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
            path: "/campaigns/update",
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
            path: "/campaigns/update_configured_status",
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
            path: "/campaigns/update_daily_budget",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async updateNegativeword(request) {
        const response = await this.updateNegativewordWithHttpInfo(request);
        return response.data;
    }
    async updateNegativewordWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling updateNegativeword");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/campaigns/update_negativeword",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
}
