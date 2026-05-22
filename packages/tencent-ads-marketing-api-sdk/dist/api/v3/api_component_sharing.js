// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_component_sharing.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class ComponentSharingApi {
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
        if (request.organizationId == null) {
            throw new ApiException("Missing the required parameter 'organizationId' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/component_sharing/get",
            queryParams: [
                { name: "organization_id", value: request.organizationId },
                { name: "component_id", value: request.componentId },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "is_deleted", value: request.isDeleted },
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
            basePath: TencentAdsV30Configuration.basePath,
            path: "/component_sharing/update",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
}
