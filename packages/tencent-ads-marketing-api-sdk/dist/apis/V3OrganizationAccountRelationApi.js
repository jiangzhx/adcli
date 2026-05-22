// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3OrganizationAccountRelationApi {
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
        if (request.paginationMode == null) {
            throw new ApiException("Missing the required parameter 'paginationMode' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/organization_account_relation/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "advertiser_type", value: request.advertiserType },
                { name: "business_unit_id", value: request.businessUnitId },
                { name: "pagination_mode", value: request.paginationMode },
                { name: "cursor", value: request.cursor },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
