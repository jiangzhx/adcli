// Generated from tencentad/marketing-api-go-sdk pkg/api/api_adcreative_template_detail.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdcreativeTemplateDetailGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface AdcreativeTemplateDetailApiGetRequest {
  adcreativeTemplateId: number | string;
  promotedObjectType: string;
  accountId?: number | string;
  automaticSiteEnabled?: boolean;
  siteSet?: unknown;
  isDynamicCreativeAd?: boolean;
  fields?: unknown;
}


export class AdcreativeTemplateDetailApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AdcreativeTemplateDetailApiGetRequest): Promise<AdcreativeTemplateDetailGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdcreativeTemplateDetailApiGetRequest): Promise<ApiResponse<AdcreativeTemplateDetailGetResponseData>> {
    if (request.adcreativeTemplateId == null) {
      throw new ApiException("Missing the required parameter 'adcreativeTemplateId' when calling get");
    }

    if (request.promotedObjectType == null) {
      throw new ApiException("Missing the required parameter 'promotedObjectType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdcreativeTemplateDetailGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/adcreative_template_detail/get",
      queryParams: [
        { name: "adcreative_template_id", value: request.adcreativeTemplateId },
        { name: "promoted_object_type", value: request.promotedObjectType },
        { name: "account_id", value: request.accountId },
        { name: "automatic_site_enabled", value: request.automaticSiteEnabled },
        { name: "site_set", value: request.siteSet, collectionFormat: "multi" },
        { name: "is_dynamic_creative_ad", value: request.isDynamicCreativeAd },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


