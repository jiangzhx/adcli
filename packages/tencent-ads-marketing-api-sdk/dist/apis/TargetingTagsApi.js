// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class TargetingTagsApi {
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
        if (request.type_ == null) {
            throw new ApiException("Missing the required parameter 'type_' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/targeting_tags/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "type", value: request.type_ },
                { name: "tag_spec", value: request.tagSpec },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
