// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_categories.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class CategoriesApi {
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
        if (request.verticalId == null) {
            throw new ApiException("Missing the required parameter 'verticalId' when calling get");
        }
        if (request.page == null) {
            throw new ApiException("Missing the required parameter 'page' when calling get");
        }
        if (request.pageSize == null) {
            throw new ApiException("Missing the required parameter 'pageSize' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/categories/get",
            queryParams: [
                { name: "vertical_id", value: request.verticalId },
                { name: "level", value: request.level },
                { name: "category_id", value: request.categoryId },
                { name: "category_name", value: request.categoryName },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
