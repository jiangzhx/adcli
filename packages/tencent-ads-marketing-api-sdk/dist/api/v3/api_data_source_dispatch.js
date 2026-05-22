// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_data_source_dispatch.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class DataSourceDispatchApi {
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
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/data_source_dispatch/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "user_action_set_id", value: request.userActionSetId },
                { name: "type", value: request.type_ },
                { name: "name", value: request.name },
                { name: "scenes", value: request.scenes, collectionFormat: "multi" },
                { name: "switch_type", value: request.switchType },
                { name: "access_way", value: request.accessWay },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
