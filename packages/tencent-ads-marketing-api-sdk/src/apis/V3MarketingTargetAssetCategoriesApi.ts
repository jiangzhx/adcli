// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MarketingTargetAssetCategoriesGetResponseData } from "../models";

export interface V3MarketingTargetAssetCategoriesApiGetRequest {
  organizationId: number | string;
  marketingTargetType: string;
  marketingAssetType?: string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class V3MarketingTargetAssetCategoriesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3MarketingTargetAssetCategoriesApiGetRequest): Promise<MarketingTargetAssetCategoriesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3MarketingTargetAssetCategoriesApiGetRequest): Promise<ApiResponse<MarketingTargetAssetCategoriesGetResponseData>> {
    if (request.organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling get");
    }

    if (request.marketingTargetType == null) {
      throw new ApiException("Missing the required parameter 'marketingTargetType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<MarketingTargetAssetCategoriesGetResponseData>({
      method: "GET",
      path: "/marketing_target_asset_categories/get",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
        { name: "marketing_target_type", value: request.marketingTargetType },
        { name: "marketing_asset_type", value: request.marketingAssetType },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


