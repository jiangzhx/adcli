// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_marketing_target_asset_detail.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MarketingTargetAssetDetailGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface MarketingTargetAssetDetailApiGetRequest {
  marketingAssetId: number | string;
  marketingTargetType: string;
  accountId?: number | string;
  organizationId?: number | string;
  fields?: unknown;
}


export class MarketingTargetAssetDetailApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: MarketingTargetAssetDetailApiGetRequest): Promise<MarketingTargetAssetDetailGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: MarketingTargetAssetDetailApiGetRequest): Promise<ApiResponse<MarketingTargetAssetDetailGetResponseData>> {
    if (request.marketingAssetId == null) {
      throw new ApiException("Missing the required parameter 'marketingAssetId' when calling get");
    }

    if (request.marketingTargetType == null) {
      throw new ApiException("Missing the required parameter 'marketingTargetType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<MarketingTargetAssetDetailGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/marketing_target_asset_detail/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "marketing_asset_id", value: request.marketingAssetId },
        { name: "marketing_target_type", value: request.marketingTargetType },
        { name: "organization_id", value: request.organizationId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


