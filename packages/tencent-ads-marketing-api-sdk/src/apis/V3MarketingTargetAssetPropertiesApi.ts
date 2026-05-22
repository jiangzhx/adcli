// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MarketingTargetAssetPropertiesGetResponseData } from "../models";

export interface V3MarketingTargetAssetPropertiesApiGetRequest {
  organizationId: number | string;
  marketingTargetType: string;
  marketingAssetType?: string;
  marketingAssetCategory?: string;
  fields?: unknown;
}


export class V3MarketingTargetAssetPropertiesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3MarketingTargetAssetPropertiesApiGetRequest): Promise<MarketingTargetAssetPropertiesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3MarketingTargetAssetPropertiesApiGetRequest): Promise<ApiResponse<MarketingTargetAssetPropertiesGetResponseData>> {
    if (request.organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling get");
    }

    if (request.marketingTargetType == null) {
      throw new ApiException("Missing the required parameter 'marketingTargetType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<MarketingTargetAssetPropertiesGetResponseData>({
      method: "GET",
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


