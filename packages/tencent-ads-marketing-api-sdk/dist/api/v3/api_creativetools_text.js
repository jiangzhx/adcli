// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_creativetools_text.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class CreativetoolsTextApi {
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
        if (request.maxTextLength == null) {
            throw new ApiException("Missing the required parameter 'maxTextLength' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/creativetools_text/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "max_text_length", value: request.maxTextLength },
                { name: "adgroup_id", value: request.adgroupId },
                { name: "keyword", value: request.keyword },
                { name: "filtering", value: request.filtering, collectionFormat: "multi" },
                { name: "number", value: request.number },
                { name: "category_first_level", value: request.categoryFirstLevel },
                { name: "category_second_level", value: request.categorySecondLevel },
                { name: "product_catalog_id", value: request.productCatalogId },
                { name: "product_outer_ids", value: request.productOuterIds, collectionFormat: "multi" },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
