// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_marketing_target_asset_properties.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MarketingTargetAssetPropertiesGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface MarketingTargetAssetPropertiesApiGetRequest {
  organizationId: number | string;
  marketingTargetType: string;
  marketingAssetType?: string;
  marketingAssetCategory?: string;
  fields?: unknown;
}


export class MarketingTargetAssetPropertiesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: MarketingTargetAssetPropertiesApiGetRequest): Promise<MarketingTargetAssetPropertiesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: MarketingTargetAssetPropertiesApiGetRequest): Promise<ApiResponse<MarketingTargetAssetPropertiesGetResponseData>> {
    if (request.organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling get");
    }

    if (request.marketingTargetType == null) {
      throw new ApiException("Missing the required parameter 'marketingTargetType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<MarketingTargetAssetPropertiesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/marketing_target_asset_properties/get",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
        { name: "marketing_target_type", value: request.marketingTargetType },
        { name: "marketing_asset_type", value: request.marketingAssetType },
        { name: "marketing_asset_category", value: request.marketingAssetCategory },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


