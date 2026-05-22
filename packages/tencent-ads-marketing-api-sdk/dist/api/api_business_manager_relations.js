// Generated from tencentad/marketing-api-go-sdk pkg/api/api_business_manager_relations.go
// Do not edit manually.
import { ApiClient } from "./client.js";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration.js";
export class BusinessManagerRelationsApi {
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
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV13Configuration.basePath,
            path: "/business_manager_relations/get",
            queryParams: [
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "advertiser_type", value: request.advertiserType },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
