// Generated from tencentad/marketing-api-go-sdk pkg/api/api_dynamic_ad_video_templates.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration.js";
export class DynamicAdVideoTemplatesApi {
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
        if (request.adcreativeTemplateId == null) {
            throw new ApiException("Missing the required parameter 'adcreativeTemplateId' when calling get");
        }
        if (request.productMode == null) {
            throw new ApiException("Missing the required parameter 'productMode' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV13Configuration.basePath,
            path: "/dynamic_ad_video_templates/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "product_catalog_id", value: request.productCatalogId },
                { name: "adcreative_template_id", value: request.adcreativeTemplateId },
                { name: "product_mode", value: request.productMode },
                { name: "support_channel", value: request.supportChannel },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "template_id_list", value: request.templateIdList, collectionFormat: "multi" },
                { name: "template_name", value: request.templateName },
                { name: "dynamic_ad_template_ownership_type", value: request.dynamicAdTemplateOwnershipType },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
