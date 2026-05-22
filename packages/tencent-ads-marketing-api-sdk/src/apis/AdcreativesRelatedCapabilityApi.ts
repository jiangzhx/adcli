// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdcreativesRelatedCapabilityGetResponseData } from "../models";

export interface AdcreativesRelatedCapabilityApiGetRequest {
  accountId: number | string;
  adId: number | string;
  fields?: unknown;
}


export class AdcreativesRelatedCapabilityApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AdcreativesRelatedCapabilityApiGetRequest): Promise<AdcreativesRelatedCapabilityGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdcreativesRelatedCapabilityApiGetRequest): Promise<ApiResponse<AdcreativesRelatedCapabilityGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.adId == null) {
      throw new ApiException("Missing the required parameter 'adId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdcreativesRelatedCapabilityGetResponseData>({
      method: "GET",
      path: "/adcreatives_related_capability/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "ad_id", value: request.adId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


