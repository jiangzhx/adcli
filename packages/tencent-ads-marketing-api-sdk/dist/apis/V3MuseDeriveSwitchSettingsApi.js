// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3MuseDeriveSwitchSettingsApi {
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
        if (request.marketingTargetType == null) {
            throw new ApiException("Missing the required parameter 'marketingTargetType' when calling get");
        }
        if (request.marketingCarrierType == null) {
            throw new ApiException("Missing the required parameter 'marketingCarrierType' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/muse_derive_switch_settings/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "marketing_target_type", value: request.marketingTargetType },
                { name: "marketing_carrier_type", value: request.marketingCarrierType },
                { name: "automatic_site_enabled", value: request.automaticSiteEnabled },
                { name: "site_set", value: request.siteSet, collectionFormat: "multi" },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
