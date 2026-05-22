// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3UserOrganizationAuthenticationApi {
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
        if (request.userToken == null) {
            throw new ApiException("Missing the required parameter 'userToken' when calling get");
        }
        if (request.accountIdList == null) {
            throw new ApiException("Missing the required parameter 'accountIdList' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/user_organization_authentication/get",
            queryParams: [
                { name: "user_token", value: request.userToken },
                { name: "account_id_list", value: request.accountIdList, collectionFormat: "multi" },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
