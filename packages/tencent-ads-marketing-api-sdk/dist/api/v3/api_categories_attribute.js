// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_categories_attribute.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class CategoriesAttributeApi {
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
            path: "/categories_attribute/get",
            queryParams: [
                { name: "vertical_id", value: request.verticalId },
                { name: "last_category_id_list", value: request.lastCategoryIdList, collectionFormat: "multi" },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
