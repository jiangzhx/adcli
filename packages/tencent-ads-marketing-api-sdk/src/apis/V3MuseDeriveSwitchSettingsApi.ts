// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MuseDeriveSwitchSettingsGetResponseData } from "../models";

export interface V3MuseDeriveSwitchSettingsApiGetRequest {
  accountId: number | string;
  marketingTargetType: string;
  marketingCarrierType: string;
  automaticSiteEnabled?: boolean;
  siteSet?: unknown;
  fields?: unknown;
}


export class V3MuseDeriveSwitchSettingsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3MuseDeriveSwitchSettingsApiGetRequest): Promise<MuseDeriveSwitchSettingsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3MuseDeriveSwitchSettingsApiGetRequest): Promise<ApiResponse<MuseDeriveSwitchSettingsGetResponseData>> {
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


