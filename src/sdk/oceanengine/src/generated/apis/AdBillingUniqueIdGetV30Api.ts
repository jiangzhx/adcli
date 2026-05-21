// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AdBillingUniqueIdGetV30Response, AdBillingUniqueIdGetV30UniqueIdType } from "../models";


export class AdBillingUniqueIdGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdBillingUniqueIdGetGet(advertiserId: number, count: number, uniqueIdType: AdBillingUniqueIdGetV30UniqueIdType): Promise<AdBillingUniqueIdGetV30Response> {
    const response = await this.openApiV30AdBillingUniqueIdGetGetWithHttpInfo(advertiserId, count, uniqueIdType);
    return response.data;
  }

  async openApiV30AdBillingUniqueIdGetGetWithHttpInfo(advertiserId: number, count: number, uniqueIdType: AdBillingUniqueIdGetV30UniqueIdType): Promise<ApiResponse<AdBillingUniqueIdGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30AdBillingUniqueIdGetGet");
    }

    if (count == null) {
      throw new ApiException("Missing the required parameter 'count' when calling openApiV30AdBillingUniqueIdGetGet");
    }

    if (uniqueIdType == null) {
      throw new ApiException("Missing the required parameter 'uniqueIdType' when calling openApiV30AdBillingUniqueIdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AdBillingUniqueIdGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/ad_billing/unique_id/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "count", value: count },
        { name: "unique_id_type", value: uniqueIdType }
      ]
    });
  }
}


