// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3AdcreativePreviewsQrcodeApi {
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
        if (request.adgroupId == null) {
            throw new ApiException("Missing the required parameter 'adgroupId' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/adcreative_previews_qrcode/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "adgroup_id", value: request.adgroupId },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
