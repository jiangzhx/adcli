// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3ProductCategoriesListApi {
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
        if (request.productCatalogId == null) {
            throw new ApiException("Missing the required parameter 'productCatalogId' when calling get");
        }
        if (request.page == null) {
            throw new ApiException("Missing the required parameter 'page' when calling get");
        }
        if (request.pageSize == null) {
            throw new ApiException("Missing the required parameter 'pageSize' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/product_categories_list/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "product_catalog_id", value: request.productCatalogId },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "level", value: request.level },
                { name: "category_id", value: request.categoryId },
                { name: "category_name", value: request.categoryName },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
