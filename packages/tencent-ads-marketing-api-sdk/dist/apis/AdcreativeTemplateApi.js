// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class AdcreativeTemplateApi {
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
        if (request.promotedObjectType == null) {
            throw new ApiException("Missing the required parameter 'promotedObjectType' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/adcreative_template/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "site_set", value: request.siteSet, collectionFormat: "multi" },
                { name: "promoted_object_type", value: request.promotedObjectType },
                { name: "automatic_site_enabled", value: request.automaticSiteEnabled },
                { name: "is_dynamic_creative", value: request.isDynamicCreative },
                { name: "adcreative_template_id", value: request.adcreativeTemplateId },
                { name: "dynamic_creative_type", value: request.dynamicCreativeType },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
