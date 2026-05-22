// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3DcComponentSummaryInfoApi {
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
        if (request.componentSummaryInsightTypeList == null) {
            throw new ApiException("Missing the required parameter 'componentSummaryInsightTypeList' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/dc_component_summary_info/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "dynamic_creative_id", value: request.dynamicCreativeId },
                { name: "component_summary_insight_type_list", value: request.componentSummaryInsightTypeList, collectionFormat: "multi" },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
