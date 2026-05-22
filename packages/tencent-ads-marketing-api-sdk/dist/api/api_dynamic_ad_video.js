// Generated from tencentad/marketing-api-go-sdk pkg/api/api_dynamic_ad_video.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration.js";
export class DynamicAdVideoApi {
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
            basePath: TencentAdsV13Configuration.basePath,
            path: "/dynamic_ad_video/add",
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
        if (request.productCatalogId == null) {
            throw new ApiException("Missing the required parameter 'productCatalogId' when calling get");
        }
        if (request.productMode == null) {
            throw new ApiException("Missing the required parameter 'productMode' when calling get");
        }
        if (request.productOuterId == null) {
            throw new ApiException("Missing the required parameter 'productOuterId' when calling get");
        }
        if (request.dynamicAdTemplateId == null) {
            throw new ApiException("Missing the required parameter 'dynamicAdTemplateId' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV13Configuration.basePath,
            path: "/dynamic_ad_video/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "product_catalog_id", value: request.productCatalogId },
                { name: "product_mode", value: request.productMode },
                { name: "product_outer_id", value: request.productOuterId },
                { name: "dynamic_ad_template_id", value: request.dynamicAdTemplateId },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
