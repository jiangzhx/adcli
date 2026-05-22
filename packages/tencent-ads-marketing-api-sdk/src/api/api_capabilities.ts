// Generated from tencentad/marketing-api-go-sdk pkg/api/api_capabilities.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CapabilitiesGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface CapabilitiesApiGetRequest {
  accountId: number | string;
  capability: string;
  querySpec?: unknown;
  fields?: unknown;
}


export class CapabilitiesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: CapabilitiesApiGetRequest): Promise<CapabilitiesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CapabilitiesApiGetRequest): Promise<ApiResponse<CapabilitiesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.capability == null) {
      throw new ApiException("Missing the required parameter 'capability' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CapabilitiesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/capabilities/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "capability", value: request.capability },
        { name: "query_spec", value: request.querySpec },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


