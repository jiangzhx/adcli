// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_material_dcatag.go
// Do not edit manually.
import { ApiClient, ApiException } from "./client.js";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration.js";
export class MaterialDcatagApi {
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
            basePath: TencentAdsV30Configuration.basePath,
            path: "/material_dcatag/add",
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
        return this.apiClient.requestWithHttpInfo({
            method: "GET",
            basePath: TencentAdsV30Configuration.basePath,
            path: "/material_dcatag/get",
            queryParams: [
                { name: "account_id", value: request.accountId },
                { name: "image_id_list", value: request.imageIdList, collectionFormat: "multi" },
                { name: "media_id_list", value: request.mediaIdList, collectionFormat: "multi" },
                { name: "marketing_asset_id", value: request.marketingAssetId },
                { name: "marketing_target_type", value: request.marketingTargetType },
                { name: "marketing_asset_outer_spec", value: request.marketingAssetOuterSpec },
                { name: "page", value: request.page },
                { name: "page_size", value: request.pageSize },
                { name: "fields", value: request.fields, collectionFormat: "multi" }
            ],
            contentType: "text/plain"
        });
    }
}
