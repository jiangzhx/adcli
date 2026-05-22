// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AssetSimilarityDetailGetResponseData, AssetSimilarityDetailUpdateRequest, AssetSimilarityDetailUpdateResponseData } from "../models";

export interface V3AssetSimilarityDetailApiGetRequest {
  accountId?: number | string;
  organizationId?: number | string;
  creativeAssetId?: string;
  creativeAssetType?: string;
  fields?: unknown;
}

export interface V3AssetSimilarityDetailApiUpdateRequest {
  data: AssetSimilarityDetailUpdateRequest;
}


export class V3AssetSimilarityDetailApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3AssetSimilarityDetailApiGetRequest): Promise<AssetSimilarityDetailGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3AssetSimilarityDetailApiGetRequest): Promise<ApiResponse<AssetSimilarityDetailGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<AssetSimilarityDetailGetResponseData>({
      method: "GET",
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

  async update(request: V3AssetSimilarityDetailApiUpdateRequest): Promise<AssetSimilarityDetailUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3AssetSimilarityDetailApiUpdateRequest): Promise<ApiResponse<AssetSimilarityDetailUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<AssetSimilarityDetailUpdateResponseData>({
      method: "POST",
      path: "/asset_similarity_detail/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


