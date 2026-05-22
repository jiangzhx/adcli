// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3MaterialLabelsApi {
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
            path: "/material_labels/add",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async bind(request) {
        const response = await this.bindWithHttpInfo(request);
        return response.data;
    }
    async bindWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling bind");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/material_labels/bind",
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
            path: "/material_labels/delete",
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
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/material_labels/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "organization_id", value: request.organizationId },
                { name: "label_id", value: request.labelId },
                { name: "label_name", value: request.labelName },
                { name: "first_label_level_id_list", value: request.firstLabelLevelIdList, collectionFormat: "multi" },
                { name: "second_label_level_id_list", value: request.secondLabelLevelIdList, collectionFormat: "multi" },
                { name: "need_count", value: request.needCount },
                { name: "business_scenario", value: request.businessScenario },
                { name: "ownership_type", value: request.ownershipType },
                { name: "order_by", value: request.orderBy, collectionFormat: "multi" },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
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
            path: "/material_labels/update",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
}
