// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_asset_similarity_detail.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AssetSimilarityDetailGetResponseData, AssetSimilarityDetailUpdateRequest, AssetSimilarityDetailUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface AssetSimilarityDetailApiGetRequest {
  accountId?: number | string;
  organizationId?: number | string;
  creativeAssetId?: string;
  creativeAssetType?: string;
  fields?: unknown;
}

export interface AssetSimilarityDetailApiUpdateRequest {
  data: AssetSimilarityDetailUpdateRequest;
}


export class AssetSimilarityDetailApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AssetSimilarityDetailApiGetRequest): Promise<AssetSimilarityDetailGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AssetSimilarityDetailApiGetRequest): Promise<ApiResponse<AssetSimilarityDetailGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<AssetSimilarityDetailGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/asset_similarity_detail/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "organization_id", value: request.organizationId },
        { name: "creative_asset_id", value: request.creativeAssetId },
        { name: "creative_asset_type", value: request.creativeAssetType },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: AssetSimilarityDetailApiUpdateRequest): Promise<AssetSimilarityDetailUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: AssetSimilarityDetailApiUpdateRequest): Promise<ApiResponse<AssetSimilarityDetailUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<AssetSimilarityDetailUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/asset_similarity_detail/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


