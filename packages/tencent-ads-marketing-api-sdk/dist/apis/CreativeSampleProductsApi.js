// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class CreativeSampleProductsApi {
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
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/creative_sample_products/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "product_catalog_id", value: request.productCatalogId },
                { name: "product_outer_ids", value: request.productOuterIds, collectionFormat: "multi" },
                { name: "product_series_id", value: request.productSeriesId },
                { name: "template_id", value: request.templateId },
                { name: "template_type", value: request.templateType },
                { name: "image_id", value: request.imageId },
                { name: "video_id", value: request.videoId },
                { name: "product_fields", value: request.productFields, collectionFormat: "multi" },
                { name: "limit", value: request.limit },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
