// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_ad_param.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdParamGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface AdParamApiGetRequest {
  accountId: number | string;
  marketingGoal: string;
  creativeTemplateId: number | string;
  siteSet: string[];
  marketingSubGoal?: string;
  marketingCarrierType?: string;
  marketingTargetType?: string;
  productCatalogId?: number | string;
  marketingAssetOuterSpec?: unknown;
  mpaSpec?: unknown;
  dynamicAdType?: string;
  adgroupType?: string;
  fields?: unknown;
}


export class AdParamApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AdParamApiGetRequest): Promise<AdParamGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdParamApiGetRequest): Promise<ApiResponse<AdParamGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling get");
    }

    if (request.creativeTemplateId == null) {
      throw new ApiException("Missing the required parameter 'creativeTemplateId' when calling get");
    }

    if (request.siteSet == null) {
      throw new ApiException("Missing the required parameter 'siteSet' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdParamGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/ad_param/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "marketing_sub_goal", value: request.marketingSubGoal },
        { name: "marketing_carrier_type", value: request.marketingCarrierType },
        { name: "marketing_target_type", value: request.marketingTargetType },
        { name: "creative_template_id", value: request.creativeTemplateId },
        { name: "site_set", value: request.siteSet, collectionFormat: "multi" },
        { name: "product_catalog_id", value: request.productCatalogId },
        { name: "marketing_asset_outer_spec", value: request.marketingAssetOuterSpec },
        { name: "mpa_spec", value: request.mpaSpec },
        { name: "dynamic_ad_type", value: request.dynamicAdType },
        { name: "adgroup_type", value: request.adgroupType },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


