// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ConversionLinkAssetAvailableGetResponseData } from "../models";

export interface V3ConversionLinkAssetAvailableApiGetRequest {
  accountId: number | string;
  marketingGoal: string;
  marketingTargetType: string;
  marketingAssetOuterId?: string;
  fields?: unknown;
}


export class V3ConversionLinkAssetAvailableApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3ConversionLinkAssetAvailableApiGetRequest): Promise<ConversionLinkAssetAvailableGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ConversionLinkAssetAvailableApiGetRequest): Promise<ApiResponse<ConversionLinkAssetAvailableGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling get");
    }

    if (request.marketingTargetType == null) {
      throw new ApiException("Missing the required parameter 'marketingTargetType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ConversionLinkAssetAvailableGetResponseData>({
      method: "GET",
      path: "/conversion_link_asset_available/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "marketing_target_type", value: request.marketingTargetType },
        { name: "marketing_asset_outer_id", value: request.marketingAssetOuterId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


