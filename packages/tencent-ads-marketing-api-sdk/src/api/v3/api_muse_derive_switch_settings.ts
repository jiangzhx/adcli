// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_muse_derive_switch_settings.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MuseDeriveSwitchSettingsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface MuseDeriveSwitchSettingsApiGetRequest {
  accountId: number | string;
  marketingTargetType: string;
  marketingCarrierType: string;
  automaticSiteEnabled?: boolean;
  siteSet?: unknown;
  fields?: unknown;
}


export class MuseDeriveSwitchSettingsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: MuseDeriveSwitchSettingsApiGetRequest): Promise<MuseDeriveSwitchSettingsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: MuseDeriveSwitchSettingsApiGetRequest): Promise<ApiResponse<MuseDeriveSwitchSettingsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.marketingTargetType == null) {
      throw new ApiException("Missing the required parameter 'marketingTargetType' when calling get");
    }

    if (request.marketingCarrierType == null) {
      throw new ApiException("Missing the required parameter 'marketingCarrierType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<MuseDeriveSwitchSettingsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/muse_derive_switch_settings/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "marketing_target_type", value: request.marketingTargetType },
        { name: "marketing_carrier_type", value: request.marketingCarrierType },
        { name: "automatic_site_enabled", value: request.automaticSiteEnabled },
        { name: "site_set", value: request.siteSet, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


