// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3OnlinePreviewQrcodeApi {
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
        if (request.dynamicCreativeId == null) {
            throw new ApiException("Missing the required parameter 'dynamicCreativeId' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/online_preview_qrcode/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "user_id_type", value: request.userIdType },
                { name: "dynamic_creative_id", value: request.dynamicCreativeId },
                { name: "preview_creative_components", value: request.previewCreativeComponents },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
