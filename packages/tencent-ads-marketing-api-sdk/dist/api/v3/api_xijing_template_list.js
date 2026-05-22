// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_xijing_template_list.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class XijingTemplateListApi {
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
        if (request.pageTemplateId == null) {
            throw new ApiException("Missing the required parameter 'pageTemplateId' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/xijing_template_list/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "page_template_id", value: request.pageTemplateId },
                { name: "is_interaction", value: request.isInteraction },
                { name: "is_public", value: request.isPublic },
                { name: "template_source", value: request.templateSource },
                { name: "page_size", value: request.pageSize },
                { name: "page", value: request.page },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
