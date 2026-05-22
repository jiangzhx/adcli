// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_business_point.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BusinessPointGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface BusinessPointApiGetRequest {
  siteSets: string[];
  accountId: number | string;
  fields?: unknown;
}


export class BusinessPointApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: BusinessPointApiGetRequest): Promise<BusinessPointGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: BusinessPointApiGetRequest): Promise<ApiResponse<BusinessPointGetResponseData>> {
    if (request.siteSets == null) {
      throw new ApiException("Missing the required parameter 'siteSets' when calling get");
    }

    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BusinessPointGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/business_point/get",
      queryParams: [
        { name: "site_sets", value: request.siteSets, collectionFormat: "multi" },
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


