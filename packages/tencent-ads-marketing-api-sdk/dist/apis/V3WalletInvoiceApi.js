// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.
import { ApiClient } from "../runtime/ApiClient.js";
import { ApiException } from "../runtime/ApiException.js";
export class V3WalletInvoiceApi {
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
        if (request.walletIdList == null) {
            throw new ApiException("Missing the required parameter 'walletIdList' when calling get");
        }
        if (request.dateRange == null) {
            throw new ApiException("Missing the required parameter 'dateRange' when calling get");
        }
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            path: "/wallet_invoice/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "wallet_id_list", value: request.walletIdList },
                { name: "fund_type", value: request.fundType },
                { name: "date_range", value: request.dateRange },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "primary_key", value: request.primaryKey },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
