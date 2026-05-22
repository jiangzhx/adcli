// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3ElementAppealReviewApi {
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
    async add(request) {
        const response = await this.addWithHttpInfo(request);
        return response.data;
    }
    async addWithHttpInfo(request) {
        if (request.data == null) {
            throw new ApiException("Missing the required parameter 'data' when calling add");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "POST",
            path: "/element_appeal_review/add",
            queryParams: [],
            contentType: "application/json",
            body: request.data
        });
    }
    async get(request) {
        const response = await this.getWithHttpInfo(request);
        return response.data;
    }
    async getWithHttpInfo(request) {
        if (request.accountId == null) {
            throw new ApiException("Missing the required parameter 'accountId' when calling get");
        }
        if (request.dynamicCreativeId == null) {
            throw new ApiException("Missing the required parameter 'dynamicCreativeId' when calling get");
        }
        if (request.componentId == null) {
            throw new ApiException("Missing the required parameter 'componentId' when calling get");
        }
        if (request.elementId == null) {
            throw new ApiException("Missing the required parameter 'elementId' when calling get");
        }
        if (request.elementFingerPrint == null) {
            throw new ApiException("Missing the required parameter 'elementFingerPrint' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/element_appeal_review/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "dynamic_creative_id", value: request.dynamicCreativeId },
                { name: "component_id", value: request.componentId },
                { name: "element_id", value: request.elementId },
                { name: "element_finger_print", value: request.elementFingerPrint },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
