// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdBillingUniqueIdGetV30Response, AdBillingUniqueIdGetV30UniqueIdType } from "../models";


export interface OpenApiV30AdBillingUniqueIdGetGetRequest {
  advertiserId: number | string;
  count: number;
  uniqueIdType: AdBillingUniqueIdGetV30UniqueIdType;
}

export class AdBillingUniqueIdGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdBillingUniqueIdGetGet(request: OpenApiV30AdBillingUniqueIdGetGetRequest): Promise<AdBillingUniqueIdGetV30Response> {
    const response = await this.openApiV30AdBillingUniqueIdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdBillingUniqueIdGetGetWithHttpInfo(request: OpenApiV30AdBillingUniqueIdGetGetRequest): Promise<ApiResponse<AdBillingUniqueIdGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30AdBillingUniqueIdGetGet");
    }

    if (request.count == null) {
      throw new ApiException("Missing the required parameter 'count' when calling openApiV30AdBillingUniqueIdGetGet");
    }

    if (request.uniqueIdType == null) {
      throw new ApiException("Missing the required parameter 'uniqueIdType' when calling openApiV30AdBillingUniqueIdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AdBillingUniqueIdGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/ad_billing/unique_id/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "count", value: request.count },
        { name: "unique_id_type", value: request.uniqueIdType }
      ]
    });
  }
}


